let handler = async (m, { conn }) => {
let deff = 'https://api.lolhuman.xyz/api/meme/memeindo?apikey=4c9fe9d2159d5add9b152fda'
    conn.sendButtonImg(m.chat, deff, 'Nih', wm2, 'NEXT', '.meme', m)
}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme)$/i

module.exports = handler
