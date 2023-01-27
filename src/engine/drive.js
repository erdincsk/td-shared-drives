const { createCredential } = require('../components');
const mainLand = require('../td/main');

class driveEngineClass {

    CreateTDrive(pk, username, email, school, pickedIP) {
        return new Promise(async(resolve ,reject) => {
            console.log('Create Shared Starting...')
            await createCredential.createCredential(pk, username, email, pickedIP);
            await mainLand.AntiTest(pk).catch((e) => console.log("CPC Error :"+e))
            console.log('Captcha Solved Successfully....')
            const FinalStep = await mainLand.FnishCreate(pk, school).catch((e) => console.log(e))
            console.log('All Request SuccessFull & Now the loop will continue.')
            resolve();
        })
    }
    
}

const driveEngine = new driveEngineClass();
module.exports = driveEngine;
