const{ipcMain} = require('electron');

const login = (win) => ipcMain.on('submit', function(env, username, password){
    //TODO: verify database login
    console.log(`username: ${username}\npassword: ${password}`);
    if(username == 'admin' && password == 'admin'){
        console.log('200 OK');
    }else{
        env.reply('failedLogin');
    }
});

module.exports = [login];