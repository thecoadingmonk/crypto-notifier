const { app, BrowserWindow, Menu, shell } = require('electron');

function createWindow(){
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  })

  win.loadFile('src/index.html');
  win.webContents.openDevTools();

  let menu = Menu.buildFromTemplate([
    { label: ''},
    {
        label: 'Menu',
        submenu: [
            {
                label: 'Adjust Notification Value'
            },
            {
                label: 'CoinMarketCap',
                click(){
                    shell.openExternal('http://coinmarketcap.com')
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Exit',
                click(){
                    app.quit();
                }
            },
        ]
    },
    ]);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
