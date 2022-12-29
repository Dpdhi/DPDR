const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker.js')
const fs = require('fs')
let handler = async (m, { conn, command }) => {

global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let stiker = await sticker(null, global.API(`https://telegra.ph/file/a32b24ef4c1651dd5e081.jpg`), global.packname, global.author)
 conn.sendFile(m.chat, stiker, 'sticker.webp', '', fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 9999999,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://youtube.com/channel/UCmEQy5B3GhmfNVSrHEzv-uA',
    mediaType: 2, 
    description: 'https://youtube.com/channel/UCmEQy5B3GhmfNVSrHEzv-uA',
    title: "Tunggu Sebentar Stah",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/6411cc04828f3cc335324.jpg')).buffer(),
    sourceUrl: 'https://youtube.com/channel/UCmEQy5B3GhmfNVSrHEzv-uA'
  }
  } })
  let audio = `https://raw.githubusercontent.com/Aisyah-Aldi/Sound/main/${command}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 9999999,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://instagram.com/b4c00t.dtz',
    mediaType: 2, 
    description: urlnya,
    title: "⌫     ⌨︎     ☏︎",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/6411cc04828f3cc335324.jpg')).buffer(),
    sourceUrl: 'https://instagram.com/b4c00t.dtz',
  }
  } })
}
handler.command = /^(sound1|sound2|sound3|sound4|sound5|sound6|sound7|sound8|sound9|sound10|sound11|sound12|sound13|sound14|sound15|sound16|sound17|sound18|sound19|sound20|sound21|sound22|sound23|sound24|sound25|sound26|sound27|sound28|sound29|sound30|sound31|sound32|sound33|sound34|sound35|sound36|sound37|sound38|sound39|sound40|sound41|sound42|sound43|sound44|sound45|sound46|sound47|sound48|sound49|sound50|sound51|sound52|sound53|sound54|sound55|sound56|sound57|sound58|sound59|sound60sound61|sound62|sound63|sound64|sound65|sound66|sound67|sound68|sound69|sound70|sound71|sound72|sound73|sound74|sound75|sound76|sound77|sound78|sound79|sound80|sound81|sound82|sound83|sound84|sound85|sound86|sound87|sound88|sound89|sound90|sound91|sound92|sound93|sound94|sound95|sound96|sound97|sound98|sound99|sound100|sound101|sound102|sound103|sound104|sound105|sound106|sound107|sound108|sound109|sound110|sound111|sound112|sound113|sound114|sound115|sound116|sound117|sound118|sound119)$/i
handler.owner = false
module.exports = handler