const CODE_VARIANTS = {
  JS: "JS",
  TS: "TS",
};

const TITLE = "React MaterialUI Admin";

const ACTION_TYPES = {
  OPTIONS_LANGUAGE_CHANGE: "OPTIONS_LANGUAGE_CHANGE",
  NOTIFICATIONS_CHANGE: "NOTIFICATIONS_CHANGE",
};

// Valid languages to server-side render in production
const LANGUAGES = ["en-US", "zh-CN", "ru", "pt", "es", "fr", "de", "ja-JP"];

// Work in progress
const LANGUAGES_IN_PROGRESS = LANGUAGES.slice();

// Valid languages to use in production
const LANGUAGES_LABEL = [
  {
    code: "en-US",
    text: "English",
  },
  {
    code: "zh-CN",
    text: "中文",
  },
  {
    code: "ru",
    text: "Русский",
  },
  {
    code: "pt",
    text: "Português",
  },
  {
    code: "es",
    text: "Español",
  },
  {
    code: "fr",
    text: "Français",
  },
  {
    code: "de",
    text: "Deutsch",
  },
  {
    code: "ja-JP",
    text: "日本語",
  },
];

// #default-branch-switch
const SOURCE_CODE_ROOT_URL =
  process.env.SOURCE_CODE_ROOT_URL ||
  "https://github.com/freeadmin/react-materialui-admin/blob/main";
const SOURCE_CODE_REPO =
  process.env.SOURCE_CODE_REPO ||
  "https://github.com/freeadmin/react-materialui-admin";

module.exports = {
  CODE_VARIANTS,
  TITLE,
  ACTION_TYPES,
  LANGUAGES,
  LANGUAGES_LABEL,
  LANGUAGES_IN_PROGRESS,
  SOURCE_CODE_ROOT_URL,
  SOURCE_CODE_REPO,
};
