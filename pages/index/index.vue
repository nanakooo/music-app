<template>
	<view>
		 
			
		<u-search placeholder="搜索歌曲" v-model="keyword" margin="10rpx 16rpx"></u-search>
		<view class="wrap">
			<swiper indicator-dots circular>
				<swiper-item v-for="item in swipers">
					<image :src="item.imageUrl"></image>
				</swiper-item>
			</swiper>
		</view>
		<u-grid :col="4">
			<u-grid-item>
				<u-badge count="9" :offset="[20, 20]"></u-badge>
				<u-icon name="calendar" :size="46"></u-icon>
				<view class="grid-text" @tap="everyday">每日推荐</view>
			</u-grid-item>
			<u-grid-item>
				<image src="/static/image/icon/hot5.png" class="badge-icon"></image>
				<u-icon name="level" :size="46"></u-icon>
				<view class="grid-text" @tap="level">排行榜</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="order" :size="46"></u-icon>
				<view class="grid-text" @tap="newSong">新歌速递</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="play-circle" :size="46"></u-icon>
				<view class="grid-text" @click="cd">数字专辑</view>
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
			<view class="menuBox">
				<view class="someSong" v-for="item in lists">
					<image :src="item.picUrl"></image>
					<span>{{item.name}}</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '稻香',
				swipers: [],
				lists: []
			}
		},
		onLoad() {
			this.getSwipers(),
				this.getLists()
		},
		methods: {
			/*获取轮播图数据*/
			getSwipers() {
				console.log("获取数据")
				uni.request({
					url: 'http://localhost:3000/banner',
					success: res => {
						console.log(res)
						if (res.data.code !== 200) {
							return uni.showToast({
								title: "获取数据失败"
							})
						}
						this.swipers = res.data.banners;
					}
				})
			},
			getLists() {
				console.log("获取数据")
				uni.request({
					url: 'http://localhost:3000/personalized?limit=6',
					success: res => {
						console.log(res)
						if (res.data.code !== 200) {
							return uni.showToast({
								title: "获取数据失败"
							})
						}
						this.lists = res.data.result;
					}
				})
			},
			newSong() {
				uni.navigateTo({
					url: '/pages/newSong/newSong'
				})
				console.log("新歌速递")
			},
			level() {
				uni.navigateTo({
					url: '/pages/level/level'
				})
				console.log("排行榜")
			},
			cd() {
				uni.navigateTo({
					url: '/pages/cd/cd'
				})
				console.log("数字专辑")
			},
			everyday() {
				uni.navigateTo({
					url: '/pages/everyday/everyday'
				})
				console.log("每日推荐")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		swiper {
			width: 750rpx;
			height: 350rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
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

	.youLike {
		padding: 12rpx 35rpx;
		background-color: #FEF0F0;
	}

	.youLike>h2 {
		color: darkred;

	}

	.musicMenu>h2 {
		color: darkred;
	}

	.musicMenu {
		padding: 12rpx 35rpx;

	}

	scroll-view {
		width: 80%;
		padding: 10rpx 50rpx;
		height: 280rpx;
		white-space: nowrap;
	}

	.item1,
	.item2,
	.item3 {
		display: inline-block;
		width: 100%;
		height: 100%;
	}

	.item1 {
		background-color: white;
	}

	.item2 {
		background-color: white;
	}

	.item3 {
		background-color: white;
	}
	.menuBox{
		padding-left:10rpx;
	.someSong{
		width:33%;
		float:left;
		padding:15rpx 12rpx;
		image{
			width:100%;
			height:200rpx;
		}
	  }
	}
</style>
