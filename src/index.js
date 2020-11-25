const { remote } = require('electron');
const path = require('path');
const {BrowserWindow} = remote;

const notifyBtn = document.getElementById('notifyBtn');

notifyBtn.addEventListener('click',() => {
    const modalPath = path.join('file://', __dirname, 'add.html');
    let win = new BrowserWindow({frame: false, width: 400, height: 200, transparent: true, alwaysOnTop: true});
    win.on('close', () => { win = null});
    win.loadURL(modalPath);
    win.show();
});