const redis = require("redis");
const client = redis.createClient();
client.connect();

const homeMenu = (bot, chatID) => {
  const inlineKeyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "ترجمه با google (🇺🇸)", callback_data: "google" },
          { text: "ترجمه با microsoft (🇺🇸)", callback_data: "microsoft" },
        ],
        [{ text: "ترجمه با frazin (🇮🇷)", callback_data: "frazin" }],
      ],
    },
  };
  bot.sendMessage(
    chatID,
    "به ربات مترجم خوش امدید :) \n موتور ترجمه خود را انتخاب کنید.",
    inlineKeyboard
  );
};

const sendTranslateKeyboard = (
  bot,
  chatID,
  field,
  command,
  keyboard,
  textMessage,
  messageID
) => {
  client.set(`user:${chatID}:${field}`, command, {
    EX: 180,
  });
  const inlineKeyboard = keyboard;
  bot.editMessageText(textMessage, {
    chat_id: chatID,
    message_id: messageID,
    reply_markup: inlineKeyboard.reply_markup,
  });
};

const sendLanguage = (bot, chatID, lang, message) => {
  client.set(`user:${chatID}:lang`, lang, {
    EX: 180,
  });
  bot.sendMessage(chatID, message);
};
module.exports = { homeMenu, sendTranslateKeyboard, sendLanguage };
