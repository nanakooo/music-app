<template>
	<view class="allPage">
		<view class="songImg">
			<img :src="pic">
		</view>
		<view class="player">
			<u-icon name="skip-back-left" color="white" size="140"></u-icon>
			<u-icon name="play-circle" color="white" size="148" style="margin-left:80rpx"></u-icon>
			<u-icon name="skip-forward-right" color="white" size="140" style="margin-left:80rpx"></u-icon>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			   pic:""
			};
		},
		onLoad(option) {
			console.log(option);
			
			
		},
		methods: {}
	}
</script>

<style>
	page {
		background-color: #346a8b;
		overflow-y: hidden;
	}

	.songImg {
		width: 280rpx;
		height: 280rpx;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid white;
		margin-top: 28%;
		margin-left: 32%;
	}

	.player {
		margin-top: 38%;
		margin-left: 12%;
		display: flex;
	}
</style>
