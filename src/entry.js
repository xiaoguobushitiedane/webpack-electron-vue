// import css from './css/index.css';//在入口文件导入css
// import less from './css/black.less';//在入口导入less文件
// //import $ from 'jquery'//引入jquery
// {
//     let Luowei="hello webpack";
//     document.getElementById("title").innerHTML=Luowei;
// }

// $("#title").innerHTML="sssssssssssss";


import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
	el:"#main",
	store,
	render:xx=>xx(App)
})
