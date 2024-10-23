//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923184592816";
global.owner = process.env.OWNER_NUMBER || "923184592816";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU0wMVlpdTFhYUxrdkZhRERjUlNvZVU1b05LMWxadkFZS1BENDhKUTlFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHZvYS9ybkZzcW1Mek1hajNFOGN0ejhvM0s0NFFyaFJaVzhYUkJ4NnJWYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRnZadlJIYldqMlhRTyt2UDVXM0lYclhjbHFVV0tVbVozRWZVNkp5bDAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxTTVRZ1FSWWQrbjRnbmRYOXNCTUs0TVlqYUtnM3VwSU51RDN2bUhoV3djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktCSFNxYjhmYjhGK3V3ZVBvQ1FnN1pheTl4c2tscElkbFlWVG5qSUZJMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks0aXphUXk5YWgzWi81SWdhbENKSGs0WHBGU3ZObFp1TFhHZkNkckJ4RVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUozZUl0VldWYU5xSVJ1MU1CZFlLSVR6cTVaaytBK3VJYTE0cGRFYlJHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEYxanNPem1ROFFMRTA1bWxJTlVzc0NhRVZ2R0NGOTdjOXJyVzZsUXF3dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc4dWhOZlpYMkI2R3hkTGMxUGpzZ043cFJsUlpERDlNOGM0SW9rT3kzUzI1LzNqQmZhLzl4RDBJMTcwVEcwbmpmRGlTdmY1a0cxNWl6UVQ5bFZYb2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6ImhBYTc3MXM4dFJKZTRsRmFMbjFJNUs1NEpkazZma1lrTkpjdzNwS3o1cG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTg0NTkyODE2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFDRkQ1NUE5QkMyRTlCOTlDNzMwMDE3OEVCNEM3NjM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk2Nzc1ODR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE4NDU5MjgxNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQUZGQzNBOTFFRTNERTdFRTM0NTQ0ODEwMDlCMkY5OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI5Njc3NTg1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFMWN5Y1I2bVRfT0ZiYl9ncTZwU21BIiwicGhvbmVJZCI6ImY2OWI4MGQ4LWNmMGQtNDU3Yi1hYjliLTNlNmZmNzkxNDZlZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFcHhOdkwyNHYwS2wvRDhiMGRmZ2ErMVRhdWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjJzWk9kTGN4Q2M5SWcrRTU2NVhlRVRESDZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNETEVRU1FRIiwibWUiOnsiaWQiOiI5MjMxODQ1OTI4MTY6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLYp9it2YDZgNmA2YXZgNmA2YDYryJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTk9sa2RFR0VJQ1M0N2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia3A1bTFPWVZxT2h1UFlXUnkzQ2sxNXFyUXpHRUZlTkRFUnAxa0Jqbk9VRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoieDRIdUdVTnBNNnNoQW9wRnV6dWdnell2dWZjcmR5UWxSdjNobXBGaUJ0em5PNkllcHNqOFlzbm1CQXN6bE8xMWJReTVYendLT3J3SnVXcUZCWmFXQmc9PSIsImRldmljZVNpZ25hdHVyZSI6ImJGdmptR1JSZ3F3Rjc3b2VESHo4cmE5aERHZE94b1F5NGw5WVlRVmZQNU9LWVozUVhCWXhuQXpQUVovaFo3dHhab1BaNVJGSFM5Y1NZMHlVSHRQS2dnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTg0NTkyODE2OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWktlWnRUbUZham9iajJGa2N0d3BOZWFxME14aEJYalF4RWFkWkFZNXpsQiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTY3NzU4MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJTUEifQ==";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-BATMAN",
  author: process.env.PACK_AUTHER || "M A D E  B Y  B A T M A N",
  packname: process.env.PACK_NAME || ".",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "BATMAN",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
