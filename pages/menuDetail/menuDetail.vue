<template>
	<view>
	<view class="imgBox" v-for="(item,index) in pics" :key="index">
			<image :src="item.picUrl">
	</view>
	=======
	<image :src="pic">
		<!-- 		<view class="imgBox" v-for="item in pics">
			<img :src="item.coverImgUrl">
		</view> -->
		<view class="songMenu">

		</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				pics: [],
				pic: ""
			}
		},
		onLoad(option) {
			console.log(option);
			let item = JSON.parse(decodeURIComponent(option.msg))
			var songId = option.msg.id;
			this.pic = item.songImg;
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
			})
		},
	}
</script>

<style>
	page {

		background-color: #1c5a98;
	}

	.imgBox {}

	.songMenu {
		background-color: white;
		width: 100%;
		margin-top: 400rpx;
	}
</style>
