let handler = async (m, { conn, text }) => {
    let name = ('62887436568613@s.whatsapp.net')
    let panggil = `
    Adalah Tujuan Hidup Tuan @${name.replace(/@.+/, '')} 😎
    `.trim()
    let mentionedJid = [name]
  conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})

}
handler.customPrefix = /Hidup bersama loli../i
handler.command = new RegExp
handler.owner = true

module.exports = handler