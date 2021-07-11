let handler = async (m, { conn, text }) => {
    let name = ('6289524339740@s.whatsapp.net')
    let panggil = `
    _Diam Tak Peduli.._\n_Bergerak Memberantas Para Babi_
    `.trim()
    let mentionedJid = [name]
  conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})

}
handler.customPrefix = /6289524339740/i
handler.command = new RegExp

module.exports = handler