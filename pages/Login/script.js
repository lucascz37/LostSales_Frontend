const { ipcMain } = require('electron');

const ipcRenderer = require('electron').ipcRenderer;
const submit = document.getElementById('login');
const username = document.getElementById('username');
const password = document.getElementById('password');

submit.addEventListener('submit', function(e){
    e.preventDefault();
    ipcRenderer.send('submit', username.value, password.value);
});

ipcRenderer.on('failedLogin', (env) => {
    alert('Usuário ou senha inválido')    
});