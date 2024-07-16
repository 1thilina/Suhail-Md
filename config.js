const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_31_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICA4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICA1MixcbiAgICAgICAgODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICA2NixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICA5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaN0F0c0s4UHExblIyY25PYm9JV01rM2lTelN0U0ZobTBzMkVwUVhqUUQwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzE3NDcyNDE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMjVBODQxNDgxOEE0MTkzOTc5MkU2NzY4M0JENEM2MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjExMzY2ODBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxNzQ3MjQxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUVEQzRGRUQwMEUyRUI5NTE4ODVEMjA3QzRDNTYxQ0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTM2NjgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTc0NzI0MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQwMjk4MkJGRENDOTYyODU5NzNDN0M4ODY1NUJFQUY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTEzNjY4NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfM2hoc2hjRFJWcXkxZVNIcUV4TWd3XCIsXG4gIFwicGhvbmVJZFwiOiBcImIwOGFlZDc3LTA1NGItNGE2Mi05YTg0LWQ5OGEyOWJiMThiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NixcbiAgICAgIDI0MixcbiAgICAgIDEwLFxuICAgICAgNjcsXG4gICAgICAyMzEsXG4gICAgICAxMDQsXG4gICAgICAxNjMsXG4gICAgICAxOTMsXG4gICAgICA1MSxcbiAgICAgIDIzMyxcbiAgICAgIDI4LFxuICAgICAgMTUyLFxuICAgICAgMjUzLFxuICAgICAgMTkxLFxuICAgICAgMTQ1LFxuICAgICAgNTIsXG4gICAgICAyMjgsXG4gICAgICAxODMsXG4gICAgICAyNyxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMTQ0LFxuICAgICAgNDksXG4gICAgICAzMyxcbiAgICAgIDUxLFxuICAgICAgMTAzLFxuICAgICAgMjMwLFxuICAgICAgMTYwLFxuICAgICAgMzgsXG4gICAgICAyMTksXG4gICAgICAxNDQsXG4gICAgICA1NixcbiAgICAgIDIyNixcbiAgICAgIDk1LFxuICAgICAgMjI3LFxuICAgICAgMjQsXG4gICAgICAyMTIsXG4gICAgICAxNzcsXG4gICAgICA2OSxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNEWThMNEFNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxNzQ3MjQxODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzA1NzE4NzEyMDc2NTg6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcVVsTVFGRUtMczJiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi84VzdabHZUZXUxQU55ek5tTENqS3I4a3RJUUc2b25VWFNyVEhPWFRQMUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMHZlYWtuWm5yUWh3VlZwNnlRMGwyUXRKRzZnVTNQZWtSc0F1WUpCNlVLN3FXQlNRanJZWWJVSi9vaVJLRXd5WTdWVFFpRlh3N3gxTHBqSC9QR0VQREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZCtuMlJnSzdBalRiVlYwQjMwS0NJME94OUFpSmt6VXhxYmhvN2VIR25VK1BCRldIT215WEhLRVlWV2lXMkVDZDBzVGVjYUlTWGptY3N6Mllua0k3RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTc0NzI0MTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTM2Njc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1pNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPWk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYN1hVTk00WnpsOTJ5ZE00Q1RqUzFqUy8yZWVzUWpGbU9rZjhNMmllZDZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0ODUxMTM5MTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTEzNjY3ODcwN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
