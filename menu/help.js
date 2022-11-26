const { Telegraf } = require('telegraf')
const chalk = require("chalk")
const fs = require("fs")
exports.imageManipulation = (pref) => {
return `**──「 Image Manupulation l 」──**

${pref}wanted <Reply img>
${pref}utatoo <Reply img>
${pref}unsharpen <Reply img>
${pref}thanos <Reply img>
${pref}sniper <Reply img> 
${pref}sharpen <Reply img>
${pref}sepia <Reply img>
${pref}scary <Reply img>
${pref}rip <Reply img>
${pref}redple <Reply img>
${pref}rejected <Reply img>
${pref}posterize <Reply img>
${pref}ps4 <Reply img>
${pref}pixelize <Reply img>
${pref}missionpassed <Reply img>
${pref}moustache <Reply img>
${pref}lookwhatkarenhave <Reply img>
${pref}jail <Reply img>
${pref}invert <Reply img>
${pref}greyscale <Reply img>
${pref}glitch <Reply img>
${pref}gay <Reply img>
${pref}frame <Reply img>
${pref}fire <Reply img>
${pref}distort <Reply img>
${pref}dictator <Reply img>
${pref}deepfry <Reply img>
${pref}ddungeon <Reply img>
${pref}circle <Reply img>
${pref}challenger <Reply img>
${pref}burn <Reply img>
${pref}brazzers <Reply img>
${pref}beautiful <Reply img>

Bot tele by Zuka
`
}
exports.tools = (pref) => {
return `**──「 Tools 」──**

${pref}tourl <Reply img>

Bot tele by Zuka`
}
exports.other = (pref) => {
return `**──「 Other 」──**

${pref}cuaca <name place>

Bot tele by Zuka`
}
exports.searching = (pref) => {
return `**──「 Searching 」──**

${pref}searchimage <query>

Bot tele by Zuka`
}
exports.downloader = (pref) => {
return `**──「 Downloader 」──**

${pref}tiktok <url>
${pref}youtubemp3 <url>
${pref}youtubemp4 <url>
${pref}instagram <url>
${pref}mediafire <url>
${pref}facebook <url>
${pref}twitter <url>
${pref}spotify <url>

Bot tele by Zuka`
}
exports.allmenu = (nama, pref) => {
  return `──「 **ALL MENU**  」──
Hai **${nama}!**
**Owner : Zuka**

**──「 Downloader 」──**

${pref}tiktok <url>
${pref}youtubemp3 <url>
${pref}youtubemp4 <url>
${pref}instagram <url>
${pref}mediafire <url>
${pref}facebook <url>
${pref}twitter <url>
${pref}spotify <url>

**──「 Searching 」──**
${pref}searchimage <query>

**──「 Other 」──**
${pref}cuaca <name place>

**──「 Tools 」──**
${pref}tourl <Reply img>

**──「 Image Manipulation 」──**
${pref}wanted <Reply img>
${pref}utatoo <Reply img>
${pref}unsharpen <Reply img>
${pref}thanos <Reply img>
${pref}sniper <Reply img> 
${pref}sharpen <Reply img>
${pref}sepia <Reply img>
${pref}scary <Reply img>
${pref}rip <Reply img>
${pref}redple <Reply img>
${pref}rejected <Reply img>
${pref}posterize <Reply img>
${pref}ps4 <Reply img>
${pref}pixelize <Reply img>
${pref}missionpassed <Reply img>
${pref}moustache <Reply img>
${pref}lookwhatkarenhave <Reply img>
${pref}jail <Reply img>
${pref}invert <Reply img>
${pref}greyscale <Reply img>
${pref}glitch <Reply img>
${pref}gay <Reply img>
${pref}frame <Reply img>
${pref}fire <Reply img>
${pref}distort <Reply img>
${pref}dictator <Reply img>
${pref}deepfry <Reply img>
${pref}ddungeon <Reply img>
${pref}circle <Reply img>
${pref}challenger <Reply img>
${pref}burn <Reply img>
${pref}brazzers <Reply img>
${pref}beautiful <Reply img>

Bot tele by Zuka`
}

exports.donasi = (nama) => {
	return `
┌─「 Donasi • Pulsa 」
│ • Axis: 6283174508962
│ • 3: 628979530736
❏────

┌─「 Donasi • Non Pulsa 」
│ • Gopay: 083174508962
│ • Dana: 083174508962
❏────`
	}

exports.start = () => {
return `───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
───█▒▒░░░░░░░░░▒▒█───
────█░░█░░░░░█░░█────
─▄▄──█░░░▀█▀░░░█──▄▄─
█░░█─▀▄░░░░░░░▄▀─█░░█
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
█░░║║║╠─║─║─║║║║║╠─░░█
█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

Tele Bot By @ZukaShika
Jika ada yang eror chat owner @ZukaShika
`
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update!`), chalk.yellow(`${__filename}`))
	delete require.cache[file]
	require(file)
})
