const fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    let groups = Object.keys(await conn.groupFetchAllParticipating())
    m.reply(`_mengirim pesan siaran ke ${groups.length} grup_\nestimasi selesai ${groups.length * 1.5} detik`)
    for (let id of groups) {
        let bg = 'https://telegra.ph/file/42ca1bf46a366d929e7ce.jpg'
        await conn.delay(1500)
        await conn.sendButtonLoc(id, await (await fetch(bg)).buffer(), text, wm, 'broadcast', 'broadcast')
    }
    m.reply('*selesai*')
}
handler.help = ['bcloc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(loc)$/i

handler.owner = true

module.exports = handler
