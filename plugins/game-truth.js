const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let iggw = `https://instagram.com/b4c00t.dtz`
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let user = global.db.data.users[who]
    
    const menu2nih = `${pickRandom(global.truth)}`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: menu2nih.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./src/truthordare.jpg') },
           hydratedFooterText: `© Created By GansBOTz`,
           hydratedButtons: [{
             quickReplyButton: {
               displayText: 'N͜͡E͜͡X͜͡T͜͡',
               id: '.truth',
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
 
}
handler.help = ['truth']
handler.tags = ['game']
handler.command = /^(truth)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.truth = [
"Acara tv apa yang paling kamu benci?\nBerikan alasannya!",
"Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?",
"Pernahkah kamu menyukai seseorang? Berapa lama?", "Jika kamu bisa atau jika kamu mau, dengan gc/outside gc, dengan siapa kamu akan berteman? (mungkin berbeda/tipe yang sama)", "apa jaringan terbesar kamu?", "Pernahkah kamu menyukai cinta bertepuk sebelah tangan? jika demikian siapa? gimana rasanya gan?", 
"menjadi nyonya seseorang?",
"hal yang paling ditakuti",
"Siapa orang yang paling berpengaruh dalam hidupmu?",
"hal yang membanggakan apa yang kamu dapatkan tahun ini",
"Siapa orang yang bisa membuatmu luar biasa",
"Siapakah orang yang pernah membuatmu sangat bahagia??", 
"Siapa yang paling dekat dengan tipe pasangan ideal kamu di sini",
"Kamu suka bermain dengan siapa??",
"Apakah kamu pernah menolak orang? alasannya kenapa?",
"Sebutkan kejadian yang membuatmu terluka yang masih kamu ingat",
"Prestasi apa yang kamu dapatkan tahun ini??",
"Apa kebiasaan terburukmu di sekolah??",
"Lagu apa yang paling sering kamu nyanyikan di kamar mandi",
"Pernahkah kamu mengalami pengalaman mendekati kematian",
"Kapan terakhir kali kamu benar-benar marah. Kenapa?",
"Siapa orang terakhir yang memanggilmu",
"Apakah kamu memiliki bakat terpendam, Apa itu",
"Kata apa yang paling kamu benci?",
"Apa video YouTube terakhir yang kamu tonton?",
"Apa hal terakhir yang kamu cari di Google",
"Dengan siapa di grup ini kamu ingin bertukar nyawa selama seminggu",
"Apa hal paling menakutkan yang pernah terjadi padamu",
"Pernahkah kamu kentut dan menyalahkan orang lain",
"Kapan terakhir kali kamu membuat orang lain menangis",
"Apakah kamu pernah membuat hantu teman",
"Apakah kamu pernah melihat mayat",
"Yang mana dari anggota keluarga kamu yang paling mengganggu kamu dan mengapa",
"Jika kamu harus menghapus satu aplikasi dari ponsel kamu, yang mana itu",
"Aplikasi apa yang paling sering kamu buang waktu",
"Pernahkah kamu pura-pura sakit untuk pulang sekolah",
"Apa barang yang paling memalukan di kamarmu",
"Lima barang apa yang akan kamu bawa jika kamu terjebak di pulau terpencil",
"Pernahkah kamu tertawa terbahak-bahak sampai kencing di celana",
"Apakah kamu mencium bau kentutmu sendiri",
"Apakah kamu pernah pipis di tempat tidur saat tidur? ðŸ¤£ðŸ¤£",
"Apa kesalahan terbesar yang pernah kamu lakukan",
"Apakah kamu pernah menyontek dalam ujian",
"Apa hal terburuk yang pernah kamu lakukan",
"Kapan terakhir kali kamu menangis",
"siapa yang paling kamu cintai di antara orang tuamu",
"apakah kamu kadang-kadang memasukkan jarimu ke dalam hidungmu", 
"siapa yang naksir kamu selama hari-hari sekolah",
"katakan sejujurnya, apakah kamu menyukai laki-laki di grup ini",
"Apakah kamu pernah menyukai seseorang? berapa lama?",
"apakah kamu punya gf/bf','apa ketakutan terbesarmu?",
"Pernahkah kamu menyukai seseorang dan merasa orang itu juga menyukaimu?",
"Siapa nama mantan pacar temanmu yang pernah kamu suka diam-diam?",
"Pernahkah kamu mencuri uang ibumu atau uang ayahmu",
"apa yang membuatmu bahagia saat kamu sedih",
"Apakah kamu menyukai seseorang yang ada di grup ini? jika kamu lalu siapa?",
"Apakah kamu pernah ditipu oleh orang?",
"siapa orang terpenting dalam hidupmu",
"hal yang membanggakan apa yang kamu dapatkan tahun ini",
"siapa orang yang bisa membuatmu bahagia saat kamu sedih",
"siapa orang yang pernah membuatmu merasa tidak nyaman",
"pernah bohong sama orang tua", "masih suka sama mantan", "suka main bareng sama siapa?",
"apakah kamu pernah mencuri hal besar dalam hidup kamu? alasan mengapa?",
"Sebutkan kejadian yang membuatmu terluka yang masih kamu ingat",
"Prestasi apa yang kamu dapatkan tahun ini?",
"apa kebiasaan terburukmu di sekolah?",
"apakah kamu menyukai pembuat bot,¦„", "pernahkah kamu berpikir untuk membalas dendam dari gurumu?", "apakah kamu menyukai perdana menteri negaramu saat ini?",
"kamu bukan vegetarian atau vegetarian",
"Jika kamu bisa tidak terlihat, apa hal pertama yang akan kamu lakukan",
"apa rahasia yang kamu sembunyikan dari orang tuamu",
"Siapa naksir rahasiamu",
"siapa orang terakhir yang kamu takuti di media sosial",
"Jika jin mengabulkan tiga permintaanmu, apa yang akan kamu minta",
"Menurutmu hewan apa yang paling mirip denganmu",
"Berapa banyak selfie yang kamu lakukan dalam sehari",
"Apa acara masa kecil favoritmu",
"Jika kamu bisa menjadi karakter fiksi dalam satu hari, siapa yang akan kamu",
"Apa hal paling buruk (gosip) yang pernah kamu bilang tentang temenmu?",
"Apa hal paling memalukan dari dirimu?",
"Apa hal paling memalukan dari temanmu?",
"Apa hal pertama yang kamu lihat saat kamu melihat orang lain (lawan jenis)?",
"Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?",
"Apa hal terbodoh yang pernah kamu lakukan?",
"Apa hal terbodoh yang pernah kamu lakukan?",
"Apa ketakutan terbesar kamu?",
"Apa mimpi terburuk yang pernah kamu alami?",
"Apa mimpi terkonyol yang sampai sekarang kamu kamu ingat?",
"Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?",
"Apa sifat terburukmu menurut kamu?",
"Apa sifat yang ingin kamu rubah dari dirimu?",
"Apa sifat yang ingin kamu rubah dari temanmu?",
]
