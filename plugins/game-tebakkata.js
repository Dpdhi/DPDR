const fs = require('fs')
const fetch = require('node-fetch')
const timeout = 120000
const poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', wm, 'Bantuan', usedPrefix + 'teka', conn.tebakkata[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync('./api/tebakkata.json'))
    let random = Math.floor(Math.random() * res.length)
    let json = res[random]
    let caption = `
    ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teka untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakkata[id] = [
    await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'tebak kata?')).buffer(), caption, wm, 'Bantuan', usedPrefix + 'teka', m),
    json,
    poin,
    setTimeout(() => {
        if (conn.tebakkata[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'tebak kata', usedPrefix + 'tebakkata', conn.tebakkata[id][0])
            delete conn.tebakkata[id]
    }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i

module.exports = handler