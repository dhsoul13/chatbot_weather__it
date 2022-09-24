import { Scenes, session } from "telegraf";
import { createUser } from "../../data/servis/user/index.js";
import { cites } from "../../helpers/cityes/index.js";

export const addCityScene = () => {
  {
    const city = new Scenes.BaseScene("city");
    city.enter(async (ctx) => {
      await ctx.reply("Напишите свой город");
    });
    city.on("text", async (ctx) => {
      const city = ctx.message.text;
      const result = cites.find(
        (el) => el.name.toLocaleLowerCase() === city.toLocaleLowerCase()
      );
      if (result) {
        const id = ctx.message.from.id;
        await createUser({
          id: id,
          city: result.name,
          coordinate: result.coords,
        });
        await ctx.reply(`Установленно: ${result.name}`);
        ctx.session.city = result.name;
      } else {
        await ctx.reply("Чет ты не то ввел, попробуй еще раз");
        ctx.scene.reenter();
      }
      ctx.scene.leave();
    });

    city.on("message", (ctx) => ctx.reply("Тут явно не город"));

    return city;
  }
};
