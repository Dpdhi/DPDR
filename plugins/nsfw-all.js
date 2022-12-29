const axios = require ("axios")
let handler = async (m, {command, conn}) => {
let isi = '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ'
let buronan = 'ketik Enable Untuk Menyalakan NSFW Di Grup Ini'
if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButtonDoc(m.chat, isi, buronan, 'ᴇɴᴀʙʟᴇ', '.on nsfw', m)
  
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let ch = db.data.chats[m.chat].premnsfw
  //--------------------------
m.reply('_Tunggu Kids. . ._')
m.reply('1 Limit Telah Digunakan')
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/nsfw/${command}?apikey=APIKEY`)
conn.sendButtonImg(m.chat, haha.data, `nih ngab ${command}`, titlebot, '🔄 NEXT 🔄', `.${command}`, m)
}
handler.command = handler.help = ['cum', 'ahegao', 'ass', 'bdsm', 'blowjob', 'cuckold', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'gifs', 'jahy', 'manga', 'masturbation', 'neko', 'orgy', 'panties', 'pussy', 'neko2', 'tentacles', 'thighs', 'yuri', 'zettai']
handler.tags = ['nsfw']
handler.limit = true
handler.premium = false
handler.group = true
handler.private = false

module.exports = handler
