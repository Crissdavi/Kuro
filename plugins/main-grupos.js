import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.ibb.co/3N4StyG/file.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D*

1-Comunidad 𝙆𝙤𝙧𝙪𝙙𝙖 𝙤𝙛𝙘
https://chat.whatsapp.com/IozDcUnkCoVDBQBDNYF6GB

*【 ✦️  𝙆𝙤𝙧𝙪𝙙𝙖 𝙤𝙛𝙘 - Lady K's ✦️ 】* ${group}

*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

➠ Enlace anulado? entre aquí! 

Canal :
♪  ᴛᴇᴀᴍ ᴋᴏʀᴜᴅᴀ ᴏꜰᴄ ♩
*✰* ${canal}

> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
