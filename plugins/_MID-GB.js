import { es, en } from '../lib/multi-language/_default.js' 

let handler = m => m
handler.before = async function (m, { conn }) {
let idioma  = global.db.data.users[m.sender].midLanguage
let MID_GB
  
if (idioma == "en") {
MID_GB = en
} else if (idioma == "en") {
MID_GB = en
} else {
MID_GB = mid || en
}
global.mid = MID_GB	
}
export default handler
