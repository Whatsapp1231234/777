import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) throw `*${lenguajeGB['smsAvisoMG']()}ادخل طلبأ لاستخدام الذكاء الاصناعي مثال .بوت كيف حالك\n\n❏ مثال على الطلبات والأوامر\n❏ ${usedPrefix + command} يوصي أفضل 10 أفلام الحركة\n❏ ${usedPrefix + command} رمز JS للعبة بطاقة`    
try {
conn.sendPresenceUpdate('composing', m.chat);
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/ia2?text=${text}`)
let res = await gpt.json()
await m.reply(res.gpt)
} catch {
try {
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`)
let res = await gpt.json()
await m.reply(res.data)
} catch {
}}}
handler.command = /^(بوت|chatgpt|ia|ai|openai2|chatgpt2|ia2)$/i;
export default handler;

