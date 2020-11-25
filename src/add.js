const { remote } = require('electron');
const path = require('path');

const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', () => {
    let win = remote.getCurrentWindow();
    win.close();
})