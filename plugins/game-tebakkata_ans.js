const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teka/i.test(m.quoted.contentText)) return !0
  this.tebakkata = this.tebakkata ? this.tebakkata : {}
  if (!(id in this.tebakkata)) return this.sendButton(m.chat, 'Soal itu telah berakhir', wm, 'tebak kata', '.tebakkata', m)
  if (m.quoted.id == this.tebakkata[id][0].id) { // undefined T_T
  let json = JSON.parse(JSON.stringify(this.tebakkata[id][1]))
  if (['.teka', 'Bantuan', ''].includes(m.text)) return !0
  if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
    global.db.data.users[m.sender].exp += this.tebakkata[id][2]
    this.sendButton(m.chat, benar + ` +${this.tebakkata[id][2]} XP`, wm, 'Lagi', '.tebakkata', m)
    clearTimeout(this.tebakkata[id][3])
    delete this.tebakkata[id]
  } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) this.sendButton(m.chat, dikit, wm, 'Bantuan', '.teka', m)
  else this.sendButton(m.chat, salah, wm, 'Bantuan', '.teka', m)
  }
  return !0
}
handler.exp = 0

module.exports = handler
