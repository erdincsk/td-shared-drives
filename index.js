const fetch = require('node-fetch');
const driveEngine = require('./src/engine/drive');

class mainClass {
    async start() {
        return new Promise(async(resolve, reject) => {
        try {

            fetch('https://api.namefake.com', {
                method: 'GET'
            })
            .then((response) => {
                return response.json();
            })
            .then(async(responseJSON) => {
    
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const username = responseJSON.maiden_name;
    const userID = ""+Date.now()+"";
    // Varsa proxy bağlantı bilgilerinizi girin, proxysiz site oluşturma engeli uygulayabilir.
    // If available, enter your proxy connection information, it can block creating a proxy site.
    const proxy = "";

    const gmail = " THIS AREA GMAIL ADDRESS ";
    const school_id = "THIS AREA SCHOOL ID  - TD ";

    await driveEngine.CreateTDrive(userID, username, gmail, school_id, proxy)
    console.log('Task Fnish ! New task is starting...')
    main.start() // Kısır Döngü


})
        } catch (error) {
            reject(error);
        }
    })
}
}
const main = new mainClass();
module.exports = main;
main.start();

