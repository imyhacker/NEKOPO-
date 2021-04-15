const neko = require('nekobocc');
var TinyURL = require('tinyurl');
var chalk = require('chalk');


/*
    Coded Full Loved By Arikun | Rii Haxor @ IndoSec - 2021
    Using Nekobocc + NodeJS = <3 

    Copyright (C) Arikun - IndoSec @2021

    Don't Recode, This App Is A Simple App Sir.

    Wan't To Recode ? Don't Forget Follow And Fork This Repo :)
    
    Or Give Me A Coffee XD : https://trakteer.id/arkun666
    Follow My Instagram    : https://instagram.com/arkun666 
    IndoSec Fanspage FB    : https://www.facebook.com/IndoSecOfficial/
    
*/


// Get Update
async function update() {
    const res = await neko.latest()
    const data = res.result;
    console.clear();

    console.log(chalk.white.bgRed.italic(`
Coded By Riihaxor | Arikun - IndoSec @ 2021`+chalk.white.italic.bgBlack(`
Nekopoi Searcer! - Free Search USING VPN :v `)));

    data.forEach((res, i) => {
        const img = res.img;
        const title = res.title;
        const link = res.link;

        TinyURL.shorten(link, function (res, err) {
            if (err)
                console.log(err)

            console.log(`
======================      
`+chalk.white.bgRed.italic(`Title`)+` : ${title},
`+chalk.white.bgRed.italic(`Link`)+`  : ${res}
======================
`);


        });

    })

}

// Search Nekopoi

async function search(query) {
    const res = await neko.search(query)
    const data = res.result
    console.clear();

    console.log(chalk.white.bgRed.italic(`
Coded By Riihaxor | Arikun - IndoSec @ 2021`+chalk.white.italic.bgBlack(`
Nekopoi Searcer! - Free Search USING VPN :v `)));

    data.forEach((res, i) => {
        const img = res.img;
        const title = res.title;
        const link = res.link;

        TinyURL.shorten(link, function (res, err) {
            if (err)
                console.log(err)

            console.log(`
======================      
`+chalk.white.bgRed.italic(`Title`)+` : ${title},
`+chalk.white.bgRed.italic(`Link`)+`  : ${res}
======================
`);


        });

    })
}


// Get Random

async function random() {
    const res = await neko.random()
    const data = res.result
 
    console.clear();

    console.log(chalk.white.bgRed.italic(`
Coded By Riihaxor | Arikun - IndoSec @ 2021`+chalk.white.italic.bgBlack(`
Nekopoi Searcer! - Free Search USING VPN :v `)));
    const { title, views, japanese, category, episode, status, genre, synopsis, score } = data
console.log(`
============={TITLE}==============
${title}
${japanese}`);
console.log(`
============={GENRE}==============
${genre}`);
console.log(`
============{SYNOPSIS}============
${synopsis}`);
console.log(`
============{CATEGORY}============
${category} | ${views} VIEWS`);
console.log(`
============={STATUS}=============
${status}`);
console.log(`
============{EPISODE}=============
${episode}`);
console.log(`
============={SCORE}==============
${score}`);
}


module.exports = {
    update,
    search,
    random
};