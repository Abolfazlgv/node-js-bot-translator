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
  bot.sendMessage(chatID, "به ربات مترجم خوش امدید :) \n موتور ترجمه خود را انتخاب کنید.", inlineKeyboard);
};

module.exports = { homeMenu };
