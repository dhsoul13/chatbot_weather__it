export const about = (bot) => {
  try {
    bot.command("about", async (ctx) => {
      await ctx.replyWithHTML(
        "Создатели бота:\nРазработчик: Мухреев Даниил, \nДизайнер: Видякин Андрей,\nМенеджер-проектов: Михрина Ксения"
      );
    });
  } catch (e) {
    console.log(e);
  }
};
