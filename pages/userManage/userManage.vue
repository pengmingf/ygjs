<template>
	<view class="container">
		<view class="list-cell b-b m-t" @click="navTo('个人资料')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">个人资料</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		
		<view class="list-cell b-b m-t" @click="navTo('修改密码')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">修改密码</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		
		<view class="list-cell" @click="navTo('实名认证')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">实名认证</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		
		<view class="list-cell m-t">
			<text class="cell-tit">消息推送</text>
			<switch checked color="#0FAEFF" @change="switchChange" />
		</view>
		
		<view class="list-cell m-t b-b" @click="navTo('清除缓存')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">清除缓存</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		
		<view class="list-cell">
			<text class="cell-tit">检查更新</text>
			<text class="cell-tip">当前版本 {{version}}</text>
			<text class="cell-more yticon icon-you" ></text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version:plus.runtime.version,
			};
		},
		methods:{

			navTo(url){
				this.$api.msg(`跳转到${url}`);
			},
			//退出登录
			toLogout(){
				uni.showModal({
				    content: '确定要退出登录么',
				    success: (e)=>{
				    	if(e.confirm){
				    		this.logout();
				    		setTimeout(()=>{
				    			uni.navigateBack();
				    		}, 200)
				    	}
				    }
				});
			},
			//switch
			switchChange(e){
				// let statusTip = e.detail.value ? '打开': '关闭';
				this.$api.msg('暂不支持关闭');
				e.detail.value = 1;
			},

		}
	}
</script>

<style lang='scss'>
	@import '../user/user.css';
	.navigat-arrow {
		height: 90upx;
		width: 40upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #555;
		text-align: right;
		font-family: texticons;
	}
	.container{
		width: 100%;
	}
	page{
		background: #EFEFEF;
	}
	.list-cell{
		display:flex;
		align-items:baseline;
		padding: 20upx 20upx;
		line-height:60upx;
		position:relative;
		background: #fff;
		justify-content: center;
		&.log-out-btn{
			margin-top: 40upx;
			.cell-tit{
				color: #fa436a;
				text-align: center;
				margin-right: 0;
			}
		}
		&.cell-hover{
			background:#fafafa;
		}
		&.b-b:after{
			left: 30upx;
		}
		&.m-t{
			margin-top: 16upx; 
		}
		.cell-more{
			align-self: baseline;
			font-size:32upx;
			color:#909399;
			margin-left:10upx;
		}
		.cell-tit{
			flex: 1;
			font-size: 28upx + 2upx;
			color: #303133;
			margin-right:10upx;
		}
		.cell-tip{
			font-size: 28upx;
			color: #909399;
		}
		switch{
			transform: translateX(16upx) scale(.84);
		}
	}
</style>