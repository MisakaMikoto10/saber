let handler  = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(global.brp)}`, m)
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['', 'kah'].map(v => 'berapa' + v + ' <pertanyaan>')
handler.tags = ['kerang']
handler.command = /^berapa(kah)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}



global.brp = [
'1',
'10',
'20',
'30',
'40',
'50',
'60',
'70',
'80',
'99',
'150',
'340',
'423',
'500',
'676',
'780',
'812',
'975',
'1000',
'Gatau',
'5678',
'7500',
'10000',
]