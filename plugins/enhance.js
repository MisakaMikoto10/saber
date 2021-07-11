const fetch = require('node-fetch')
const FormData = require('form-data')

let handler = async (m) => {
  await m.reply(global.wait)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let body = new FormData
  body.append('image', img, 'image')
  let res = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
    method: 'POST',
    body
  })
  if (res.status !== 200) throw await res.json()
  await conn.sendFile(m.chat, await res.buffer(), 'hd.jpg', 'Nih, hd kan?', m)
}
handler.help = ['hd (caption|reply media)', 'enhance (caption|reply media)']
handler.tags = ['creator']
handler.command = /^(hd|enhance)$/i
handler.register = true
handler.limit = 3

module.exports = handler