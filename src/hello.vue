<template>
	<div id="hello">
		<button>{{txt}}</button>99<span>{{dd}}</span>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'hello',
        data(){
            return{
                txt:"qqqq",
                dd:"sssss"
            }
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
