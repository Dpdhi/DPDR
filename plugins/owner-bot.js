const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
	fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
	conn.p[id] = [
	await conn.sendKontak(m.chat, kontak2, fkontak, { contexInfo: { forwardingScore: 99999, isForwarded: true } })
	]
	await delay(100)
  return conn.sendMessage(m.chat, { text: `𝙃𝙖𝙮 𝙠𝙖𝙠 @${await m.sender.split('@')[0]}, 𝙞𝙩𝙪 𝙣𝙤𝙢𝙚𝙧 𝙤𝙬𝙣𝙚𝙧𝙠𝙪 𝙟𝙖𝙣𝙜𝙖𝙣 𝙙𝙞𝙨𝙥𝙖𝙢 𝙮𝙖𝙝, 𝙘𝙝𝙖𝙩 𝙥 𝙩𝙞𝙙𝙖𝙠 𝙖𝙠𝙖𝙣 𝙙𝙞𝙗𝙖𝙡𝙖𝙨`, mentions: [m.sender] }, { quoted: conn.p[id][0] })
  await delay(100)
  return delete conn.p[id]
}
handler.command = /^(ownerbot|cbot)$/i

module.exports = handler
