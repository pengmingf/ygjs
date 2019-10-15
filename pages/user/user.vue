<template>
	<view class="center">
		<view class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="login ? uerInfo.image :avatarUrl"></image>
			<view class="logo-title" style="display: inline;">
				<text class="uer-name">{{login ? uerInfo.name : 'Hi.游客'}}</text>
				<text class="go-login navigat-arrow" v-if="!login">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60c;</text>
				<text class="list-text">收藏食物</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item  border-bottom">
				<text class="list-icon">&#xe60d;</text>
				<text class="list-text">历史订单</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">打卡记录</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item  border-bottom">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">身体数据</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goAbout">
				<text class="list-icon">&#xe603;</text>
				<text class="list-text">关于</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item" @click="userManage">
				<text class="list-icon">&#xe609;</text>
				<text class="list-text">账号管理</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view> 
		</view>
		<view class="button_bom" v-if="login">
			<button type="warn" size="default" @click="loginout()">退出登录</button>
		</view>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				login: false,
				avatarUrl: '/static/logo.png',
				uerInfo: {}
			}
		},
		
		onLoad() {
			var that = this;
			var tuser_id = uni.getStorageSync('tuser_id');
			if(tuser_id)
			{
				//从服务器拿去姓名以及头像
				uni.request({
					url:"https://ygjs.mfmeat.top/index.php/api/user/detail",
					data:{"tuser_id":tuser_id},
					method:"POST",
					dataType:"json",
					success: (res) => {
						if(res.data.code == 1)
						{
							this.login = true;
							this.uerInfo = res.data.message
							uni.setStorage({
								key:"UserInfo",
								data:this.uerInfo,
								fail(){
									uni.showToast({
										title:"errorST"
									})
								}});
							
						}else{
							uni.showLoading({
								title:"异常错误，请重启APP"
							})
						}
					}
				})
			}else{
				this.goLogin();
			}
		},
		methods: {
			goLogin() {
				if (!this.login) {
					uni.navigateTo({
						url: '/pages/login/login'
					});
				}
			},
			goAbout() {
				uni.navigateTo({
					url: './user_show'
				});
			}, 
			loginout(){
				uni.showModal({
					content:"你确定要退出登录吗",
					success: (res) => {
						if(res.confirm == true)
						{
							uni.clearStorageSync();
							uni.reLaunch({
								url:'/pages/login/login'
							});
						}
					}
				})
			},
			userManage:()=>{
				uni.navigateTo({
					url:'/pages/userManage/userManage'
				})
			},
		}
	}
</script>

<style>
	@import './user.css';
	
	.button_bom{
		margin-top: 50upx;
	}
</style>
