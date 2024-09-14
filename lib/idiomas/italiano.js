const lenguaje = () => { return 'it' } //ITALIANO

//MESSAGE NOTICES
const smsAvisoRG = () => { return `╰⊱✅⊱ *РЕЗУЛЬТАТ* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *ПРЕДУПРЕЖДЕНИЕ* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMATION* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ОШИБКА* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ * НЕПРАВОМЕРНОЕ ДЕЙСТВИЕ* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *ОТЧЕТ* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *ОТЧЕТ* ⊱💚⊱╮\n\n` }


//PARAMETERS IN COMMANDS
const smsRowner = () => { return `\`\`\`¡¡ЭТУ КОМАНДУ МОГУ ИСПОЛЬЗОВАТЬ ТОЛЬКО Я, КАК СОЗДАТЕЛЬ БОТА!!\`\`\`` }//BOT NUMBER
const smsOwner = () => { return `\`\`\`¡¡ЭТУ КОМАНДУ МОЖЕТ ИСПОЛЬЗОВАТЬ ТОЛЬКО МОЙ СОЗДАТЕЛЬ!!\`\`\`` }//OWNER
const smsMods = () => { return `\`\`\`¡¡ЭТУ КОМАНДУ МОГУТ ИСПОЛЬЗОВАТЬ ТОЛЬКО МОДЕРАТОРЫ И МОЙ СОЗДАТЕЛЬ!!\`\`\`` }//MODERATORS
const smsPremium = () => { return `\`\`\`¡¡ЭТА КОМАНДА ДОСТУПНА ТОЛЬКО ПРЕМИУМ-ПОЛЬЗОВАТЕЛЯМ И MY CREATOR!! ЧТОБЫ ПОЛУЧИТЬ ПРЕМИУМ-ПРОПУСК, КУПИТЕ ЕГО С ПОМОЩЬЮ #pass premium\`\`\`` }//PREMIUM USERS
const smsGroup = () => { return `\`\`\`¡¡ЭТА КОМАНДА МОЖЕТ ИСПОЛЬЗОВАТЬСЯ ТОЛЬКО В ГРУППАХ!!\`\`\`` }//FOR GROUPS
const smsPrivate = () => { return `\`\`\`¡¡ЭТА КОМАНДА МОЖЕТ БЫТЬ ИСПОЛЬЗОВАНА ТОЛЬКО В ЧАСТНОМ ПОРЯДКЕ.!!\`\`\`` }//TO THE PRIVATE
const smsAdmin = () => { return `\`\`\`¡¡ЭТА КОМАНДА ПРЕДНАЗНАЧЕНА ТОЛЬКО ДЛЯ АДМИНИСТРАТОРОВ!!\`\`\`` }//ADMINS
const smsBotAdmin = () => { return `\`\`\`¡¡ Я ДОЛЖЕН БЫТЬ АДМИНИСТРАТОРОМ, ЧТОБЫ ВЫ МОГЛИ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ!!\`\`\`` }//BOT WITH ADMIN
const smsUnreg = () => { return `\`\`\`¡¡ЧТОБЫ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ, ВАМ НЕОБХОДИМО БЫТЬ ЗАРЕГИСТРИРОВАННЫМ, ВВЕДИТЕ #verify ДЛЯ РЕГИСТРАЦИИ!!\`\`\`` }//VERIFY
const smsRestrict = () => { return `\`\`\`¡¡ЭТА КОМАНДА ОГРАНИЧЕНА МОИМ СОЗДАТЕЛЕМ!!\`\`\`` }//RESTRICT COMMAND


//LIST MENU
const smsTime = () => { return `Текущее время`}
const smsUptime = () => { return `Бегущий во время`}
const smsVersion = () => { return `Версия ${global.gt}`}
const smsTotalUsers = () => { return `всего польователей`}
const smsMode = () => { return `он находится в режиме`}
const smsModePublic = () => { return `общественный`}
const smsModePrivate = () => { return `частный`}
const smsBanChats = () => { return `заблокированые чаты`}
const smsBanUsers = () => { return `заблокированые пользователя`}
const smsPareja = () => { return `пара`}
const smsResultPareja = () => { return `единственный`}
const smsSaludo = () => { return `👋 привет добро пожаловать👋`}
const smsDia = () => { return `🌇 доброе утро⛅`}
const smsTarde = () => { return `🏙️ добрый вечер🌤️`}
const smsTarde2 = () => { return `🌆 добрый вечер 🌥️`}
const smsNoche = () => { return `🌃 доброй ночи💫`}
const smsListaMenu = () => { return `⊹ меню ⊹`}
const smsLista1 = () => { return `🌟 ИНФОРМАЦИЯ О РОБОТЕ GATABOT🌟`}
const smsLista2 = () => { return `💖создатель 💖`}
const smsLista3 = () => { return `🎁ПОЖЕРТВОВАТЬ : ПОДДЕРЖАТЬ 🎁`}
const smsLista4 = () => { return `🚀 скорость 🚀`}
const smsLista5 = () => { return `💡ИНФОРМАЦИЯ О МЕНЮ 💡`}
const smsLista6 = () => { return `🌀ПОЛНОЕ МЕНЮ 🌀`}
const smsLista7 = () => { return `🐈УСТАНОВИТЬ GATABOT 🐈`}
const smsLista8 = () => { return `🍄БЫТЬ СУБ-БОТОМ 🍄`}
const smsLista9 = () => { return `📄 ПОЛОЖЕНИЯ, УСЛОВИЯ И КОНФИДЕНЦИАЛЬНОСТЬ 📄`}
const smsLista10 = () => { return `🌟ПРИКЛЮЧЕНИЕ И ВЕРШИНА 🌟`}
const smsLista11 = () => { return `🏆МИРОВАЯ ВЕРШИНА🏆`}
const smsLista12 = () => { return `🏅ПРЕМИУМ-ПОЛЬЗОВАТЕЛИ🏅`}
const smsLista13 = () => { return `🎟️СТАНЬТЕ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕМ 🎟️`}
const smsLista14 = () => { return `🛣️МИССИИ 🛣️`}
const smsLista15 = () => { return `⚗️ МЕНЮ RPG ⚗️`}
const smsLista16 = () => { return `🏪 ПОКУПКА В МАГАЗИНЕ🏪`}
const smsLista17 = () => { return `🎒инвентарь 🎒`}
const smsLista18 = () => { return `🌟 мультимедиа 🌟`}
const smsLista19 = () => { return `📲МЕНЮ ЗАГРУЗКИ 📲`}
const smsLista20 = () => { return `🔍 МЕНЮ ПОИСКА 🔍`}
const smsLista21 = () => { return `🛰️ ПРЕОБРАЗОВАТЕЛЬ МЕНЮ 🛰️`}
const smsLista22 = () => { return `🧰 МЕНЮ МОДИФИКАТОРОВ АУДИО 🧰`}
const smsLista22_1 = () => { return `🔩 МЕНЮ ИНСТРУМЕНТОВ 🔩`}
const smsLista23 = () => { return `🌟 ВЕСЕЕЛЬЕ 🌟`}
const smsLista24 = () => { return `🎡ДИНАМИЧНЫЕ ИГРЫ 🎡`}
const smsLista25 = () => { return `🔊 МЕНЮ АУДИО 🔊`}
const smsLista26 = () => { return `🎈 МЕНЮ СТИКЕРОВ И ФИЛЬТРОВ🎈`}
const smsLista27 = () => { return `✨ МЕНЮ ЭФФЕКТОВ И ЛОГОТИПОВ✨`}
const smsLista28 = () => { return `🌅МЕНЮ С ЛОГОТИПАМИ 2 🌅`}
const smsLista29 = () => { return `⛩️СЛУЧАЙНЫЕ МЕМЫ И АНИМЕ ⛩️`}
const smsLista30 = () => { return `🔞 КОМАНДЫ ДЛЯ ВЗРОСЛЫХ +18🔞`}
const smsLista31 = () => { return `🌟 SETTINGS 🌟`}
const smsLista32 = () => { return `🔰 МЕНЮ ДЛЯ ГРУПП 🔰`}
const smsLista33 = () => { return `📑ТИПЫ СПИСКОВ📑`}
const smsLista34 = () => { return `⚙️ ЦЕНТР НАСТРОЙКИ⚙️`}
const smsLista35 = () => { return `💎МЕНЮ ВЛАДЕЛЬЦА💎`}

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ ДОБРО ПОЖАЛОВАТЬ!!*\n┊💖 @user\n┊📄*ОЗНАКОМЬТЕСЬ С ОПИСАНИЕМ ГРУППЫ*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *ОН ПОКИНУЛ ГРУППУ СКОРО ВЕРНЕТСЯ* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@userТЕПЕРЬ ВЫ ЯВЛЯЕТЕСЬ АДМИНИСТРАТОРОМ В ЭТОЙ ГРУППЕ!!*'}
const smsSdemote = () => { return '*@user ТЕПЕРЬ ВЫ НЕ ЯВЛЯЕТЕСЬ АДМИНОМ!!*'}
const smsSdesc = () => { return '*НОВОЕ ОПИСАНИЕ ГРУППЫ ВЫГЛЯДИТ СЛЕДУЮЩИМ ОБРАЗОМ:*\n\n@desc'}
const smsSsubject = () => { return '*НОВОЕ НАЗВАНИЕ ГРУППЫ:*\n\n@subject'}
const smsSicon = () => { return '*НОВАЯ КАРТИНКА ГРУППЫ!!*'}
const smsSrevoke = () => { return '*ссылка на группу!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢соединение ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ УСПЕШНОЕ ПОДКЛЮЧЕНИЕ К WHATSAPP  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => { return `😸 ЗАГРУЗКА...\n`}
const smsCodigoQR = () => { return `\n✅ СРОК ДЕЙСТВИЯ QR-КОДА ПРИ СКАНИРОВАНИИ ИСТЕКАЕТ ЧЕРЕЗ 45 СЕКУНД ✅`}
const smsConexionOFF = () => { return `\n⚠️ НЕТ ПОДКЛЮЧЕНИЯ, УДАЛИТЕ ПАПКУ ${global.authFile} И ОТСКАНИРУЙТЕ QR-КОД ⚠️`}
const smsClearTmp = () => { return `\n╭» 🟢 МУЛЬТИМЕДИЯ 🟢\n│→ ФАЙЛЫ ИЗ ПАПКИ TMP УДАЛЕНЫ\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSession = () => { return `\n╭» 🔵 ${global.authFile} 🔵\n│→ ИСКЛЮЧЕНЫ НЕСУЩЕСТВЕННЫЕ СЕАНСЫ\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeOldFiles = () => { return `\n╭» 🟠файлы 🟠\n│→ ОСТАТОЧНЫЕ ФАЙЛЫ УДАЛЕНЫ\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB1 = () => { return `\n╭» 🟡 GataJadiBot 🟡\n│→УДАЛЯТЬ НЕЧЕГО\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB2 = () => { return `\n╭» ⚪ GataJadiBot ⚪\n│→ УДАЛЕНЫ НЕСУЩЕСТВЕННЫЕ ФАЙЛЫ\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB3 = () => { return `\n╭» 🔴 GataJadiBot 🔴\n│→ПРОИЗОШЛА ОШИБКА\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️\n`} 
const smspurgeOldFiles1 = () => { return `\n╭» АРХИВ 🟣\n│→`} 
const smspurgeOldFiles2 = () => { return `УДАЛИТЬ УСПЕШНО\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeOldFiles3 = () => { return `\n╭» 🔴 АРХИВ 🔴\n│→`} 
const smspurgeOldFiles4 = () => { return `НЕ УДАЛОСЬ УДАЛИТЬ\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️❌\n`}
const smsConexioncerrar = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹\n┆ ⚠️СОЕДИНЕНИЕ ЗАКРЫТО, ПОВТОРНОЕ ПОДКЛЮЧЕНИЕ....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹`}
const smsConexionperdida = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂\n┆ ⚠️ ПОТЕРЯНО СОЕДИНЕНИЕ С СЕРВЕРОМ, ПОВТОРНОЕ ПОДКЛЮЧЕНИЕ....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂`}
const smsConexionreem = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗\n┆ ⚠️СОЕДИНЕНИЕ ЗАМЕНЕНО, ОТКРЫТ ДРУГОЙ НОВЫЙ СЕАНС, ПОЖАЛУЙСТА, СНАЧАЛА ЗАКРОЙТЕ ТЕКУЩИЙ СЕАНС.\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗`}
const smsConexionreinicio = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓\n┆ ❇️ПОДКЛЮЧЕНИЕ К СЕРВЕРУ...\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓`}
const smsConexiontiem = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸\n┆ ⌛ВРЕМЯ ОЖИДАНИЯ СОЕДИНЕНИЯ ИСТЕКЛО, ПОВТОРНОЕ ПОДКЛЮЧЕНИЕ....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸`}
const smsConexiondescon = (reason, connection) => { return `\n⚠️❗НЕИЗВЕСТНАЯ ПРИЧИНА ОТКЛЮЧЕНИЯ: ${reason || ''} >> ${connection || ''}`}
const smsMainBot = () => { return "'main.js' БЫЛ УСПЕШНО ОБНОВЛЕН"}

//_allantilink.js
const smsTextoYT = () => { return '😻Супер ГатаБот-MD - WhatsApp '}
const smsApagar = () => { return '❌ДЕАКТИВИРОВАТЬ'}
const smsEncender = () => { return '✅ АКТИВИРОВАТЬ'}
const smsEnlaceTik = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА TIKTOK*\n\n*Я ПРИСТУПАЮ К УДАЛЕНИЮ ВАС*`}
const smsEnlaceYt = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА ЮТУБ*\n\n*Я ПРИСТУПАЮ К УДАЛЕНИЮ ВАС*`}
const smsEnlaceTel = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА ТЕЛЕГРАМ*\n\n*Я ПРИСТУПАЮ К УДАЛЕНИЮ ВАС`}
const smsEnlaceFb = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА ФЕЙСБУK*\n\n*Я ПРИСТУПАЮ К УДАЛЕНИЮ ВАС*`}
const smsEnlaceIg = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА ИНСТАГРАМ*\n\n*Я ПРИСТУПАЮ К УДАЛЕНИЮ ВАС*`}
const smsEnlaceTw = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА ТВИТЕР*\n\n*Я ПРИСТУПАЮ К УДАЛЕНИЮ ВАС*`}
const smsAllAdmin = () => { return `*МНЕ НУЖНО БЫТЬ АДМИНИСТРАТОРОМ, ЧТОБЫ ИМЕТЬ ВОЗМОЖНОСТЬ УДАЛЯТЬ НЕЗВАНЫХ ГОСТЕЙ*`}
const smsSoloOwner = () => { return `*МОЙ СОЗДАТЕЛЬ ДОЛЖЕН АКТИВИРОВАТЬ ФУНКЦИЮ\n*#на ограничивать*`}

//handler.js
const smsCont1 = () => { return `*🔴СБОЙ КОМАНДЫ 🔴*`}
const smsCont2 = () => { return `*⚠️плагин:*`}
const smsCont3 = () => { return `*⚠️ ПОЛЬЗОВАТЕЛЬ:*`}
const smsCont4 = () => { return `*⚠️ команды:*`}
const smsCont5 = () => { return `*⚠️ ошибка:*`}
const smsCont6 = () => { return `*❗СООБЩИТЕ ОБ ЭТОМ СООБЩЕНИИ, ИСПОЛЬЗУЯ КОМАНДУ #reporte, ЧТОБЫ УСТРАНИТЬ ЕГО*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*В НЕМ НЕТ БРИЛЛИАНТОВ!! 💎 ВЫ МОЖЕТЕ ПОЙТИ В МАГАЗИН, ВЫПОЛНИВ КОМАНДУ*`}
const smsCont8 = () => { return ` *бриллиант💎 ПОЛЬЗОВАТЕЛЯ*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*НУЖЕН УРОВЕНЬ ➡️*`}
const smsCont10 = () => { return `*ЧТОБЫ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ. ВАШ ТЕКУЩИЙ УРОВЕНЬ РАВЕН ➡️*`}
const smsCont11 = () => { return `*ЗАВЕРШИТЕ РАБОТУ С ПОМОЩЬЮ КОМАНДЫD*`}
const smsCont12 = () => { return `ОТЛИЧНАЯ КОМПАНИЯ!! 😼`}
const smsCont13 = () => { return `КТО-ТО ПРИСОЕДИНИЛСЯ!! 🥳`}
const smsCont14 = () => { return `КТО-ТО УШЕЛ!! 🧐`}
const smsCont15 = () => { return `*ПРИВЕТ*`}
const smsCont16 = () => { return `*ВИДЕОЗВОНОК* 📲`}
const smsCont17 = () => { return `*ЗВОНОК* 📞`}
const smsCont18 = () => { return `*ВЫ НЕ АВТОРИЗОВАНЫ, ПОЭТОМУ Я СОБИРАЮСЬ ЗАБЛОКИРОВАТЬ ВАС*\n\n*ЕСЛИ ВЫ ПОЗВОНИЛИ СЛУЧАЙНО, СВЯЖИТЕСЬ С ЧЕЛОВЕКОМ, СОЗДАВШИМ ЭТОГО БОТА*`}
const smsCont19 = () => { return `АНТИУДАЛЕНИЕ`}
const smsCont20 = () => { return `*┃✤ Имя:*`}
const smsCont21 = () => { return `*┃✤ Отправка удаленного сообщения...*`}

//_anti-internacional.js
const smsInt1 = () => { return `*ЭТОТ номер*`}
const smsInt2 = () => { return `*НЕ ДОПУСКАЕТСЯ В ЭТУ ГРУППУ!!*`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*ПОСКОЛЬКУ ВЫ ЯВЛЯЕТЕСЬ АДМИНИСТРАТОРОМ ЭТОЙ ГРУППЫ, ВЫ НЕ БУДЕТЕ УДАЛЕНЫ*`}
const smsEnlaceWat = () => { return `${lenguaje['smsAvisoAG']()}*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА WHATSAPP*\n\n*Я ПРИСТУПАЮ К УДАЛЕНИЮ ВАС*`}


//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguaje['smsAvisoAG']()}В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА, СОДЕРЖАЩАЯ HTTPS\n\nЯ ПРИСТУПАЮ К УДАЛЕНИЮ ВАС`}

//_antispam.js
const smsNoSpam = () => { return `🤨 НЕ ЗАНИМАЙТЕСЬ СПАМОМ, ВЫ НЕ СМОЖЕТЕ ИСПОЛЬЗОВАТЬ ${global.packname} для ${60000 / 1000 - 59} МИНУТУ`}

//_antispam_.js
const smsNoSpam2 = () => { return `БЫЛ НЕЗАРЕГИСТРИРОВАН ПОСЛЕ${60000 / 1000 - 59}минута. ПОЖАЛУЙСТА, НЕ РАССЫЛАЙТЕ СПАМ!!`}

//Texto
const smsConMenu = () => { return `☘️ МЕНЮ`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ПРОИЗОШЛА НЕПРЕДВИДЕННАЯ ОШИБКА.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\- ВОЗНИКЛО НЕУДОБСТВО. пробовать снова.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ЧТО-ТО ПОШЛО НЕ ТАК, СООБЩИТЕ ОБ ЭТОЙ КОМАНДЕ, ИСПОЛЬЗУЯ:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `НЕЕЕТ!!! 🤬 ПРОИЗНЕСИ ЭТО СЛОВО`}
const smsToxic2 = () => { return `ЭТО ЗАПРЕЩЕНО, НЕ ДОЛЖНО БЫТЬ ТОКСИЧНЫМ`}
const smsToxic3 = () => { return `*ПРЕДУПРЕЖДЕНИЕ*\n⚠️`}
const smsToxic4 = () => { return `😭 ИЗВЕНИТЕ`}
const smsToxic5 = () => { return `☢️ОТКЛЮЧИТЬ АНТИТОКСИЧЕСКИЙ`}
const smsToxic6 = () => { return `Я ПРЕДУПРЕЖДАЛ ТЕБЯ НЕСКОЛЬКО РАЗ!!`}
const smsToxic7 = () => { return `ВЫ ПОЛУЧИЛИ ВСЕ 4 ПРЕДУПРЕЖДЕНИЯ, ТЕПЕРЬ ВЫ БУДЕТЕ ИСКЛЮЧЕНЫ🙄`}

//Tienda
const eExp = () => { return '⚡Опыт' } 
const eDiamante = () => { return '💎 БРИЛЛИАНТ' } 
const eDiamantePlus = () => { return '💎+ БРИЛЛИАНТ+' }
const eToken = () => { return '🪙МОНЕТА' } 
const eEsmeralda = () => { return '💚Изумруд' } 
const eJoya = () => { return '♦️ Драгоценность' }
const eMagia = () => { return '🌀Магия' } 
const eOro = () => { return '👑 ЗОЛОТО' } 
const eGataCoins = () => { return '🐱 ГатаКоины' }
const eGataTickers = () => { return '🎫 Тикеры Gata' } 
const eEnergia = () => { return '✨ Энергия' }

const ePocion = () => { return '🥤 Зелье' }
const eAgua = () => { return '💧 ВОДА' }
const eBasura = () => { return '🗑 Мусор' }
const eMadera = () => { return '🪵Дерево' }
const eRoca = () => { return '🪨Рок' }
const ePiedra = () => { return '🥌Камень' }
const eCuerda = () => { return '🕸️Строка' }
const eHierro = () => { return '⛓️ Железо' }
const eCarbon = () => { return '⚱️Уголь' }
const eBotella = () => { return '🍶Бутылка' }
const eLata = () => { return '🥫 Мочь' }
const eCarton = () => { return '🪧Картон' } 

const eEletric = () => { return '💡 Электричество' }
const eBarraOro = () => { return '〽️Золотой слиток' }
const eOroComun = () => { return '🧭 Обычное золото' }
const eZorroG = () => { return '🦊🌫️ Большая Лиса' }
const eBasuraG = () => { return '🗑🌫️ СУПЕР МУСОР' }
const eLoboG = () => { return '🐺🌫️ Супер Волк' }
const eMaderaG = () => { return '🛷🌫️Супер-дерево' }
const eEspada = () => { return '⚔️Меч' }
const eCarnada = () => { return '🪱 Приманка' }
const eBillete = () => { return '💵Банкноты' }
const ePinata = () => { return '🪅Пиньята' }
const eGancho = () => { return '🪝 крюк' }
const eCanaPescar = () => { return '🎣Удочка для ловли рыбы' } 

const eCComun = () => { return '📦 общий ящик' }
const ePComun = () => { return '🥡 необычный ящик' }
const eCMistica = () => { return '🗳️ мифическая шкатулка' }
const eCMascota = () => { return '📫 лоток для животных' }
const eCJardineria = () => { return '💐 садовый ящик' }
const eClegendaria = () => { return '🎁 легендарная коробка' } 

const eUva = () => { return '🍇 виноград' }
const eManzana = () => { return '🍎 яблоко' }
const eNaranja = () => { return '🍊 апельсин' }
const eMango = () => { return '🥭 манго' }
const ePlatano = () => { return '🍌 банан' } 

const eSUva = () => { return '🌾🍇 семена винограда' }
const eSManzana = () => { return '🌾🍎 семена яблока' }
const eSNaranja = () => { return '🌾🍊 семена апельсина' }
const eSMango = () => { return '🌾🥭 косточка манго' }
const eSPlatano = () => { return '🌾🍌 семена банана' } 

const eCentauro = () => { return '🐐Кентавр' }
const eAve = () => { return '🦅 орел' }
const eGato = () => { return '🐈 кот' }
const eDragon = () => { return '🐉 дракон' }
const eZorro = () => { return '🦊 лиса' }
const eCaballo = () => { return '🐎 лошадь' }
const eFenix = () => { return '🕊️ голубь' }
const eLobo = () => { return '🐺 волк' }
const ePerro = () => { return '🐶 собака' } 

const eAMascots = () => { return '🍖 корм для животных' }
const eCCentauro = () => { return '🐐🥩 корм для коров' }
const eCAve = () => { return '🦅🥩 корм для птиц' }
const eCMagica = () => { return '🌀🥩 волшебный корм' }
const eCDragon = () => { return '🐉🥩 корм для драконов' }
const eACaballo = () => { return '🐎🥩 корм для лошадей' }
const eCFenix = () => { return '🕊️🥩 корм для голубей' } 


//config-on y off.js
const smsWel1 = () => { return `🎉 добро пожаловать`}
const smsWel2 = () => { return `Приветственное сообщение для новых участников в группах`}
const smsDete1 = () => { return `🔔 обнаружить`}
const smsDete2 = () => { return `Уведомления о действиях внутри Группы`}
const smsANivel1 = () => { return `🆙АВТОМАТИЧЕСКИЙ УРОВЕНЬ`}
const smsANivel2 = () => { return `повышайте уровень каждого автоматически; (начисляются награды за повышение уровня)`}
const smsRestri1 = () => { return `⛔ЧТОБЫ ОГРАНИЧИТЬ`}
const smsRestri2 = () => { return `доступная функция для добавления или удаления людей в группах`}
const smsLlamar1 = () => { return `🚫 анти звонок`}
const smsLlamar2 = () => { return `Блокируйте людей, которые совершают звонки`}
const smsAntiSp1 = () => { return `🚯 антиспам`}
const smsAntiSp2 = () => { return `Запретите использование команд, когда кто-то рассылает какой-либо спам`}
const smsModP1 = () => { return `🌐 ПУБЛИЧНЫЙ РЕЖИМ`}
const smsModP2 = () => { return `Включите функцию, чтобы каждый мог пользоваться GataBot`}
const smsModAd1 = () => { return `🛂 РЕЖИМ АДМИНИСТРАТОРА`}
const smsModAd2 = () => { return `Только администраторы смогут использовать Bot в группах`}
const smsLect1 = () => { return `✅АВТОМАТИЧЕСКОЕ СЧИТЫВАНИЕ`}
const smsLect2 = () => { return `Оставляйте сообщения или чаты прочитанными`}
const smsTempo1 = () => { return `🐈 ВРЕМЕННЫЙ БОТ`}
const smsTempo2 = () => { return `Функция, позволяющая временно находиться в группах`}
const smsStik1 = () => { return `🎠 стикер`}
const smsStik2 = () => { return `Включите автоматическую отправку стикеров всем желающим`}
const smsStickA1 = () => { return `🪄 автостикер`}
const smsStickA2 = () => { return `Видео, Gif-файлы, изображения, ссылки в формате jpg или jpeg; Они будут автоматически преобразованы в стикеры`}
const smsReacc1 = () => { return `🤡реакция `}
const smsReacc2 = () => { return `Включить автоматическую отправку ответов на сообщения`}
const smsAudi1 = () => { return ` АУДИО`}
const smsAudi2 = () => { return `возможная автоматическая отправка аудиозаписей всем желающимe`}
const smsModHor1 = () => { return `🔞 ВОЗБУЖДЕННЫЙ РЕЖИМ`}
const smsModHor2 = () => { return `Показывать контент для взрослых в чатах`}
const smsAntitoc1 = () => { return `☢️АНТИТОКСИЧЕН`}
const smsAntitoc2 = () => { return `Посылайте предупреждения тем людям, которые оскорбляют`}
const smsModOb1 = () => { return `👀 РЕЖИМ НАБЛЮДЕНИЯ`}
const smsModOb2 = () => { return `Сделайте изображения, Gif-файлы и видео доступными для просмотра всеми`}
const smsAntiEli1 = () => { return `🗑️ АНТИУДАЛЕНИЕ`}
const smsAntiEli2 = () => { return `включите антиудаление`}
const smsAntiInt1 = () => { return `🌏 АНТИИНТЕРНАЦИОНАЛЬНЫЙ`}
const smsAntiInt2 = () => { return `Исключите международные номера, которые считаются поддельными`}
const smsAntiE1 = () => { return `🔗антиссылка`}
const smsAntiE2 = () => { return `Удаляйте людей, которые отправляют ссылки из групп WhatsApp`}
const smsAntiEE1 = () => { return `🔗 антиссылка 2`}
const smsAntiEE2 = () => { return `Удаляйте людей, которые отправляют ссылки, содержащие https`}
const smsAntiTT1 = () => { return `🔗 анти TIK TOK`}
const smsAntiTT2 = () => { return ` Удаляйте людей, которые отправляют ссылки на TikTok`}
const smsAntiYT1 = () => { return `🔗 анти YOUTUBE`}
const smsAntiYT2 = () => { return `Удаляйте людей, которые отправляют ссылки на YouTube`}
const smsAntiTEL1 = () => { return `🔗 анти TELEGRAM`}
const smsAntiTEL2 = () => { return ` Удаляйте людей, которые отправляют ссылки на Telegram`}
const smsAntiFB1 = () => { return `🔗 анти FACEBOOK`}
const smsAntiFB2 = () => { return `Удаляйте людей, которые отправляют ссылки на фейсбук`}
const smsAntiIG1 = () => { return `🔗 анти INSTAGRAM`}
const smsAntiIG2 = () => { return ` Удаляйте людей, которые отправляют ссылки на Instagram`}
const smsAntiTW1 = () => { return `🔗 анти TWITTER `}
const smsAntiTW2 = () => { return `Удаляйте людей, которые отправляют ссылки на Twitter`}
const smsSOLOP1 = () => { return `⚜️ТОЛЬКО ЛИЧНОЕ`}
const smsSOLOP2 = () => { return `Разрешите использовать его только в приватных чатах`}
const smsSOLOG1 = () => { return `⚜️ ТОЛЬКО ГРУППЫ`}
const smsSOLOG2 = () => { return `Разрешите использовать его только в групповых чатах`}
const smsConfi1 = () => { return `настройки`}
const smsConfi2 = () => { return `*¡ПРИВЕТ!*`}
const smsConfi3 = () => { return `┃ *Выберите нужный вариант из списка*`}
const smsConfi4 = () => { return `┃ *Чтобы приступить к настройке*`}
const smsConfi5 = () => { return `┃● *Уведомления о конфигурации:*`}
const smsConfi6 = () => { return `┃ ✅ ⇢ *Функция активирована*`}
const smsConfi7 = () => { return `┃ ❌ ⇢ *функция отключена*`}
const smsConfi8 = () => { return `┃ ⚠️ ⇢ *Этот чат не является групповым*`}
const smsConfi9 = () => { return `┃ *электронная рекомендация: Чтобы ознакомиться с конфигурацией*\n┃ *Завершите использование этого группового меню*\n┃`}
const smsConfi10 = () => { return `*~ ЦЕНТР НАСТРОЙКИ*`}
const smsParaAdmins = () => { return `ДЛЯ АДМИНИСТРАТОРОВ И СОЗДАТЕЛЕЙ : ГРУППЫ`}
const smsParaAdYOw = () => { return `ДЛЯ АДМИНИСТРАТОРОВ И СОЗДАТЕЛЕЙ : ЧАТОВ`}
const smsParaOw = () => { return `для СОЗДАТЕЛЕЙ :  ЧАТОВ`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `команда`} 
const smsMens2 = () => { return `в настоящий момент`} 
const smsMens3 = () => { return `в этом`} 
const smsMens4 = () => { return `БОТ`} 
const smsMens5 = () => { return `ЧАТ`}

//Error2
const smsMensError1 = () => { return `❕КОМАНДА ОТЧЕТА❕`} 
const smsMensError2 = () => { return `Следующая команда не выполняется`} 

//_antiviewonce.js
const smsAntiView = () => { return `*НИЧТО НЕ МОЖЕТ БЫТЬ СКРЫТО* 😎`} 

//_autosticker.js
const smsAutoStik = () => { return `${lenguajeGB['smsAvisoFG']()}*ВИДЕО НЕ ДОЛЖНО ДЛИТЬСЯ БОЛЕЕ 7 СЕКУНД.*`} 

//_expired.js
const smsBottem1 = () => { return `*ПОКИДАЕТ ГРУППУ!!! 🤝 ЕСЛИ ВЫ ХОТИТЕ, ЧТОБЫ ОНА ВЕРНУЛАСЬ, ИСПОЛЬЗУЙТЕ КОМАНДУ _#bottemporal_, ЧТОБЫ ВЕРНУТЬСЯ В ГРУППУ!!*`} 
const smsBottem2 = () => { return `*💕 ПОМОЩЬ ПОЛЬЗОВАТЕЛЮE*\n*_${global.ig}_*\n`} 
const smsBottem3 = () => { return `скоро увидимся 💖`} 

//_premium.js
const smsPremI = () => { return `*¡ ВАШЕ ПРЕМИАЛЬНОЕ ВРЕМЯ ИСТЕКЛО!* 🎟️\n*ЧТОБЫ ПОЛУЧИТЬ НОВЫЙ ПРЕМИУМ-АБОНЕМЕНТ, ВОСПОЛЬЗУЙТЕСЬ КОМАНДОЙ:*\n*#pass prem*`} 

//afk-_afk.js
const smsAfkM1 = () => { return `*ТЫ ПЕРЕСТАЛ БЫТЬ НЕАКТИВНЫМ, АФК*`} 
const smsAfkM2 = () => { return `\n*ПРИЧИНОЙ БЕЗДЕЙСТВИЯ БЫЛО:*\n`} 
const smsAfkM3 = () => { return `⏳ *ВРЕМЯ БЕЗДЕЙСТВИЯ:*`} 
const smsAfkM4 = () => { return `* НЕ ОТМЕЧАТЬ ЭТОГО ПОЛЬЗОВАТЕЛЯ!! ОН НЕАКТИВЕН*\n`} 
const smsAfkM5 = () => { return `*ПРИЧИНА БЕЗДЕЙСТВИЯ AFK:*\n`} 
const smsAfkM6 = () => { return `*ПРИЧИНА БЕЗДЕЙСТВИЯ AFK:\n ПРИЧИНА БЕЗДЕЙСТВИЯ НЕ БЫЛА УКАЗАНА*`} 
const smsAfkTime = () => { return [['день'], ['час'], ['минута'], ['секунда']] }
const smsAfkResultTime = smsAfkTime()

//afk-afk.js
const smsAfkQ1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoMG']()}*НАПИШИТЕ ПРИЧИНУ, ПО КОТОРОЙ ОН НЕАКТИВЕН (AFK)*\n\n*пример:*\n*${usedPrefix + command}*Я собираюсь делать домашнее задание`} 
const smsAfkQ2 = () => { return `${lenguajeGB['smsAvisoMG']()}*ПРИЧИНОЙ ДОЛЖНО БЫТЬ НЕ МЕНЕЕ 10 СИМВОЛОВ*`} 
const smsAfkM1A = () => { return `*НЕ ПОМЕЧАЙТЕ*`} 
const smsAfkM1B = () => { return `*БУДЕТ НЕАКТИВЕН AFK*\n\n*ПРИЧИНА БЕЗДЕЙСТВИЯ AFK*`}  

//anonymous_chat.js
const smsChatAn1 = () => { return `${lenguajeGB['smsAvisoFG']()}*ВЫ НЕ НАХОДИТЕСЬ В АНОНИМНОМ ЧАТЕ*`} 
const smsChatAn2 = () => { return `*ЕСЛИ ВЫ ХОТИТЕ НАЧАТЬ АНОНИМНЫЙ ЧАТ, ИСПОЛЬЗУЙТЕ КОМАНДУ #start ИЛИ КНОПКУ НИЖЕ*\n`} 
const smsChatAn3 = () => { return `⚡ НАЧНИТЕ АНОНИМНЫЙ ЧАТ`} 
const smsChatAn4 = () => { return `${lenguajeGB['smsAvisoRG']()}🪐 * ВЫ ПОКИНУЛИ АНОНИМНЫЙ ЧАТ*`} 
const smsChatAn5 = () => { return `${lenguajeGB['smsAvisoAG']()}*ДРУГОЙ ПОЛЬЗОВАТЕЛЬ ПОКИНУЛ АНОНИМНЫЙ ЧАТ*`}  
const smsChatAn6 = () => { return `*ЕСЛИ ВЫ ХОТИТЕ ПЕРЕЙТИ В ДРУГОЙ АНОНИМНЫЙ ЧАТ, ВОСПОЛЬЗУЙТЕСЬ КОМАНДОЙ #start ИЛИ КНОПКОЙ НИЖЕ*\n`} 
const smsChatAn7 = () => { return `${lenguajeGB['smsAvisoAG']()}*ВЫ ВСЕ ЕЩЕ НАХОДИТЕСЬ В АНОНИМНОМ ЧАТЕ ИЛИ ЖДЕТЕ, КОГДА КТО-НИБУДЬ ПРИСОЕДИНИТСЯ К ЧАТУ*`} 
const smsChatAn8 = () => { return `*ЕСЛИ ВЫ ХОТИТЕ ВЫЙТИ ИЗ АНОНИМНОГО ЧАТА, ИСПОЛЬЗУЙТЕ КОМАНДУ #leave ИЛИ ВОСПОЛЬЗУЙТЕСЬ КНОПКОЙ НИЖЕ*\n`} 
const smsChatAn9 = () => { return `🍁ВЫЙДИТЕ ИЗ АНОНИМНОГО ЧАТА`} 
const smsChatAn10 = () => { return `${lenguajeGB['smsAvisoEG']()}✨ *ТЕПЕРЬ ОНИ МОГУТ ПОБОЛТАТЬ*`} 
const smsChatAn11 = () => { return `*КТО-ТО ПРИСОЕДИНИЛСЯ К АНОНИМНОМУ ЧАТУ!!*`} 
const smsChatAn12 = () => { return `❇️ДРУГОЙ ПОЛЬЗОВАТЕЛЬ`} 
const smsChatAn13 = () => { return `${lenguajeGB['smsAvisoRG']()}🐈 * ОЖИДАЯ, ПОКА КТО-НИБУДЬ ПРИСОЕДИНИТСЯ К АНОНИМНОМУ ЧАТУ, ПОЖАЛУЙСТА, НАБЕРИТЕСЬ ТЕРПЕНИЯ*`} 

//Botones de Menú 
const smsBotonM1 = () => { return `⚡ * МЕНЮ загрузок⚡`} 
const smsBotonM2 = () => { return `💫 ПОЛНОЕ МЕНЮ💫`} 
const smsBotonM3 = () => { return `🎒 ИНВЕНТАРЬ 🎒`} 
const smsBotonM4 = () => { return `ОЛЬЗОВАТЕЛЬ`}
const smsBotonM5 = () => { return `ДИАПОЗОН`}
const smsBotonM6 = () => { return `УРОВЕНЬ`}
const smsBotonM7 = () => { return `ПРЕМИУМ`}
const smsTex1 = () => { return '*МЕНЮ ПОИСКА*'}
const smsTex2 = () => { return '*МОДИФИКАТОР ЗВУКА*'}
const smsTex3 = () => { return '*МЕНЮ +18*'}
const smsTex4 = () => { return '*ДИНАМИЧЕСКИЙ КОНТЕНТ*'}
const smsTex5 = () => { return '*ПОИСК И ЗАГРУЗКА*'}
const smsTex6 = () => { return '*МЕНЮ +18 ПРЕМИУМ*'}
const smsTex7 = () => { return '⠇ *Качество и разнообразие изображений +18*\n⠇ * Видео +18 только для вас*\n⠇ *Доступно более 18 наклеек*'}
const smsTex8 = () => { return '*МЕНЮ КОНВЕРТЕРА*'}
const smsTex9 = () => { return '*МЕНЮ ЗАГРУЗОК*'}
const smsTex10 = () => { return '* ДИНАМИЧНОЕ ИГРОВОЕ МЕНЮ*'}
const smsTex11 = () => { return '*МЕНЮ ДЛЯ ГРУПП*'}
const smsTex12 = () => { return '*МЕНЮ "ИНСТРУМЕНТЫ"*'}
const smsTex13 = () => { return '*ИНФОРМАЦИОНОЕ МЕНЮ*'}
const smsTex14 = () => { return '*МЕНЮ ЭФФЕКТОВ И ЛОГОТИПОВ*'}
const smsTex15 = () => { return '*МЕНЮ ЛОГОТИПОВ 2*'}
const smsTex16 = () => { return 'АУДИО МЕНЮ'}
const smsTex17 = () => { return '*НЕТ НЕОБХОДИМОСТИ ИСПОЛЬЗОВАТЬ ПРЕФИКС В АУДИОЗАПИСЯХ*'}
const smsTex18 = () => { return 'СПИСОК ЗВУКОВ'}
const smsTex19 = () => { return '*ВЫ МОЖЕТЕ ВЫБРАТЬ АУДИО!!*'}
const smsTex20 = () => { return '*МЕНЮ ВЛАДЕЛЬЦА*'}
const smsTex21 = () => { return '*МЕНЮ RPG*'}
const smsTex22 = () => { return '*МЕНЮ СТИКЕРОВ И ФИЛЬТРОВ*'}
const smsTex23 = () => { return '*МЕНЮ СЛУЧАЙНЫХ МЕМОВ И АНИМЕ*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*ВЫ ВХОД⭔ Общее количество группИТЕ В ЭТИ ГРУППЫ:*_'}
const smsLisB = () => { return '*⭔ Total Groups:*'}
const smsLisC = () => { return '*⋄ ГРУППЫ:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄ ⭔ ПАРТАТИЧНЫЙ*'}

//ad
const smsMalused = () => { return '⚡ *ИСПОЛЬЗУЙТЕ КОМАНДУ СЛЕДУЮЩИМ ОБРАЗОМ:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *ВЫ ДОЛЖНЫ ИСПОЛЬЗОВАТЬ КОМАНДУ, ПОДОБНУЮ ПРИВЕДЕННОЙ В ЭТОМ ПРИМЕРЕ:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *ВЫ ДОЛЖНЫ ИСПОЛЬЗОВАТЬ КОМАНДУ ИЛИ ОТВЕТИТЬ НА ЧЬЕ-ЛИБО СООБЩЕНИЕ, КАК В ЭТОМ ПРИМЕРЕ:*\n`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_ОТКРЫТАЯ ГРУППА ЧЕРЕЗ ЧАС_*'}
const smsGrupoTime2 = () => { return '🔒 *_ЗАКРЫТАЯГ РУППА ЧЕРЕЗ ЧАС_*'}
const smsGrupoTime3 = () => { return '*группа'}
const smsGrupoTime4 = () => { return 'закрыто'}
const smsGrupoTime5 = () => { return 'открыто'}
const smsGrupoTime6 = () => { return '*ВО ВРЕМЯ'}
const smsGrupoTime7 = () => { return '🔒 *ГРУППА ЗАКРЫТА, ОТПРАВЛЯТЬ СООБЩЕНИЯ МОГУТ ТОЛЬКО АДМИНИСТРАТОРЫ*'}
const smsGrupoTime8 = () => { return '🔓 *ГРУППА ОТКРЫТА, ВСЕ ЖЕЛАЮЩИЕ МОГУТ ОТПРАВЛЯТЬ СООБЩЕНИЯ*'}
const smsGrupoTime9 = () => { return '🔓ОТКРЫТАЯ ГРУППА ВО ВРЕМЯ'}
const smsGrupoTime10 = () => { return '🔒ЗАКРЫТАЯ  ГРУППА ВО ВРЕМЯ'}
const smsGrupoTime11 = () => { return ' час'}
const smsGrupoTime12 = () => { return 'РАЗРЕШИТЬ ГРУППЕ НАХОДИТЬСЯ РЯДОМ '}
const smsGrupoTime13 = () => { return 'ЗАПРЕТИТЬ ГРУППЕ НАХОДИТЬСЯ РЯДОМ '}

//grupo-add.js
const smsAddB1 = () => { return `${lenguajeGB['smsAvisoFG']()}*НЕ УДАЕТСЯ ДОБАВИТЬ НОМЕР, ПОЖАЛУЙСТА, ПРОВЕРЬТЕ ЕГО ПРАВИЛЬНОСТЬ, ВОЗМОЖНО, ОН ПОЯВИЛСЯ НЕДАВНО ИЛИ У ВАС УСТАНОВЛЕНА ЗАЩИТА КОНФИДЕНЦИАЛЬНОСТИ.*`}
const smsAddB2 = () => { return `${lenguajeGB['smsAvisoFG']()}*НЕ УДАЕТСЯ ДОБАВИТЬ НОМЕР, ПРОВЕРИТЬ ЕГО ПРАВИЛЬНОСТЬ ИЛИ ДОБАВИТЬ ВРУЧНУЮ.*`}

//grupo-admins.js
const smsAddB3 = () => { return `*УВЕДОМЛЕНИЕ ДЛЯ АДМИНИСТРАТОРОВ*`}
const smsAddB4 = () => { return `*ПРИСУТСТВИЕ АДМИНИСТРАТОРА*`}
const smsAddB5 = () => { return `СООБЩЕНИЕ*`}
const smsAddB6 = () => { return `Я прошу администраторов, пожалуйста.`}

//grupo-advertencia.js
const smsAdveu1 = () => { return `${lenguajeGB['smsAvisoAG']()}*МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО В ТОМ СЛУЧАЕ, ЕСЛИ ФУНКЦИЯ АКТИВИРОВАНА:*\n`}
const smsAdveu2 = () => { return 'Reason'}
const smsAdveu3 = () => { return `${lenguajeGB['smsAvisoMG']()}*НЕ ЗАБУДЬТЕ УКАЗАТЬ ПРИЧИНУ ПРЕДУПРЕЖДЕНИЯ*\n`}
const smsAdveu4 = () => { return '*ПОЛУЧЕНО ПРЕДУПРЕЖДЕНИЕ В ЭТОЙ ГРУППЕ!!*'}
const smsAdveu5 = () => { return 'предупреждение'}
const smsAdveu6 = () => { return '🎒инвентарь'}
const smsAdveu7 = () => { return '* Я ПРЕДУПРЕЖДАЛ ТЕБЯ НЕСКОЛЬКО РАЗ!!*'}
const smsAdveu8 = () => { return '*ТЕПЕРЬ ВЫ БУДЕТЕ УДАЛЕНЫ* 🙄'}
const smsAdveu9 = () => { return '😇 СПАСИБО'}
const smsAdveu10 = () => { return '*В ЭТОЙ ГРУППЕ БЫЛО УДАЛЕНО ПРЕДУПРЕЖДЕНИЕ!!*'}
const smsAdveu11 = () => { return 'До:'}
const smsAdveu12 = () => { return 'Сейчас:'}

//grupo-demote.js || grupo-promote.js 
const smsDemott = () => { return `*НОМЕР НЕВЕРНЫЙ, ПОПРОБУЙТЕ ЕЩЕ РАЗ ОТВЕТИТЬ НА ЧЬЕ-ЛИБО СООБЩЕНИЕ ИЛИ ВОСПОЛЬЗУЙТЕСЬ ЭТИМ ПРИМЕРОМ:*\n`}
const smsDemott2 = () => { return '*ТЕПЕРЬ У НЕГО ЕСТЬ ВЛАСТЬ В ГРУППЕ!!*'}
const smsDemott3 = () => { return '*БОЛЬШЕ НЕ ИМЕЕТ ВЛАСТИ В ГРУППЕ!!*'}

//grupo-info.js
const smsGI1 = () => { return '*ИНФОРМАЦИЯ О ГРУППЕ*'}
const smsGI2 = () => { return '*ИНДЕФИКАТОР ГРУППЕ*'}
const smsGI3 = () => { return '*НАЗВАНИЕ ГРУППЫ*'}
const smsGI4 = () => { return '*ОПИСАНИЕ ГРУППЫ*'}
const smsGI5 = () => { return '*НЕТ ОПИСАНИЯ*'}
const smsGI6 = () => { return '*КОЛИЧЕСТВО УЧАСТНИКОВ*'}
const smsGI7 = () => { return '*УЧАСТНИКИ*'}
const smsGI8 = () => { return '*СОЗДАТЕЛЬ ГРУППЫ*'}
const smsGI9 = () => { return '*АДМИН ГРУППЫ*'}
const smsGI10 = () => { return '⚙️ НАСТРОЙКИ ГРУППЫ'}


//grupo-kick.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*ОТМЕТЬТЕ ЧЕЛОВЕКА ИЛИ ОТВЕТЬТЕ НА ЕГО СООБЩЕНИЕ, КОТОРОЕ ВЫ ХОТИТЕ УДАЛИТЬ*\n\n*пример: `}
const smskick2 = () => { return `удаленный 😼🫵`}
const smskick3 = () => { return `Я НЕ МОГУ УДАЛИТЬ СОЗДАТЕЛЯ ГРУППЫ😆🫵`}
const smskick4 = () => { return `НЕ В ЭТОЙ ГРУППЕ 👻`}

//grupo-tagall.js
const smstagaa = () => { return `⚡СОЗЫВ ГРУППЫ ⚡`}

//grupo-setbye.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*ПРОЩАНИЕ С ГРУППОЙ БЫЛО ОРГАНИЗОВАНО*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ НАПИШИТЕ ПРОЩАЛЬНОЕ ПОСЛАНИЕ_*\n*_OPTIONAL ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ТО, ЧТО УКАЗАНО С "@", ЧТОБЫ ДОБАВИТЬ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ:_*\n\n*⚡ @user (Указать пользователю)*\n\n*ПОМНИТЕ, ЧТО СИМВОЛ "@" НЕОБЯЗАТЕЛЕН*`}

//grupo-setwelcome.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*БЫЛО ОРГАНИЗОВАНО ГРУППОВОЕ ПРИВЕТСТВИЕ*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ НАПИШИТЕ ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ_*\n*_НЕОБЯЗАТЕЛЬНО, ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ТО, ЧТО УКАЗАНО С "@", ЧТОБЫ ДОБАВИТЬ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ:_*\n\n*⚡ @user (Указать пользователю)*\n*⚡ @subject (название группы)*\n*⚡ @desc (Описание группы)*\n\n*ПОМНИТЕ, ЧТО "@" ЯВЛЯЮТСЯ НЕОБЯЗАТЕЛЬНЫМИ*`}

//grupo-setdesc.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*GROUP DESCRIPTION HAS BEEN CONFIGURED*`}

//grupo-setname.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*НАЗВАНИЕ ГРУППЫ БЫЛО ЗАДАНО*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 НАПИШИТЕ НАЗВАНИЕ НОВОЙ ГРУППЫ*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*НАЗВАНИЕ ГРУППЫ НЕ ДОЛЖНО СОДЕРЖАТЬ БОЛЕЕ 25 СИМВОЛОВ*`}

//grupo-restaurarEnlace.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*ССЫЛКА НА ГРУППУ БЫЛА СБРОШЕНА*`}

//Button 
const smsSig = () => { return `➡️ следующий ➡️`}
const smsSigPrem = () => { return `❤️‍🔥 следующий ❤️‍🔥`}
const smsCont18Porn = () => { return `🔞 *содержание* 🔞`} //texto
const smsCont18Porn2 = () => { return `🔞 содержание 🔞`} //texto
const smsCont18PornP = () => { return `🌟 *содержание❤️‍🔥 премиум* 🌟`} //texto
const smsCont18PornP2 = () => { return `содержание ❤️‍🔥 премиум`} //texto  

//propietario(a).js
const smsJoin = (user) => { return `${packname}\n𝙀𝙎 𝙐𝙉 𝘽𝙊𝙏 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙌𝙐𝙀 𝙏𝙀 𝘼𝙔𝙐𝘿𝘼𝙍𝘼 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘿𝙄𝙁𝙀𝙍𝙀𝙉𝙏𝙀𝙎ПРИМЕР 𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿𝙀𝙎 🪄 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊 𝙊 𝙂𝙍𝙐𝙋𝙊 𝙔 𝙏𝘼𝙈𝘽𝙄𝙀𝙉 𝙏𝙀 𝙑𝘼𝙎 𝘼 𝘿𝙄𝙑𝙀𝙍𝙏𝙄𝙍 🎈 𝘾𝙊𝙉 𝙎𝙐𝙎 𝙈𝙐𝙇𝙏𝙄𝙋𝙇𝙀𝙎 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎, 𝘿𝙄𝙎𝙁𝙍𝙐𝙏𝘼 𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏!!! 😸\n\n💖 𝙂𝘼𝙏𝘼𝘽𝙊𝙏 𝙁𝙐𝙀 𝙄𝙉𝙑𝙄𝙏𝘼𝘿𝘼 𝙋𝙊𝙍:\n@${user}`}
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*ВВЕДИТЕ ССЫЛКУ НА ГРУППУ*\n*EJEMPLO:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packname}\n*ОН ПРИСОЕДИНИЛСЯ К ГРУППЕ ✅*`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*Ответьте на сообщение или напишите использованное сообщение ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return`*Отправлено официальное сообщение, подождите минутку...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅*Сообщение было отправлено  ${totalPri} для приватных чатов*\n\n*Общее время доставки: ${time}*\n${totalPri >= 3000 ? '\n*Они были отправлены не во все чаты, чтобы избежать перенасыщения*' : ''}`}
 
//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*ОТМЕТЬТЕ КОГО-НИБУДЬ, ОТВЕТЬТЕ НА СООБЩЕНИЕ ПОЛЬЗОВАТЕЛЯ ИЛИ НАПИШИТЕ НОМЕР, КОТОРЫЙ ВЫ ХОТИТЕ ИСКЛЮЧИТЬ ИЗ КОМАНД*\n\n*пример:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot}ЭТА КОМАНДА НЕ МОЖЕТ БЫТЬ ЗАБЛОКИРОВАНА* 😹`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *Я НЕ МОГУ ЗАПРЕТИТЬ ВЛАДЕЛЬЦУ @${ownerNumber} OF ${packname}*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*НЕТ НЕОБХОДИМОСТИ БАНИТЬ СНОВА@${number} ДА, ЭТО УЖЕ ТАК* 😊`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}*ПОЛЬЗОВАТЕЛЬ УСПЕШНО ЗАБЛОКИРОВАН* 🙀`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} ВЫ ЗАБАНЕНЫ @${usr}ВЫ НЕ СМОЖЕТЕ ИСПОЛЬЗОВАТЬ КОМАНДЫ ДО ТЕХ ПОР, ПОКА КТО-НИБУДЬ НЕ ОТМЕНИТ ЗАПРЕТ* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*ВОЗНИКЛА ОШИБКА, ВОЗМОЖНО, ПОЛЬЗОВАТЕЛЯ НЕТ В МОЕЙ БАЗЕ ДАННЫХ, ПОПРОБУЙТЕ НАПИСАТЬ ${usedPrefix + command} ${number}*\n\`\`\`ЕСЛИ ОШИБКА ПОВТОРЯЕТСЯ, СООБЩИТЕ ОБ ЭТОЙ КОМАНДЕ\`\`\``}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *сообщения:*`}
const smsBCbot2 = () => { return `личные `}
const smsBCbot3 = () => { return `Скопление`}
const smsBCbot4 = () => { return `итог`}
const smsBCbot5 = () => { return `Общее время доставки :`}
const smsBCbot6 = () => { return `Они были отправлены не во все чаты, чтобы избежать перенасыщения`}
const smsBCbot7 = () => { return `✅ *Официальное заявление* ✅`}

//propietario(a).js
const smsChatGP1 = () => { return "*Отправленное сообщение, подождите минутку...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *официальное заявление* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ *Сообщение было отправлено по адресу  ${totalGP} группы*`}

//jadibot-serbot.jsФУНКЦИЯ БЫТЬ ВСПОМОГАТЕЛЬНЫМ БОТОМ
const smsIniJadi = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*\n\n*ღ Версия ${global.packname} » _${global.vs}_*\n*ღ Версия JadiBot » _${global.vsJB}_*\n\n🟢 *_FUNCTION BE SUB BOT_* 🟢\n\n*➡️ С помощью другого мобильного телефона или ПК отсканируйте этот QR-код, чтобы стать вспомогательным ботом*\n\n*1️⃣ Go to the three dots in the upper right corner*\n*2️⃣ Go to Paired Devices option*\n*3️⃣ Scan this QR code to login*\n\n📢 *¡This QR code expires in 45 seconds!*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*ЭТА КОМАНДА ОТКЛЮЧЕНА МОИМ ВЛАДЕЛЬЦЕМ*`}
const smsIniJadi2 = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*

*ღВерсия${global.packname} » _${global.vs}_*
*ღ JadiBot версия » _${global.vsJB}_*

🟢 *_ НОВАЯ ФУНКЦИЯ ДЛЯ ПРЕВРАЩЕНИЯ В СУББОТА_* 🟢

*1️⃣Перейдите к трем точкам в правом верхнем углу*\n*2️⃣Перейдите к опции сопряженных устройств*
*3️⃣Перейдите по ссылке с телефонным кодом*
*4️⃣вставьте приведенный ниже код*`}
const smsJBConexionClose2 = () => { return `${lenguajeGB['smsAvisoFG']()}🔴*ВАШЕ УСТРОЙСТВО ПОДКЛЮЧЕНОED*\n\n*ВЫ ДОЛЖНЫ ПОДКЛЮЧИТЬСЯ СНОВА, ЧТОБЫ ИСПОЛЬЗОВАТЬ:\n#удаление соединения`}
const smsreenvia = () => { return `*🟢 RESEND COMMAND...*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *ЧТОБЫ СТАТЬ ВСПОМОГАТЕЛЬНЫМ БОТОМ, ПЕРЕЙДИТЕ НА ОСНОВНОЙ НОМЕР*\n*ღ Перейдите по следующей ссылке:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *СОЕДИНЕНИЕ БЫЛО ПРЕРВАНО НЕОЖИДАННЫМ ОБРАЗОМ, МЫ ПОПЫТАЕМСЯ ВОССТАНОВИТЬ ЕГО...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *СОЕДИНЕНИЕ БЫЛО ЗАКРЫТО, ВЫ ДОЛЖНЫ ПОДКЛЮЧИТЬСЯ ВРУЧНУЮ С ПОМОЩЬЮ #КОМАНДА jadibot И ПОВТОРНОЕ СКАНИРОВАНИЕ НОВОГО QR-КОДА*`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *УСПЕШНОЕ ПОДКЛЮЧЕНИЕ!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *ПОДКЛЮЧЕНИЕ ВЫПОЛНЕНО УСПЕШНО!!! ВЫ МОЖЕТЕ ПОДКЛЮЧИТЬСЯ С ПОМОЩЬЮ:*`}
const smsJBCargando = () => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *ПОДКЛЮЧЕН!! ПОЖАЛУЙСТА, ПОДОЖДИТЕ, ПОКА ЗАГРУЗЯТСЯ СООБЩЕНИЯ...*\n\n♻️ * ДОСТУПНЫЕ ОПЦИИ: *\n*» #stop _ (Функция остановки суббота)_*\n*»#deletesesion _(Удалить все следы работы суббота)_*\n*»#jadibot _(Получите новый QR-код, чтобы стать вспомогательным ботом)_*`}
const smsJBInfo1 = () => { return `💖*ПОЛЕЗНАЯ ССЫЛКА*`}
const smsJBInfo2 = () => { return `💖 *Функция работает стабильно, если это доставит какие-либо неудобства, свяжитесь с нами по электронной почте: centergatabot@gmail.com*\n💝 *Вы можете сделать добровольное пожертвование с помощью PayPal: ${global.paypal}*\n\n*Большое вам спасибо за поддержку ${global.packname}*`}

//jadibot-deleteSesion.js
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*ИСПОЛЬЗУЙТЕ ЭТУ КОМАНДУ ДЛЯ ГЛАВНОГО БОТА*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*Я БУДУ СКУЧАТЬ ПО ТЕБЕ ${global.packname} ПОКА!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*ВЫ ВЫШЛИ ИЗ СИСТЕМЫ И УДАЛИЛИ ВСЕ СЛЕДЫ*`}
const smsJBErr = () => { return `*ВЫ ВЫШЛИ ИЗ СИСТЕМЫ КАК СУББОТ* ♻️`}

//comandos+18-adult.js
const smsContAdult = () => { return `${lenguajeGB['smsAvisoAG']()}*КОМАНДЫ - ОНИ ОТКЛЮЧЕНЫ, ЕСЛИ ВЫ МОЙ СОЗДАТЕЛЬ, ИСПОЛЬЗУЙТЕ #на модогорном*`}

//comandos+18-menu.js
const smsList1 = () => { return -`У меня не достаточно `}
const smsList2 = () => { return `\nнажмите тут что бы купить`}
const smsList3 = () => { return `Доступный контент 😸`}
const smsList4 = () => { return `Контент недоступен 😿\`\nнажмите здесь чтобы купить `}
const smsList5 = () => { return `*Выберите нужный вариант*\n*выберите из списка, чтобы просмотреть*\n*содержание* 😋`}
const smsList6 = () => { return `👀 ПОСМОТРЕТЬ СПИСОК 👀`}

//descargas-consejos.js
const smsConj = () => { return `🍃 НОВЫЙ СОВЕТ`}
const smsFras = () => { return `🍃НОВОЕ ПРЕДЛОЖЕНИЕ`}

//info-contacto.js
const smsContacto1 = () => { return ' Я' + packname + ' бот для WhatsApp, который поможет вам во всем, о чем вы попросите 😎'}
const smsContacto2 = () => { return 'Я являюсь владельцем' + packname + ' если у вас есть какие-либо вопросы, вы можете задать их мне ✌️'}
const smsContacto3 = () => { return '👑 Владелец'}
const smsContacto4 = () => { return 'Официальный контакт с GataBot 🐈'}
const smsContacto5 = () => { return '🐣Чем я могу вам помочь?'}
const smsContacto6 = () => { return 'У меня нет почты 🙏'}
const smsContacto7 = () => { return '🌎 Глобальный'}
const smsContacto8 = () => { return 'Этот аккаунт является ботом 👀'}


export default { lenguaje, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, smsAvisoRG, smsJoin, smsJoin1, smsJoin2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5, smsPropban6, smsPropban7, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsChatGP1, smsChatGP2, smsChatGP3, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsAvisoAG, smsAvisoIIG, smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv6, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3, smsPremI,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1A, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7, smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1, smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19, smsTex20, smsTex21, smsTex22, smsTex23, smsMalused, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8, smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsAddB1, smsAddB2, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsAdveu1, smsMalused2, smsAdveu2, smsAdveu3, smsAdveu4, smsAdveu5, smsAdveu6, smsAdveu7, smsAdveu8, smsAdveu9, smsMalused3, smsAdveu10, smsAdveu11, smsAdveu12, smsDemott, smsDemott2, smsDemott3,
smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsGI10, smsLista22_1, smsCodigoQR, smsConexionOFF, smskick1, smskick2, smskick3, smskick4, smstagaa,
smsSetB, smsSetB2, smsSetW, smsSetW2, smsDest, smsNam1, smsNam2, smsNam3, smsRestGp, smsSig, smsSigPrem, smsCont18Porn, smsCont18Porn2, smsCont18PornP, smsCont18PornP2,
smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBCargando, smsJBInfo1, smsJBInfo2, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsJBErr, smsContAdult, smsList1, smsList2, smsList3, smsList4, smsList5, smsList6, smsConj, smsFras, smsContacto1, smsContacto2, smsContacto3, smsContacto4,
smsContacto5, smsContacto6, smsContacto7, smsContacto8, smsAfkQ1, smsAfkQ2, smsAfkTime, smsAfkResultTime, smsMainBot, smsreenvia, smsJBConexionClose2, smsIniJadi2}
