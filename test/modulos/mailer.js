import Mailer from "../../src/modulos/mailer/mailer.js"
import minimist from "minimist"

const PARAMS_ERROR = "to, from and password params are required."
const MAIL_SENT = "Mail sent"

const commandLineArguments = minimist(process.argv.slice(2));

if(!commandLineArguments.to || !commandLineArguments.from || !commandLineArguments.password){
    throw new Error(PARAMS_ERROR)
}


async function sendMail(){
    const mailerInstance = new Mailer(commandLineArguments.from, commandLineArguments.password)
    try{
        await mailerInstance.sendMail(
            commandLineArguments.to,
            commandLineArguments.subject || "SOME SUBJECT",
            commandLineArguments.content || "SOME CONTENT"
        )
        console.log(MAIL_SENT)
    }catch(e){
        throw e
    }    
}

sendMail()