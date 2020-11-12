<template>
	<view>
	<u-search placeholder="搜索歌曲" v-model="keyword" margin="10rpx 16rpx"></u-search>
	<view class="wrap">
			<u-swiper :list="list"></u-swiper>
		</view>
	<u-grid :col="4">
			<u-grid-item>
				<u-badge count="9" :offset="[20, 20]"></u-badge>
				<u-icon name="calendar" :size="46"></u-icon>
				<view class="grid-text">每日推荐</view>
			</u-grid-item>
			<u-grid-item>
				<image src="/static/image/icon/hot5.png" class="badge-icon"></image>
				<u-icon name="level" :size="46"></u-icon>
				<view class="grid-text">排行榜</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="order" :size="46"></u-icon>
				<view class="grid-text">歌单</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="play-circle" :size="46"></u-icon>
				<view class="grid-text">数字专辑</view>
			</u-grid-item>
		</u-grid>
	<view class="youLike">
		<h2>猜你喜欢</h2>
				<scroll-view scroll-x="true">
					<view class="item1">
						
					</view>
					<view class="item2">
						
					</view>
					<view class="item3">
						
					</view>
				</scroll-view>

	</view>
	<view class="musicMenu">
		<h2>精选歌单</h2>
	</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '稻香',
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					}
				],
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			/*获取轮播图数据*/
			getSwipers() {
				console.log("获取数据")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 40rpx;
	}
	.badge-icon {
			position: absolute;
			top: 14rpx;
			right: 40rpx;
			width: 30rpx;
			height: 30rpx;
		}
		
		.grid-text {
			font-size: 28rpx;
			margin-top: 4rpx;
			color: $u-type-info;
		}
		.youLike{
			padding:12rpx 35rpx;
			background-color: #FEF0F0;
		}
		.youLike >h2{
			color:darkred;
			
		}
		.musicMenu >h2{
			color:darkred;
		}
		.musicMenu{
			padding:12rpx 35rpx;
			
		}
	scroll-view{
			width: 80%;
			padding:10rpx 50rpx;
			height: 280rpx;
			white-space: nowrap;
		}
		.item1,.item2,.item3{
			display: inline-block;
			width: 100%;
			height: 100%;
		}
		.item1{
			background-color: white;
		}
		.item2{
			background-color: white;
		}
		.item3{
			background-color: white;
		}
		

</style>
