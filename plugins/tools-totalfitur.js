let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `Total Fitur saat ini: ${totalf}`,m)
}

handler.help = ['totalfitur']
handler.tags = ['tools']
handler.command = ['totalfitur']
handler.limit = true
module.exports = handler
