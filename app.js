const yargs = require('yargs');
const { update, search, random } = require('./machine');

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


// GET UPDATE 
yargs.command({
    command: "update",
    describe: "Get List New Hentai",
    builder:{},
    handler(){
        update();
    }
}).demandCommand();



// GET WHAT SEARCH
yargs.command({
    command: "search",
    describe: "Search Hentai",
    builder: {
        search:{
            demandOption: true,         
            describe: 'Search Your Hentai',
            type: 'string'
        }
    },
    handler(argv){
        search(argv.search);
    }
});



// GET RANDOM
yargs.command({
    command: "random",
    describe: "Get Random Hentai",
    builder: {},
    handler(){
        random();
    }
});
yargs.parse();  