import { Markup } from "telegraf";

export const add = async (bot) => {
  try {
    await bot.command("add", async (ctx) => {
      await ctx.reply(
        "Раздел узнать погоду",
        Markup.keyboard([["Добавить город", "Информация"]])
          .oneTime()
          .resize()
      );
    });
  } catch (e) {
    console.log(e);
  }
};
