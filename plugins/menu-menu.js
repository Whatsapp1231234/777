import fs from 'fs'
import translate from '@vitalets/google-translate-api'
import moment from 'moment-timezone'
import ct from 'countries-and-timezones'
import { parsePhoneNumber } from 'libphonenumber-js'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import chalk from 'chalk'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}

const commandsConfig = [

]
 
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let pp = gataVidMenu
let pareja = global.db.data.users[m.sender].pasangan 
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

let fechaMoment, formatDate, nombreLugar, ciudad = null
const phoneNumber = '+' + m.sender
const parsedPhoneNumber = parsePhoneNumber(phoneNumber)
const countryCode = parsedPhoneNumber.country
const countryData = ct.getCountry(countryCode)
const timezones = countryData.timezones
const zonaHoraria = timezones.length > 0 ? timezones[0] : 'UTC'
moment.locale(mid.idioma_code)
let lugarMoment = moment().tz(zonaHoraria)
if (lugarMoment) {
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = countryData.name
const partes = zonaHoraria.split('/')
ciudad = partes[partes.length - 1].replace(/_/g, ' ')
}else{
lugarMoment = moment().tz('America/Lima')
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = 'America'
ciudad = 'Lima'
}	
let margen = '*··················································*'
let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : taguser}* ${(conn.user.jid == global.conn.user.jid ? '' : `\n*SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

> *_${formatDate}_*
> \`${nombreLugar} - ${ciudad}\`
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *Хулиган* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Привет, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯



┏━━━━━━━━━━━━━━━━┓
┃ *<𝐌𝐄𝐍𝐔/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣*
┣ ඬ⃟сброситьссылку
┣ ඬ⃟прощание
┣ ඬ⃟описание
┣ ඬ⃟название
┣ ඬ⃟предупреждения
┣ ඬ⃟снести
┣ ඬ⃟админ
┣ ඬ⃟внимание
┣ ඬ⃟удалить
┣ ඬ⃟группу открыть 
┣ ඬ⃟группу закрыть
┣ ඬ⃟снятьадмина
┣ ඬ⃟молчуны
┣ ඬ⃟вызов
┣ ඬ⃟инфогруппы
┣ ඬ⃟ссылка
┣ ඬ⃟датьадмина
┣ ඬ⃟создатель
┣ ඬ⃟сбросАренды
┣ ඬ⃟любовь
┗━━━━━━━━━━━━━━━━┛

`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menu, m, fakeChannel, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu }}})
//conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}


}

//handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
handler.command = /^(меню|\?)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  

// Función para formatear arrays de comandos
function generateCommand(commandsArray, usedPrefix) {
const formattedCommands = commandsArray
.filter(command => {
const comandoValido = command.comando && typeof command.comando === 'function' && command.comando()
const descripcionValida = command.descripcion && typeof command.descripcion === 'function'
const contextoValido = typeof command.contexto === 'string' && command.contexto.trim() !== ''
return comandoValido || descripcionValida || contextoValido
})
.map((command, index, array) => {
const prefix = (command.showPrefix === true && ((typeof command.comando === 'function' && typeof command.comando() === 'string' && command.comando().trim() !== '') ||
(typeof command.comando === 'string' && command.comando.trim() !== ''))) ? usedPrefix : ''
let formattedCommand = ''
if (command.comando) {
if (typeof command.comando === 'function') {
const commandResult = command.comando()
if (typeof commandResult === 'string') {
formattedCommand = commandResult.trim()
}} else if (typeof command.comando === 'string') {
formattedCommand = command.comando.trim()
}}
if (formattedCommand.includes(',')) {
formattedCommand = mid.idioma_code === 'es' ? formattedCommand.split(',')[0].trim() : formattedCommand.split(',')[1].trim()
}
let formattedDescription = ''
if (command.descripcion) {
if (typeof command.descripcion === 'function') {
const descriptionResult = command.descripcion()
if (typeof descriptionResult === 'string') {
formattedDescription = descriptionResult.trim()
}} else if (typeof command.descripcion === 'string') {
formattedDescription = command.descripcion.trim()
}}
if (formattedDescription.includes('||')) {
formattedDescription = mid.idioma_code === 'es' ? formattedDescription.split('||')[0].trim() : formattedDescription.split('||')[1].trim()
}
let formattedContext = ''
if (command.contexto) {
if (typeof command.contexto === 'function') {
const contextResult = command.contexto()
if (typeof contextResult === 'string') {
formattedContext = contextResult.trim()
}} else if (typeof command.contexto === 'string' && command.contexto.trim() !== '') {
formattedContext = command.contexto.trim()
}}
let message = ''
if (formattedCommand) {
message += `✓ \`${prefix}${formattedCommand}\``
if (formattedDescription) {
message += `\n${(command.descripcion && typeof command.descripcion === 'function') ? '𖡡' : '≡'} \`\`\`${formattedDescription}\`\`\``
}
if (formattedContext) {
message += '\nⓘ _' + formattedContext + '_' + (index !== array.length - 1 ? '\n' : '')
}}
return message
})
.filter(message => message !== '')
return formattedCommands.join('\n')
}

// comando: Si hay comando en español y inglés separar por (,) máximo 2 comandos 
// descripcion: Parámetros para usar el comando. Separar por (||) máximo 2 descripciones 
// contexto: Explicación de que trata el comando
// showPrefix: Usar true para que muestre el prefijo, de lo contrario usar false
// Si algún objeto no se va usar dejar en false, menos el objeto "comando" ya que si es false no mostrará nada
const commandsInfo = [
{ comando: 'cuentasgatabot , accounts', descripcion: false, contexto: 'Cuentas oficiales', showPrefix: true },
{ comando: 'grupos , linkgc', descripcion: false, contexto: 'Grupos oficiales', showPrefix: true },
{ comando: 'donar , donate', descripcion: false, contexto: 'Apoya al proyecto donando', showPrefix: true },
{ comando: 'listagrupos , grouplist', descripcion: false, contexto: 'Grupos en donde estoy', showPrefix: true },
{ comando: 'estado , status', descripcion: false, contexto: 'Información de mí estado', showPrefix: true },
{ comando: 'infogata , infobot', descripcion: false, contexto: 'Información sobre el Bot', showPrefix: true },
{ comando: 'instalarbot , installbot', descripcion: false, contexto: 'Información y métodos de instalación', showPrefix: true },
{ comando: 'creadora , owner', descripcion: false, contexto: 'Información sobre mí Creadora', showPrefix: true },
{ comando: 'velocidad , ping', descripcion: false, contexto: 'Verifica la velocidad de este Bot', showPrefix: true },
{ comando: 'Bot', descripcion: false, contexto: 'Mensaje predeterminado del Bot', showPrefix: false },
{ comando: 'términos y condiciones , terms and conditions', descripcion: false, contexto: 'Revisa detalles al usar este Bot', showPrefix: false },
]
const commandsJadiBot = [
{ comando: 'serbot , jadibot', descripcion: false, contexto: 'Reactiva o Conviértete en Bot secundario', showPrefix: true },
{ comando: 'serbot --code , jadibot --code', descripcion: false, contexto: 'Solicita código de 8 dígitos', showPrefix: true },
{ comando: 'detener , stop', descripcion: false, contexto: 'Dejar de ser temporalmente Sub Bot', showPrefix: true },
{ comando: 'bots , listjadibots', descripcion: false, contexto: 'Lista de Bots secundarios', showPrefix: true },
{ comando: 'borrarsesion , delsession', descripcion: false, contexto: 'Borrar datos de Bot secuandario', showPrefix: true },
{ comando: 'bcbot', descripcion: false, contexto: 'Notificar a usuarios Sub Bots', showPrefix: true },
]
const commandsReport = [
{ comando: 'reporte , report', descripcion: '[texto] || [text]', contexto: 'Reportar comandos con errores', showPrefix: true },
]
const commandsLink = [
{ comando: 'botemporal , addbot', descripcion: '[enlace] [cantidad] || [link] [amount]', contexto: 'Agregar Bot temporalmente a un grupo', showPrefix: true },
]
const commandsPrem = [
{ comando: 'pase premium , pass premium', descripcion: false, contexto: 'Planes para adquirir premium', showPrefix: true },
{ comando: 'listavip , listprem', descripcion: false, contexto: 'Usuarios con tiempo premium', showPrefix: true },
{ comando: 'listapremium , listpremium', descripcion: false, contexto: 'Lista de usuarios premium', showPrefix: true },
]
const commandsGames = [
{ comando: 'matematicas , math', descripcion: '"noob, medium, hard"', contexto: 'Operaciones matemáticas 🧮', showPrefix: true },
{ comando: 'lanzar , launch', descripcion: '"cara" o "cruz"', contexto: 'Moneda de la suerte 🪙', showPrefix: true },
{ comando: 'ppt', descripcion: '"piedra", "papel" o "tijera"', contexto: 'Un clásico 🪨📄✂️', showPrefix: true },
{ comando: 'ttt', descripcion: '[Nombre de la sala] || [Room name]', contexto: 'Tres en línea/rayas ❌⭕', showPrefix: true },
{ comando: 'delttt', descripcion: false, contexto: 'Cerrar/abandonar la partida 🚪', showPrefix: true },
{ comando: 'topgays', descripcion: false, contexto: 'Clasificación de usuarios Gays 🏳️‍🌈', showPrefix: true },
{ comando: 'topotakus', descripcion: false, contexto: 'Clasificación de usuarios Otakus 🎌', showPrefix: true },
{ comando: 'toppajer@s', descripcion: false, contexto: 'Clasificación de usuarios pajeros 🥵', showPrefix: true },
{ comando: 'topintegrantes', descripcion: false, contexto: 'Mejores usuarios 👑', showPrefix: true },
{ comando: 'toplagrasa', descripcion: false, contexto: 'Usuarios más grasosos XD', showPrefix: true },
{ comando: 'toplind@s', descripcion: false, contexto: 'Los más lindos 😻', showPrefix: true },
{ comando: 'topput@s', descripcion: false, contexto: 'Los más p**** 🫣', showPrefix: true },
{ comando: 'toppanafrescos', descripcion: false, contexto: 'Los que más critican 🗿', showPrefix: true },
{ comando: 'topshiposters', descripcion: false, contexto: 'Los que se creen graciosos 🤑', showPrefix: true },
{ comando: 'topfamosos', descripcion: false, contexto: 'Los más conocidos ☝️', showPrefix: true },
{ comando: 'topparejas', descripcion: false, contexto: 'Las 5 mejores 💕', showPrefix: true },
{ comando: 'gay', descripcion: '[@tag]', contexto: 'Perfil Gay 😲', showPrefix: true },
{ comando: 'gay2', descripcion: '[@tag] o [nombre] || [@tag] or [name]', contexto: '(%) de Gay', showPrefix: true },
{ comando: 'lesbiana', descripcion: '[@tag] o [nombre] || [@tag] or [name]', contexto: '(%) de Lesbiana', showPrefix: true },
{ comando: 'manca', descripcion: '[@tag] o [nombre] || [@tag] or [name]', contexto: '(%) de Manca', showPrefix: true },
{ comando: 'manco', descripcion: '[@tag] o [nombre] || [@tag] or [name]', contexto: '(%) de Manco', showPrefix: true },
{ comando: 'pajero', descripcion: '[@tag] o [nombre] || [@tag] or [name]', contexto: '(%) de Pajero', showPrefix: true },
{ comando: 'pajera', descripcion: '[@tag] o [nombre] || [@tag] or [name]', contexto: '(%) de Pajera', showPrefix: true },
{ comando: 'puto', descripcion: '[@tag] o [nombre] || [@tag] or [name]', contexto: '(%) de Puto', showPrefix: true },
{ comando: 'puta', descripcion: '[@tag] o [nombre] || [@tag] or [name]', contexto: '(%) de Puta', showPrefix: true },
{ comando: 'rata', descripcion: '[@tag] o [nombre] || [@tag] or [name]', contexto: '(%) de Rata', showPrefix: true },
{ comando: 'love', descripcion: '[@tag] o [nombre] || [@tag] or [name]', contexto: '(%) de Love', showPrefix: true },
{ comando: 'doxxear', descripcion: '[@tag]', contexto: 'Simular Doxxeo falso 🕵️‍♀️', showPrefix: true },
{ comando: 'pregunta', descripcion: '[texto] || [text]', contexto: 'Pregunta ❔ y responderá', showPrefix: true },
{ comando: 'apostar , slot', descripcion: '[cantidad] || [amount]', contexto: 'Apuesta a la suerte 🎰', showPrefix: true },
{ comando: 'formarpareja', descripcion: false, contexto: 'Une a dos personas 💞', showPrefix: true },
{ comando: 'dado', descripcion: false, contexto: 'Envía un dado aleatorio 🎲', showPrefix: true },
{ comando: 'piropo', descripcion: false, contexto: 'Enviar un piropo 🫢', showPrefix: true },
{ comando: 'chiste', descripcion: false, contexto: 'Envía chistes 🤡', showPrefix: true },
{ comando: 'reto', descripcion: false, contexto: 'Pondrá un reto 😏', showPrefix: true },
{ comando: 'frases', descripcion: '[cantidad 1 al 99] || [amount 1-99]', contexto: 'Envía frases aleatorias 💐', showPrefix: true },
{ comando: 'acertijo', descripcion: false, contexto: 'Responde al mensaje del acertijo 👻', showPrefix: true },
{ comando: 'cancion', descripcion: false, contexto: 'Adivina la canción 🎼', showPrefix: true },
{ comando: 'trivia', descripcion: false, contexto: 'Preguntas con opciones 💭', showPrefix: true },
{ comando: 'pelicula', descripcion: false, contexto: 'Descubre la película con emojis 🎬', showPrefix: true },
{ comando: 'adivinanza', descripcion: false, contexto: 'Adivina adivinador 🧞‍♀️', showPrefix: true },
{ comando: 'ruleta', descripcion: false, contexto: 'Suerte inesperada 💫', showPrefix: true },
{ comando: 'ahorcado', descripcion: false, contexto: 'Adivina la palabras antes de que el ahorcado te atrape 😱', showPrefix: true },
{ comando: 'ruletadelban', descripcion:false, contexto: 'Elimina un usuario al azar, solo para admins ☠️', showPrefix: true }
]
const commandsAI = [
{ comando: 'simi', descripcion: '[texto] || [text]', contexto: 'Conversa con SimSimi', showPrefix: true },
{ comando: 'ia , ai', descripcion: '[texto] || [text]', contexto: 'Tecnología de ChatGPT', showPrefix: true },
{ comando: 'delchatgpt', descripcion: false, contexto: 'Eliminar historial de la IA', showPrefix: true },  
{ comando: 'iavoz , aivoice', descripcion: '[texto] || [text]', contexto: 'Respuestas en audios', showPrefix: true },
{ comando: 'calidadimg , qualityimg', descripcion: '(responde con una imagen) || (responds with an image)', contexto: 'Detalles de resolución de imagen', showPrefix: true },
{ comando: 'dalle', descripcion: '[texto] || [text]', contexto: 'Genera imagen a partir de texto', showPrefix: true },
{ comando: 'gemini', descripcion: '[texto] || [text]', contexto: 'IA, Tecnología de Google', showPrefix: true },
{ comando: 'geminimg', descripcion: '(imagen) + [texto] || (image) + [text]', contexto: 'Busca información de una imagen', showPrefix: true },
{ comando: 'hd', descripcion: '(responde con una imagen) || (responds with an image)', contexto: 'Mejorar calidad de imagen', showPrefix: true },
]
