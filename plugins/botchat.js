let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let pesan = `Hai ${name}, saya disini\n\nMohon jangan berlebihan dalam memberikan command\n\nDan Master Memberikan Saya Nama Saber Bukan Bot`
conn.reply(m.chat, pesan, m)
}
handler.customPrefix = /Bot/
handler.command = new RegExp

module.exports = handler
