const TelegramBot = require("node-telegram-bot-api");

//packages
const redis = require("redis");
const client = redis.createClient();
client.connect();

//config
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

//utils
const components = require("./components");
const actions = require("./actions");

//start command
bot.onText(/\/start/, (msg, match) => {
  actions.homeMenu(bot, msg.chat.id);
});

bot.on("callback_query", (query) => {
  const command = query.data;
  const chatID = query.message.chat.id;

  if (command === "google") {
    client.set(`user:${chatID}:action`, command);
    const inlineKeyboard = components.googleDistinationLanguage;
    bot.sendMessage(
      chatID,
      "زبان مورد نظر خود را انتخاب کنید :)",
      inlineKeyboard
    );
  }
  if (command === "microsoft") {
    client.set(`user:${chatID}:action`, command);
    const inlineKeyboard = components.googleDistinationLanguage;
    bot.sendMessage(
      chatID,
      "زبان مورد نظر خود را انتخاب کنید :)",
      inlineKeyboard
    );
  }
  if (command === "frazin") {
    client.set(`user:${chatID}:action`, command);
    const inlineKeyboard = components.googleDistinationLanguage;
    bot.sendMessage( chatID, "زبان مورد نظر خود را انتخاب کنید :)", inlineKeyboard)
  }

  if (command === "fa") {
    client.set(`user:${chatID}:lang`, command);

    bot.sendMessage(chatID, "fa");
  }
  if (command === "en") {
    client.set(`user:${chatID}:lang`, command);

    bot.sendMessage(chatID, "en");
  }
});
