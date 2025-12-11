require("dotenv").config();
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
const messages = require("./utils/messages");

//start command
bot.onText(/\/start/, (msg, match) => {
  actions.homeMenu(bot, msg.chat.id);
});

bot.on("callback_query", (query) => {
  const myActions = ["google", "microsoft", "frazin"];
  const myLangs = ["fa", "en", "fa_en", "en_fa"];
  const command = query.data;
  const chatID = query.message.chat.id;
  const messageID = query.message.message_id;

  if (myActions.includes(command))
    actions.sendTranslateKeyboard(
      bot,
      chatID,
      "action",
      command,
      components[`${command}DistinationLanguage`],
      messages.select_language,
      messageID
    );

  if (myLangs.includes(command)) {
    actions.sendLanguage(bot, chatID, command, messages.send_query);
  }
});

bot.on("polling_error", (error) => {
  console.log("polling_error : ", error);
});
bot.on("webhook_error", (error) => {
  console.log("webhook_error : ", error);
});
bot.on("error", (error) => {
  console.log("error : ", error);
});
