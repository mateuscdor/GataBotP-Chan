let handler = async m => m.reply(`
⚡▁ ▂ ▄ ▅ ▆ ▇ █ 🚆 █ ▇ ▆ ▅ ▄ ▂ ▁⚡

💥 𝙔𝘼 𝙋𝙐𝙀𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝘼 𝙂𝘼𝙏𝘼𝘽𝙊𝙏 ❕




⚡▁ ▂ ▄ ▅ ▆ ▇ █ 🚆 █ ▇ ▆ ▅ ▄ ▂ ▁⚡
                            🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
