let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

 /**************************** TIME *********************/
 
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let id = m.chat
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let teksbio = `gg`
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
     {
      let judul = `${global.ucapan}, ${name}\n\nPilih dibawah kak ! o(〃＾▽＾〃)o`
      let gw = `㋛created By ${global.author}𓂺`
      const sections = [
   {
	title: `⫹⫺ SOUND MENU –––––––––·•`,
	rows: [
    {title: "Sound Ultah", rowId: ".soundultah"},
	{title: "Sound 1", rowId: ".sound1"},
    {title: "Sound 2", rowId: ".sound2"},
	{title: "Sound 3", rowId: ".sound3"},
	{title: "Sound 4", rowId: ".sound4"},
	{title: "Sound 5", rowId: ".sound5"},
	{title: "Sound 6", rowId: ".sound6"},
	{title: "Sound 7", rowId: ".sound7"},
	{title: "Sound 8", rowId: ".sound8"},
	{title: "Sound 9", rowId: ".sound9"},
	{title: "Sound 10", rowId: ".sound10"},
	{title: "Sound 11", rowId: ".sound11"},
	{title: "Sound 12", rowId: ".sound12"},
	{title: "Sound 13", rowId: ".sound13"},
	{title: "Sound 14", rowId: ".sound14"},
	{title: "Sound 15", rowId: ".sound15"},
	{title: "Sound 16", rowId: ".sound16"},
	{title: "Sound 17", rowId: ".sound17"},
	{title: "Sound 18", rowId: ".sound18"},
	{title: "Sound 19", rowId: ".sound19"},
    {title: "Sound 20", rowId: ".sound20"},
	{title: "Sound 21", rowId: ".sound21"},
    {title: "Sound 22", rowId: ".sound22"},
	{title: "Sound 23", rowId: ".sound23"},
	{title: "Sound 24", rowId: ".sound24"},
	{title: "Sound 25", rowId: ".sound25"},
	{title: "Sound 26", rowId: ".sound26"},
	{title: "Sound 27", rowId: ".sound27"},
	{title: "Sound 28", rowId: ".sound28"},
	{title: "Sound 29", rowId: ".sound29"},
	{title: "Sound 30", rowId: ".sound30"},
	{title: "Sound 31", rowId: ".sound31"},
	{title: "Sound 32", rowId: ".sound32"},
	{title: "Sound 33", rowId: ".sound33"},
	{title: "Sound 34", rowId: ".sound34"},
	{title: "Sound 35", rowId: ".sound35"},
	{title: "Sound 36", rowId: ".sound36"},
	{title: "Sound 37", rowId: ".sound37"},
	{title: "Sound 38", rowId: ".sound38"},
	{title: "Sound 39", rowId: ".sound39"},
    {title: "Sound 40", rowId: ".sound40"},
	{title: "Sound 41", rowId: ".sound41"},
    {title: "Sound 42", rowId: ".sound42"},
	{title: "Sound 43", rowId: ".sound43"},
	{title: "Sound 44", rowId: ".sound44"},
	{title: "Sound 45", rowId: ".sound45"},
	{title: "Sound 46", rowId: ".sound46"},
	{title: "Sound 47", rowId: ".sound47"},
	{title: "Sound 48", rowId: ".sound48"},
	{title: "Sound 49", rowId: ".sound49"},
	{title: "Sound 50", rowId: ".sound50"},
	{title: "Sound 51", rowId: ".sound51"},
	{title: "Sound 52", rowId: ".sound52"},
	{title: "Sound 53", rowId: ".sound53"},
	{title: "Sound 54", rowId: ".sound54"},
	{title: "Sound 55", rowId: ".sound55"},
	{title: "Sound 56", rowId: ".sound56"},
	{title: "Sound 57", rowId: ".sound57"},
	{title: "Sound 58", rowId: ".sound58"},
	{title: "Sound 59", rowId: ".sound59"},
    {title: "Sound 60", rowId: ".sound60"},
	{title: "Sound 61", rowId: ".sound61"},
    {title: "Sound 62", rowId: ".sound62"},
	{title: "Sound 63", rowId: ".sound63"},
	{title: "Sound 64", rowId: ".sound64"},
	{title: "Sound 65", rowId: ".sound65"},
	{title: "Sound 66", rowId: ".sound66"},
	{title: "Sound 67", rowId: ".sound67"},
	{title: "Sound 68", rowId: ".sound68"},
	{title: "Sound 69", rowId: ".sound69"},
	{title: "Sound 70", rowId: ".sound70"},
	{title: "Sound 71", rowId: ".sound71"},
	{title: "Sound 72", rowId: ".sound72"},
	{title: "Sound 73", rowId: ".sound73"},
	{title: "Sound 74", rowId: ".sound74"},
	{title: "Sound 75", rowId: ".sound75"},
	{title: "Sound 76", rowId: ".sound76"},
	{title: "Sound 77", rowId: ".sound77"},
	{title: "Sound 78", rowId: ".sound78"},
	{title: "Sound 79", rowId: ".sound79"},
    {title: "Sound 80", rowId: ".sound80"},
	{title: "Sound 81", rowId: ".sound81"},
    {title: "Sound 82", rowId: ".sound82"},
	{title: "Sound 83", rowId: ".sound83"},
	{title: "Sound 84", rowId: ".sound84"},
	{title: "Sound 85", rowId: ".sound85"},
	{title: "Sound 86", rowId: ".sound86"},
	{title: "Sound 87", rowId: ".sound87"},
	{title: "Sound 88", rowId: ".sound88"},
	{title: "Sound 89", rowId: ".sound89"},
	{title: "Sound 90", rowId: ".sound90"},
	{title: "Sound 91", rowId: ".sound91"},
	{title: "Sound 92", rowId: ".sound92"},
	{title: "Sound 93", rowId: ".sound93"},
	{title: "Sound 94", rowId: ".sound94"},
	{title: "Sound 95", rowId: ".sound95"},
	{title: "Sound 96", rowId: ".sound96"},
	{title: "Sound 97", rowId: ".sound97"},
	{title: "Sound 98", rowId: ".sound98"},
	{title: "Sound 99", rowId: ".sound99"},
    {title: "Sound 100", rowId: ".sound100"},
	{title: "Sound 101", rowId: ".sound101"},
    {title: "Sound 102", rowId: ".sound102"},
	{title: "Sound 103", rowId: ".sound103"},
	{title: "Sound 104", rowId: ".sound104"},
	{title: "Sound 105", rowId: ".sound105"},
	{title: "Sound 106", rowId: ".sound106"},
	{title: "Sound 107", rowId: ".sound107"},
	{title: "Sound 108", rowId: ".sound108"},
	{title: "Sound 109", rowId: ".sound109"},
	{title: "Sound 110", rowId: ".sound110"},
	{title: "Sound 111", rowId: ".sound111"},
	{title: "Sound 112", rowId: ".sound112"},
	{title: "Sound 113", rowId: ".sound113"},
	{title: "Sound 114", rowId: ".sound114"},
	{title: "Sound 115", rowId: ".sound115"},
	{title: "Sound 116", rowId: ".sound116"},
	{title: "Sound 117", rowId: ".sound117"},
	{title: "Sound 118", rowId: ".sound118"},
	{title: "Sound 119", rowId: ".sound119"},
]
  },
]
    const listMessage = {
      text: judul,
      footer: gw,
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "Klik Disini",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }
    
  
}
handler.help = ['soundmenu']
handler.tags = ['main']
handler.command = /^(soundmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
