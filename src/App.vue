<template>
	<div id="app">
		<button>{{txt}}</button>99<span>{{dd}}</span>
		<app-head></app-head>
		<app-content></app-content>
		<app-foot></app-foot>
	</div>
</template>
<script type="text/javascript">
import Head from './components/base/Head.vue'
import Foot from './components/base/Foot.vue'
import Content from './components/base/Content.vue'
	export default{
		name:'hello',
        data(){
            return{
                txt:"qqqq",
                dd:"sssss"
            }
		},
		components:{
			'app-head' : Head,
			'app-foot' : Foot,
			'app-content' : Content
		}
	}
	
</script>
<style type="text/css">
	#hello button{
		background-color: #ff6600;
		height: 35px;
		width: 200px;
		color: #fff;
	}
</style>
