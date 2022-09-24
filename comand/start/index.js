export const start = async (bot) => {
  try {
    await bot.start((ctx) => {
      ctx.reply(
        `Привет ${
          ctx.message.from["first_name"] ? ctx.message.from["first_name"] : "👻"
        },ты запустил/запустила Бот-погода\nНажимай на /help\nЧтобы узнать, что умеет наш бот`
      );
    });
  } catch (e) {
    console.log(e);
  }
};
