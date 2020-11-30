<template>
	<view>


		<u-search  :show-action="true" action-text="搜索" :animation="true" placeholder="搜索歌曲" v-model="keyword" margin="10rpx 16rpx"></u-search>
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
				<view class="grid-text" @tap="cd">数字专辑</view>
			</u-grid-item>
		</u-grid>
		<u-gap height="20" bg-color="#f5f5f5"></u-gap>
		<view class="musicMenu">
			<h2>精选歌单</h2>
			<view class="menuBox">
				<view class="someSong" v-for="item in lists" @click="toMenuDetail(item.id,item.picUrl,item.name)">
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
				uni.request({
					url: 'http://localhost:3000/banner',
					success: res => {
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
				uni.request({
					url: 'http://localhost:3000/personalized?limit=6',
					success: res => {
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
			},
			level() {
				uni.navigateTo({
					url: '/pages/level/level'
				})
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
			},
			toMenuDetail(id, img, name) {
				let item = {
					id: id,
					songImg: img,
					name: name
				}
				uni.navigateTo({
					url: '/pages/menuDetail/menuDetail?msg=' + encodeURIComponent(JSON.stringify(item))
				}, )

			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		swiper {
			width: 100%;
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



	.musicMenu>h2 {
		color: #3F536E;
	}

	.musicMenu {
		padding: 12rpx 35rpx;

	}

	scroll-view {
		width: 80%;
		padding: 10rpx 50rpx;
		height: 280rpx;

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

	.someSong {
		width: 33.3%;
		display: inline-block;
		padding: 18rpx 12rpx;

		image {
			width: 100%;
			height: 200rpx;
		}

		span {
			text-overflow: ellipsis;
			display: inline-block;
			white-space: nowrap;
			overflow-x: hidden;
			width: 220rpx;
		}
	}
</style>
