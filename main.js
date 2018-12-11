const electron = require("electron");
const url = require("url");
const path = require("path");

 const {app, BrowserWindow, Menu, ipcMain} = electron;

 let mainWindow;

 // Listen for the app to be ready
 app.on('ready', function(){
    //create new window
    mainWindow = new BrowserWindow({});
    //Load the html file into window
    mainWindow.loadURL(url.format({

        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true


    }))


    //build the menu from the template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    //insert the menu in the window
    Menu.setApplicationMenu(mainMenu); 

 });


 //catch input and send it back
 ipcMain.on('entity_to_search', function(e, entity){
    mainWindow.webContents.send('entity_to_search', entity);
    console.log(entity);

 } );




 //Create menu template
 const mainMenuTemplate = [
     {
        label: 'Options',
        submenu: [
            
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q': 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
     }
 ];

 // Add devtools item if not in prod
 if(process.env.NODE_ENV !== 'production'){
     mainMenuTemplate.push({
         label: 'Developer tools',
         submenu:[
             {
             label:'Toggle Develop Tools',
             accelerator: process.platform == 'darwin' ? 'Command+I': 'Ctrl+I',
             click(item, focusedWindow){
                 focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
 }
