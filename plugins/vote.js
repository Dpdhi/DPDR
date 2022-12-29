let { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let Jimp = require('jimp')
let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
	let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}

//TIME
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
if (!text) return m.reply('Maaf Format Anda Salah\n\nContoh:\n.vote Deffri ganteng:)')
let [number, pesan] = text.split `|`
    let user = global.db.data.users[m.sender]
    let korban = `${number}`
    var nomor = m.sender
let gambar = fs.readFileSync('./thumbnail.jpg')
    if (!text) return m.reply('masukan query\ncontoh: .vote aku ganteng')
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `${text}`,
"options": [
	{
"optionName": "UPVOTE"
	},
	{
"optionName": "DEVOTE"
	}
],
"selectableOptionsCount": 2
	}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
handler.help = ['vote']
handler.tags = ['vote']
handler.command = /^(vote)$/i

handler.owner = true

module.exports = handler
