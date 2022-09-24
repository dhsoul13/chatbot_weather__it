import { Scenes, session, Telegraf } from "telegraf";
import config from "config";
import comand from "./helpers/comand/index.js";
import { about } from "./comand/about/index.js";
import { start } from "./comand/start/index.js";
import { add } from "./comand/addCityComand/index.js";
import { other } from "./comand/other/index.js";
import { addCityScene } from "./scence/addCity/index.js";
import conectDB from "./data/index.js";
import User from "./data/modules/user.js";
import { getReq } from "./helpers/request/index.js";
import { getCityFromCootdinate } from "./helpers/getCityCoordinate/index.js";
import { parse, format } from "date-format-parse";
import { transToDeg } from "./helpers/translationToDeg/index.js";
import { getTime } from "./helpers/getTime/index.js";
import { timeIconFunc } from "./helpers/icon/timeIcon/index.js";

const startBot = async () => {
  try {
    const bot = new Telegraf(config.get("token"));
    const stage = new Scenes.Stage([addCityScene()]);
    bot.use(session());
    bot.use(stage.middleware());
    await conectDB(config.get("keyToken"));
    bot.hears("Добавить город", async (ctx) => {
      ctx.scene.enter("city");
    });
    bot.hears("Информация", async (ctx) => {
      try {
        const info = await User.findOne({ userID: ctx.message.from.id });
        if (info) {
          const result = await getCityFromCootdinate({
            coordinate: info.coordinate,
          });
          const date = format(result.timezone, "H");
          console.log(result["timezone"]);
          ctx.replyWithHTML(
            `Информация\n\nВыбранный город: <b>${
              info?.city ?? ""
            }</b>\nКолличество запросов: ${info?.count}\nКоординаты: ${
              result?.coord.lon
            } : ${result?.coord.lat} 🌍\nВремя: ${timeIconFunc(
              getTime,
              result["timezone"]
            )}\n\nПогода: ${
              result.weather[0].description ?? "опа походу баг"
            }\nТемпература: ${transToDeg({
              temp: result?.main?.temp,
            })}°C\nСкорость ветра: ${result?.wind?.speed} 🌬️\nОблачность: ${
              result?.clouds?.all
            }% ☁️`
          );
        } else {
          ctx.reply(
            `${ctx.message.from["first_name"]}, добавте город, пожалуйства!!`
          );
        }
      } catch (e) {
        console.log(1, e);
      }
    });
    /// /start
    start(bot);
    /// /help
    bot.help((ctx) => ctx.reply(comand));
    ///// about
    about(bot);
    /// add
    add(bot);
    /// other
    other(bot);
    bot.launch();
    //остановка бота
    process.once("SIGINT", () => bot.stop("SIGINT"));
    process.once("SIGTERM", () => bot.stop("SIGTERM"));
  } catch (e) {
    console.log(e);
  }
};

startBot();
