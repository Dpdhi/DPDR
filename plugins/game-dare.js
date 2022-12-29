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
    
    const menu2nih = `${pickRandom(global.dare)}`
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
               id: '.dare',
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
    conn.reply(m.chat, 'Maaf, Game Ini sedang error', m)
    throw e
  }
 
}
handler.help = ['dare']
handler.tags = ['game']
handler.command = /^(dare)$/i
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

global.dare = [
"makan nasi 2 sendok makan tanpa lauk apa pun, kalau seret boleh minum",
"tumpahkan orang yang membuatmu berhenti",
"hubungi naksir/acar sekarang dan kirim ss",
"drop only emote setiap kali kamu mengetik di gc/pc selama 1 hari.",
"ucapkan Selamat Datang di Who Wants To Be a Millionaire! ke semua grup yang kamu punya",
"telpon mantan bilang kangen",
"nyanyikan chorus dari lagu terakhir yang kamu mainkan",
"vn mantan/naksir/pacarmu, sapa (nama), mau nelpon, sebentar. Aku kangen🥺👉🏼👈🏼",
"Bang di meja (yang di rumah) sampai dimarahi karena berisik",
"Beritahu orang acak _Saya baru saja diberitahu bahwa saya adalah saudara kembar kamu dulu, kami berpisah, lalu saya menjalani operasi plastik. Dan ini yang paling ciyuss_",
"sebutin nama mantan",
"kirim daftar obrolan whatsapp kamu",
"mengobrol orang acak dengan bahasa gheto lalu ss di sini",
"ceritakan hal memalukan versimu sendiri",
"tag orang yang kamu benci",
"Pura-pura kerasukan, misalnya: kesurupan anjing, kesurupan belalang, kesurupan kulkas, dll.",
"ganti nama menjadi *I AM DONKEY* selama 24 jam",
"teriak *ma chuda ma chuda ma chuda* di depan rumahmu",
"jepret / posting foto pacar / naksir",
"tell me your boyfriend type!",
"bilang *aku naksir kamu, kamu mau jadi pacarku?* ke lawan jenis, terakhir kali kamu chating (submit di wa/tele), tunggu dia reply, kalau ada, drop sini",
"rekam suaramu yang berbunyi *titar ke aage do teetar, teetar ke piche do titar*", "prank chat ex and say *i love u, please come back.* without say dare!",
"chat ke contact wa sesuai urutan baterai kamu, lalu bilang ke dia *aku beruntung punya kamu!*",
"ganti nama menjadi *saya anak asep* selama 5 jam",
"ketik bengali 24 jam",
"Pakai foto selmon bhoi selama 3 hari",
"jatuhkan kutipan lagu lalu tag anggota yang cocok untuk kutipan itu",
"kirim pesan suara yang mengatakan bisakah saya memanggilmu sayang?",
"ss panggilan terbaru whatsapp",
"Katakan *KAMU SANGAT CANTIK JANGAN BERBOHONG* ke cowok!",
"pop ke anggota grup, dan katakan fuck you",
"Bersikaplah seperti ayam di depan orang tuamu",
"Ambil buku acak dan baca satu halaman dengan keras di vn n kirimkan ke sini",
"Buka pintu depanmu dan melolong seperti serigala selama 10 detik",
"Ambil selfie yang memalukan dan tempel di gambar profil kamu",
"Biarkan kelompok memilih kata dan lagu yang terkenal. kamu harus menyanyikan lagu itu dan mengirimkannya dalam voice note",
"Berjalanlah dengan siku dan lutut kamu selama yang kamu bisa",
"menyanyikan lagu kebangsaan dalam nada suara",
"Breakdance selama 30 detik di ruang duduk😂",
"Ceritakan kisah paling menyedihkan yang kamu tahu",
"buat video tarian twerk dan atur statusnya selama 5 menit",
"Makan bawang putih mentah",
"Tampilkan lima orang terakhir yang kamu kirimi SMS dan apa isi pesannya",
"letakkan nama lengkap kamu di status selama 5 jam",
"buat video dance pendek tanpa filter apa pun hanya dengan musik dan letakkan di status kamu selama 5 jam",
"panggil sahabatmu, jalang",
"Letakkan foto kamu tanpa filter di status kamu selama 10 menit",
"katakan aku cinta oli london di voice note🤣🤣",
"Kirim pesan ke mantanmu dan katakan aku masih menyukaimu",
"hubungi Crush/girlfriend/bestie sekarang dan screenshot di sini",
"munculkan ke salah satu obrolan pribadi anggota grup dan Katakan kamu jelek",
"katakan KAMU CANTIK/TAMPIL ke salah satu orang yang ada di atas panelismu atau orang pertama di daftar obrolanmu", "kirim catatan suara dan katakan, bolehkah aku memanggilmu sayang, jika kamu laki-laki tag perempuan/jika perempuan tag laki-laki ",
"tulis aku mencintaimu (nama anggota grup acak, yang sedang online) dalam obrolan pribadi, (jika anak laki-laki menulis nama perempuan/jika perempuan menulis nama laki-laki) ambil fotonya dan kirimkan ke sini",
"gunakan foto aktor bollywood apa pun sebagai pfp kamu selama 3 hari",
"Letakkan foto gebetanmu di status dengan caption, ini gebetanku",
"ubah nama menjadi I AM GAY selama 5 jam", "chat ke kontak mana saja di whatsapp dan katakan saya akan menjadi bf/gf kamu selama 5 jam",
"kirim pesan suara bilang aku naksir kamu, mau jadi pacarku atau tidak? untuk setiap orang acak dari grup (jika seorang gadis memilih laki-laki, jika laki-laki memilih perempuan",
"tampar pantatmu dengan susah payah kirim suara tamparan lewat voice note😂", "sebutkan tipe gf/bf kamu dan kirim fotonya ke sini dengan caption, cewek/laki-laki terjelek di dunia",
"teriak bravooooooooo dan kirim ke sini melalui voice note",
"jepret wajahmu lalu kirimkan ke sini",
"Kirim fotomu dengan caption, i am lesbian\nKalau Kamu Cowok kirim Caption i am Gay",
"berteriak menggunakan kata-kata kasar dan mengirimkannya ke sini melalui vn",
"teriak kamu bajingan di depan ibu/papamu",
"ganti nama menjadi saya idiot selama 24 jam",
"tampar dirimu dengan kuat dan kirimkan suara tamparan melalui voice note😂",
"katakan aku cinta pemilik bot xeon melalui voice note",
"kirim foto gf/bf kamu disini",
"buat video tantangan tarian tiktok apa saja dan letakkan di status, kamu dapat menghapusnya setelah 5 jam",
"putus dengan sahabatmu selama 5 jam tanpa memberitahunya bahwa itu suatu tantangan",
"beri tahu salah satu temanmu bahwa kamu mencintainya dan ingin menikahinya, tanpa memberitahunya bahwa itu berani",
"katakan saya suka deepak kalal melalui catatan suara", "tulis saya merasa terangsang dan letakkan di status, kamu dapat menghapusnya hanya setelah 5 jam",
"tulis saya lesbian Kalau Kamu Cowok Tulis Saya Gay dan letakkan di status, kamu dapat menghapus hanya setelah 5 jam",
"cium ibu atau papamu dan katakan aku mencintaimu😌",
"Letakkan nama ayahmu di status selama 5 jam",
"kirim kata-kata kasar di grup mana pun, terima grup ini, dan kirim bukti tangkapan layar di sini"
]
