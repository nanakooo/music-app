<template>
	<view class="page">
		<view class="myInfo">
			<u-avatar></u-avatar>
			<view class="text"><span>登录</span></view>
		</view>
		<view class="myMenu">
			<u-grid :col="4">
				<u-grid-item>
					<u-icon name="heart" :size="50" color="#da7fa8"></u-icon>
					<view class="grid-text">我的喜欢</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="play-circle" :size="50" color="#8397da"></u-icon>
					<view class="grid-text">最近播放</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="order" :size="50" color="#8397da"></u-icon>
					<view class="grid-text">歌单</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="shopping-cart" :size="50" color="#8397da"></u-icon>
					<view class="grid-text">已购</view>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="musicMenu">
			<h3>我的歌单</h3>
			<view class="inv-h-w">
				<view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">创建歌单</view>
				<view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="Inv=1">收藏歌单</view>
			</view>
			<view class="allSong" v-show="Inv == 0" style="background-color: white; padding:15rpx;">
				创建
			</view>
			<view class="allSong" v-show="Inv == 1" style="background-color: white;">
				收藏
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				Inv: 0,
			}
		}
	}
</script>

<style lang="scss">
	.page {
		background-color: #c3d7e3;
	}

	.myInfo {
		text-align: center;
		padding-top: 100rpx;
		padding-bottom: 30rpx;

		.text {
			padding-top: 10rpx;

			span {
				font-size: 35rpx;
			}
		}
	}

	.myMenu {
		background-color: white;
		border: 1px solid #8397da;
		width: 90%;
		margin: auto;
		border-radius: 20%;
	}

    .musicMenu{
		padding-top:20rpx;
	    h3{
			padding-left:35rpx;
			padding-bottom:10rpx
		}
		}
		
	.allsong{
		background-color: white;
	}
	.inv-h-w {
		background-color: #FFFFFF;
		height: 80upx;
		display: flex;
		width:95%;
		border-radius: 10%;
		margin:auto;
	}
	.inv-h {
		font-size: 30upx;
		flex: 1;
		text-align: center;
		color: #C9C9C9;
		height: 80upx;
		line-height: 80upx;
	}

	.inv-h-se {
		color: #aa7887;
		border-bottom: 4upx solid #aa6683;
	}
</style>
