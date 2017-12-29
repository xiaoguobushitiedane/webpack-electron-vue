//引入path
const path=require("path")
//引入uglify进行js打包
const uglify=require("uglifyjs-webpack-plugin");
//引入html打包插件
const htmlPlugin=require("html-webpack-plugin");
//css分离
const extractTextPlugin=require("extract-text-webpack-plugin");
//引入glob
const glob=require("glob")
//引入purifycss消除无用的css
const PurifyCSSPlugin=require("purifycss-webpack");
//第三方类库插件
const webpack=require("webpack");
//集中拷贝静态资源
const copyWebpackPlugin=require("copy-webpack-plugin");
/*
模块化引入
*/
const entry=require("./webpack_config/entry_webpack.js")
/*
判断package.json中String{
    set type的值
}
*/

if(process.env.type=="build"){
    var website={
        publicPath:"http://192.168.0.6:8080/"
    }
    
}else{
   var website={
        publicPath:"http://192.168.0.6:1717/"
    }
}

//暴露模块
module.exports={
    //构建环境
    //target: 'electron-renderer',//web
    //调试工具
    devtool:'source-map',
    //入口文件
    entry:entry.path,
    //出口文件
    output:{
        path:path.resolve(__dirname,'dist'),//出口路径
        //filename:'bundle.js'//出口文件
        filename:"[name].js",//和入口文件匹配
        publicPath:website.publicPath//配置公共路径
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    //模块,解读css
    module:{
        //转换规则
        rules:[
            {
                test:/\.css$/,//正则表达式处理css
                // use:[
                //     {
                //        loader:"style-loader" 
                //     },
                //     {
                //         loader:"css-loader"
                //     }
                    use: extractTextPlugin.extract({
                        fallback:'style-loader',
                        use:[
                            {loader:'css-loader',options:{importLoader:1}},//添加options配置参数
                            "postcss-loader"
                        ]
                    })
                
               // ]//需要使用的loader
            },
            {
                test:/\.(png|jpg|gif)/,//正则处理css的图片
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:5000,//小于5000字节生成base64
                            outputPath:'images/'//图片打包的输出路径
                        }
                    }

                ]
            },
            {
                test:/\.(htm|html)$/i,//匹配html中打包图片
                use:[
                    'html-withimg-loader'
                ]

            },
            {
                test:/\.less$/,//匹配less文件
                //打包分离
                use: extractTextPlugin.extract({
                    use:[
                        {
                            loader:'css-loader'
                        },
                        {
                            loader:'less-loader'
                        }
                    ],
                    fallback:"style-loader"

                })
            },
            {
                test:/\.(jsx|js)$/,//匹配js
                use:{
                    loader:"babel-loader",
                    // options:{
                    //     presets:["es2015","react"]//配置渲染器es2015->es6
                    // }
                },
                exclude:/node_modules/ //去除node_modules文件夹
            },
            {
                test: /\.vue$/, 
                loader: 'vue-loader'
            }
            
        ]
    },
    //插件
    plugins:[
        //new uglify()
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true//去除标签属性引号
            },
            hash:true,//防止缓存
            template:'./src/index.html'//模板
        }),
        new extractTextPlugin("/css/index2.css"),//打包css出口路径
        //消除无用的css
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,"src/*.html"))//扫描所有的html文件的css
        }),
        //第三方类库支持
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        //抽离jquery
        new webpack.optimize.CommonsChunkPlugin({
            name:['jquery','vue'],//对应入口处的jquery
            filename:"asset/js/[name].js",//抽离的路径
            minChunk:2//抽离的文件数
        }),
        //集中拷贝静态资源
        new copyWebpackPlugin([{
            from:__dirname+'/src/public',
            to:'./public'//已dist目录为根
        }])
    ],
    //webpack开发服务
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),//热服务的绝对路径
        host:'192.168.0.6',//服务器地址
        compress:true,//是否启用服务器端口
        port:1717//端口
    },
    //自动打包配置项
    watchOptions:{
        poll:1000,//监测修改的时间,毫秒
        aggregateTimeout:500,//防止重复按键打包出错
        ignored:/node_modules/,//不监测
    }
    
}