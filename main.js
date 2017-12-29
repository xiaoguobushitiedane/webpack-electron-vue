// 引入应用生命周期的模块
const electron = require('electron');
// 创建本地浏览器窗口的模块
const app = electron.app;
// 指向窗口对象的一个全局引用，如果没有这个引用，那么当该javascript对象被垃圾回收的
// 时候该窗口将会自动关闭
const BrowserWindow = electron.BrowserWindow;
let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


app.on('ready', () => {
  // 创建一个新的浏览器窗口
  mainWindow = new BrowserWindow({ width: 1024, height: 768,show:false });
  // 并且装载应用的index.html页面
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
  //mainWindow.loadURL(`http://192.168.0.6:1717/`);
  // 打开开发工具页面
  mainWindow.webContents.openDevTools();
 // 当所有的窗口被关闭后退出应用
  mainWindow.on('closed', () => {
    // 解除窗口对象的引用，通常而言如果应用支持多个窗口的话，你会在一个数组里
    // 存放窗口对象，在窗口关闭的时候应当删除相应的元素。
    mainWindow = null;
  });
  mainWindow.on('ready-to-show', function() {
    mainWindow.show();
    mainWindow.focus();
  });
});
