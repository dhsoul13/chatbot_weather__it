export const other = async (bot) => {
  try {
    await bot.on("text", (ctx) =>
      ctx.reply(
        "Ой, я не знаю такую команду(\nНажимай на /help\nЧтобы узнать, что умеет наш бот"
      )
    );
    await bot.on("photo", (ctx) => ctx.reply("👍"));

    await bot.on("sticker", (ctx) => ctx.reply("👍"));
    await bot.hears("Привет", (ctx) =>
      ctx.reply(
        "Привет, привет! \n Нажимай на /help\n Чтобы узнать, что умеет наш бот"
      )
    );
  } catch (e) {
    console.log(e);
  }
};
