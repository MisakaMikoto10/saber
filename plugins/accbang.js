let handler = async (m, { conn }) => {
  if (m.fromMe) throw 'Skip'
  //if (isAdmin) throw 'Padahal udah jadi admin'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
