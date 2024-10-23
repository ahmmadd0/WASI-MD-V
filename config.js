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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RvTFVxUEFqdlFRN0VnRE9vKytqMWVCa0VOSmRMWFYwbmkvbGtyU05Wcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1czV3VzbHpzeFJoNkRqVS9NQTRKUStYQWNsOWxWaVNXTDlJQTVhSjJsaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTmZvN0ZKK1VzaExHYXQyd2JhVmlVQ1Y4bk5MUXllR0hZSUlIWTZWcTA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUGxaWWFxa2xkMko0Tm1rNkRIQVlZMFArdytEQ3NJbFJRejVsZ3dGZENBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlNcUlacTVXYUF6UUVEREtFd1VmMlhmUVBOa1hPTXR6eUFCRVpXYVRta0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdvZ0xUQkhPRXU0MkVDSVcxTittc0lFS2FZdlAwZXoxa2JPbVhsS21hbnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhheUJJYmp2YkJ4UnVTdXdLQmFieTF1eWFpSWMwTk1HSEc0bkhMangzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3piODJSK3lma2dsVTJFc3RqdmZEN09qamJLUGYyaEVQRitzRUltT0VHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKUzlPM3FGdUhndmNoUUdxdlltd1FSK2FLSnBZeUNhWFBxQU1EbFdBUnFwQVE3bi9WQm5jbkM3Y0dVTDRDdTJkRkRrNWpIZ1lkNGdkTXNrQWxpdWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiJrWDdUZDlFbERMVE00dkF6c1UvMSs0ckRpRk56dGVEWS9Hb05IN1hGdmR3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE4NDU5MjgxNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDMUI2RDI0RDEyRUFDQzcxRjhDMTc5MDc1MDA2NTlDRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI5Njc1Njk2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxODQ1OTI4MTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODc0RDIxNUUyRkM5MTM1OTcxMEY2NDc3MjJCQzZDQUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTY3NTY5Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMTZjOFhKdW9TcEs1djR5bFhoLXlRUSIsInBob25lSWQiOiIxMTViMWVkNy1lYjg1LTQxYjEtOGJiYi1jMzE0MzYzMjMyOWYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQk9mcnFqQUxxWkQ1YS8zVWRaNVF0YndQemI0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt5R0F2RWo0MUV2NmVjNDE5VlVzRjQvM1hhaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWR0hKUzlTOCIsIm1lIjp7ImlkIjoiOTIzMTg0NTkyODE2OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi2KfYrdmA2YDZgNmF2YDZgNmA2K8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05LbGtkRUdFSjJENDdnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtwNW0xT1lWcU9odVBZV1J5M0NrMTVxclF6R0VGZU5ERVJwMWtCam5PVUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlN4U2pCOTRPVld3blFRdnZib0NHbjYwL3FCd2M4MEwrYTUrRmdsb0RXN3JvN1R1UUlwMXVNVDFqNWhsUVFTMHJwMVlPM2R6RzhPM0ZqWm1haTlyTkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWT0lhSHVyNldzQS9meEZZL0Y1TnVNMVdRaEtlaGI0TmZXQmlzajlLU3FnS2ZjUXFUTklRUU5mbE1EcHRPTTRReExXSTVVSG5OMFBSYlFyMGwyTW5ndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE4NDU5MjgxNjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpLZVp0VG1GYWpvYmoyRmtjdHdwTmVhcTBNeGhCWGpReEVhZFpBWTV6bEIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk2NzU2OTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSUwrIn0=";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘 BATMAN",
  author: process.env.PACK_AUTHER || "M A D E  B Y  A H M A D ",
  packname: process.env.PACK_NAME || ".",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "BATMAN",
  errorChat: process.env.ERROR_CHAT || "923184582816",
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
