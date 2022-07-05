var sendmailer = require('nodemailer');

var sender = sendmailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'rameshsankar.s@skeintech.com',
        pass : 'eajgnnwfaqynncmc'
    }
});

var composemail = {
    from : 'rameshsankar.s@skeintech.com',
    to : 'sylvesterram378@gmail.com',
    subject : 'Hello Sakthi',
    html : '<h1> Hello Sakthi </h1>'
};

sender.sendMail(composemail,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log("Send mail successfully" + info.response);
    }
});
