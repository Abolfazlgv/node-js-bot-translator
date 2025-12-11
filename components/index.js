const homeMenuInlineKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "ترجمه با google", callback_data: "google" },
        { text: "ترجمه با microsoft", callback_data: "microsoft" },
      ],
      [{ text: "ترجمه با frazin", callback_data: "frazin" }],
    ],
  },
};

const googleDistinationLanguage = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "انگلیسی", callback_data: "en" },
        { text: "فارسی", callback_data: "fa" }
      ]
    ],
  },
};


module.exports = { homeMenuInlineKeyboard,googleDistinationLanguage };
