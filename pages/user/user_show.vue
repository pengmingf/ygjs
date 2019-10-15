<template>
	<view class="">
		<view>你好，我是当前系统开发人员</view>
		<view>由于系统开发周期过短，开发人员少得可怜。有时候系统可能出现一些未知错误</view>
		<view>一旦出现让你感到不爽的信息，请直接与我联系修改<text style="color: #BEBEBE;">QQ:291641454</text></view>
		<view>第一代系统版本更新较快，望谅解</view>
		<view>当前版本:{{version}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: plus.runtime.version,
			}  
		},
		onLoad() {
		},
	}
</script>

<style>
	view{
		font-size: 18upx;
	}
</style>
