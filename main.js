import { Telegraf, Markup } from "telegraf";
import { message } from 'telegraf/filters';

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome2'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.on(message('text'), async(ctx) => {
    ctx.replyWithMarkdownV2(
        'Hey there',
        Markup.inlineKeyboard([
            [Markup.button.callback('Бронировать стол', 'Pepsi')],
            [Markup.button.webApp('Меню',"https://exampletgapp.ru/")]
        ])
    );
});
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

// console.log(message('sticker'));
