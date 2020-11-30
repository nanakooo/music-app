<template>
	<view>
		<view class="imgBox">
			<image :src="pic"></image>
				<span>{{menuName}}</span>
		</view>
		<view class="comment">
			<u-grid :col="3" >
				<u-grid-item>
					<u-icon name="plus-circle" :size="40"></u-icon>
					<view class="grid-text" @tap="level">12345</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="chat" :size="40"></u-icon>
					<view class="grid-text" @tap="level">25462</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="zhuanfa" :size="40"></u-icon>
					<view class="grid-text" @tap="level">22334</view>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="songMenu">
		    <view class="allItems" v-for="(item,index) in menuSongs" :key="index">
		    	<span>{{index+1}}. {{item.name}}&nbsp&nbsp{{item.alias}}</span>
		    	<p>{{item.artists[0].name}}</p>
		    	
		    </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pics: [],
				pic: "",
				menuName: "",
				menuSongs:"",
			}
		},
		onLoad(option) {
			console.log(option);
			let item = JSON.parse(decodeURIComponent(option.msg))
			var songId = option.msg.id;
			this.pic = item.songImg;
			this.menuName = item.name;
			uni.request({
				url: 'http://localhost:3000/personalized/detail?id=' + songId,
				success: res => {
					console.log(res);
					console.log(songId);
					if (res.data.code !== 200) {
						return uni.showToast({
							title: "获取数据失败"
						})
					} else {
						uni.navigateTo({
							url: 'http://localhost:3000/personalized/detail?id=' + songId
						})
					}
				}
			}),
			uni.request({
				url: 'http://localhost:3000/playlist/detail?id=' + songId,
				success: res => {
					console.log(songId);
					if (res.data.code !== 200) {
						return uni.showToast({
							title: "获取数据失败"
						})
					} else {
						uni.navigateTo({
							url: 'http://localhost:3000/playlist/detail?id=' + songId,
						})
					}
				}
			})
		},
		
	}
</script>

<style>
	page {

		background-color: white;
	}

	.imgBox {
		background-color: #736c60;
	}

	image {
		width: 280rpx;
		height: 280rpx;
		padding-bottom: 65rpx;
		padding-top:45rpx;
		padding-left: 40rpx;
	}

	span {
		position: absolute;
		top:100rpx;
		left:370rpx;
		color:white;
		font-size: 35rpx;
		display: inline-block;
		width:350rpx;
	}
    .comment{
		margin:auto;
		margin-top:-55rpx;
		width:500rpx;
		height:146rpx;
		border: 2px solid #4d645d;
		border-radius: 20%;
		background-color: white;
	}
	.allItems{
		padding:12rpx 12rpx;
		background-color: white;
		span{
			font-size:32rpx;
			display: inline-block;
			width:650rpx;
		    overflow-x:hidden ;
			color:#366092;
			}
		p{
			padding-left:5rpx;
			color:#6c706d;
		}
	}
</style>
