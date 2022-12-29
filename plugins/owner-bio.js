const delay = time => new Promise(res => setTimeout(res, time))
let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
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
	let id = m.chat
	ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2022, status: 1, surface: 1, message: `Hallo ${name} ${global.ucapan}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
	fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
	let ppown = await conn.profilePictureUrl(ownernya + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `➪ *BIODATA* ⌫
⫹⫺ *💌 Nama* : ${global.author}
⫹⫺ *✉️ Nama RL* : ${global.RL}
⫹⫺ *♂️ Gender* : ${global.gender}
⫹⫺ *🕋 Agama* : ${global.agama}
⫹⫺ *⏰ Tanggal lahir* : Private 😎
⫹⫺ *🎨 Umur* : ${global.age}
⫹⫺ *🧮 Kelas* : ${global.kelas}
⫹⫺ *🧩 Hobby* : ${global.hobi}
⫹⫺ *💬 Sifat* : ASIK DAH KALAU DAH KENAL
⫹⫺ *🗺️ Tinggal* : ${global.tempat}
⫹⫺ *❤️ Waifu* : Suka Gojo

⫹⫺ *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${linkig}
⫹⫺ *🐈 ɢɪᴛʜᴜʙ:* ${linkgh}`
conn.sendButtonDoc(m.chat, teksbio, wm,'M͜͡E͜͡N͜͡U͜͡','.menu', ftroli, { gifPlayback: true, contextInfo: { externalAdReply: {title: namabot, body: date, sourceUrl: linkyt, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.command = /^(ownerbio|cbio)$/i

module.exports = handler
