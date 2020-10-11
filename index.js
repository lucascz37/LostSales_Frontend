const {app, BrowserWindow} = require('electron');
const loginController = require('./controllers/loginController.js');

app.whenReady().then(()=>{
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('./pages/Login/index.html');
    win.webContents.openDevTools();
    loginController.map((f) => f(win));
});
