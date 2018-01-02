<template>
	<div id="app">
		<h1>数据中心获取数据</h1>
		<p>本地数据:{{localdata}}---数据中心数据:{{$store.state.count}}
			----数据中心getters数据:{{count2}}
		</p>
		<p>
			<button @click="jia">加</button>
			<button @click="$store.commit('jian',{a:2})">减</button>
		</p>
		<p>
			<button @click="jiaplus">加plus</button>
			<button @click="jianplus">减plus</button>
		</p>
		<p>
			<button @click="getAxjax">获取远程数据get</button><span>{{$store.state.getData}}</span>
		</p>
		<p>
			<button @click="postAxjax">获取远程数据post</button><span>{{$store.state.postData}}</span>
		</p>
		<p>
			<button @click="moreRequest">获取远程数据并发</button><span>sss</span>
		</p>
		<p>===============================================</p>
	</div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'app',
		data(){
			return{
				"localdata":61
			}
		},
		computed:{
			...mapState({
				count : state=>state.count
			}),
			...mapGetters([
				"count2"
			])

		},
		methods:{
			...mapMutations([
				"jia",
				"jian"
			]),
			...mapActions([
				"jiaplus",
				"jianplus",
				"getAxjax",
				"postAxjax",
				"moreRequest"
			])
		}
	}
</script>
<style>
	
</style>


