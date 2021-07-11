let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].isBanned = true
    m.reply('Terima kasih Admin!')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['closegroup']
handler.tags = ['group']
handler.command = /^closegroup$/i
handler.group = true
handler.admin = true

module.exports = handler