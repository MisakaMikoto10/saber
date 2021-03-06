let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  await m.reply(global.wait)
  if (!args[0]) throw 'Anoo...url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/ig', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) {
    res.text()
    throw res.status
  }
  let json = await res.json()
  if (!json.result) throw json
  let { name, username, likes, caption, data } = json.result
  let text = `
Username: ${name} *(@${username})*
${likes} Likes
Caption:
${caption}
`.trim()
  for (let { data: url, type } of data)
    conn.sendFile(m.chat, url, 'ig' + (type == 'video' ? '.mp4' : '.jpg'), text, m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['premium']

handler.command = /^(ig(dl)?)$/i
handler.group = false
handler.premium = true
handler.register = true

handler.fail = null
handler.limit = false

module.exports = handler
