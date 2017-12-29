//申明entry
const entry={}
//设置
entry.path={
    entry:'./src/entry.js',
    jquery:'jquery',//jquery抽离
    vue:'vue'//抽离vue
}
//暴露
module.exports=entry;