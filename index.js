const fetch = require('node-fetch');
const driveEngine = require('./src/engine/drive');

class mainClass {
    async start() {
        return new Promise(async(resolve, reject) => {
        try {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //const username = "DriveAdi";
    const username = "sd_"+getRandomInt(100,999);
    const userID = ""+Date.now()+"";
    // Varsa proxy bağlantı bilgilerinizi girin, proxysiz site oluşturma engeli uygulayabilir.
    // If available, enter your proxy connection information, it can block creating a proxy site.
    const proxy = "";

    const gmail = "medinerdal29@gmail.com";
    var items = Array("30", "47" , "83", "86", "125")
    var school_id = items[Math.floor(Math.random()*items.length)];

    await driveEngine.CreateTDrive(userID, username, gmail, school_id, proxy)
    console.log('Task Fnish ! New task is starting...')
    main.start() // Kısır Döngü


        } catch (error) {
            reject(error);
        }
    })
}
}
const main = new mainClass();
module.exports = main;
main.start();