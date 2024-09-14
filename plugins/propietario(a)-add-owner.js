const handler = async (m, { conn, text, args, usedPrefix, command }) => {
const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
if (!who) return conn.reply(m.chat,  `${lenguajeGB['smsAvisoMG']()} *𝙐𝙎𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊 : ${usedPrefix + command} @${m.sender.split('@')[0]}`,  m, {mentions: [m.sender]});
  switch (command) {
case 'добавитьсоздателя':
const nuevoNumero = who;
global.owner.push([nuevoNumero]);
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} *Новый номер владельца добавлен*`, m);
break;
case 'удалитьсоздателя':
const numeroAEliminar = who;
const index = global.owner.findIndex(owner => owner[0] === numeroAEliminar);
if (index !== -1) {
global.owner.splice(index, 1);
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} *𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙁𝙐𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊𝙎 𝘿𝙀 𝙇𝘼 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙊𝙒𝙉𝙀𝙍𝙎.*`,  m);
} else {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝘿𝙊 𝙉𝙊 𝙀𝙓𝙄𝙎𝙏𝙀 𝙀𝙉 𝙇𝘼 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙊𝙒𝙉𝙀𝙍𝙎.*`, m);
}
break;
}};
handler.command = /^(добавитьсоздателя|удалитьсоздателя)$/i;
handler.rowner = true;
export default handler;
