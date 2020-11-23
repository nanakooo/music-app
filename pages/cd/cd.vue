<template>
	<view>
		<view class="bannerImg"><image></image></view>
	
	<u-grid :col="3">
		<u-grid-item>
			<u-icon name="order" :size="50" color="#ca97ab"></u-icon>
			<view class="grid-text" @tap="goodSale">畅销榜</view>
		</u-grid-item>
		<u-grid-item>
			<u-icon name="grid" :size="50" color="#ca97ab"></u-icon>
			<view class="grid-text">语种风格馆</view>
		</u-grid-item>
		<u-grid-item>
			<u-icon name="shopping-cart" :size="50" color="#ca97ab"></u-icon>
			<view class="grid-text">已购</view>
		</u-grid-item>
	</u-grid>
	<u-gap height="20" bg-color="#f5f5f5"></u-gap>
	<view class="newCd">
		<h3>最新上架&nbsp&gt</h3>
		<view class="menuBox">
			<view class="someSong" v-for="item in newCds">
				<image :src="item.coverUrl"></image>
				<span>{{item.albumName}}</span>
				<p style="color:red">{{item.price}}&nbsp元</p>
			</view>
		</view>
	</view>
	<view class="cdLevel">
		<h3>数字专辑榜&nbsp&gt</h3>
		<view class="cdLevelItem">
			<img align="absmiddle" src="http://p3.music.126.net/0Yus7yGK8elVx0gj7N-NZQ==/109951165434283247.jpg"></image>
			<span>歌名</span>
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				newCds:[]
			}
		},
		onLoad() {
			this.getNewCds();
		},
		methods: {
			getNewCds() {
				console.log("获取最新")
				uni.request({
					url: 'http://localhost:3000/album/list?limit=6',
					success: res => {
						console.log(res)
						if (res.data.code !== 200) {
							return uni.showToast({
								title: "获取数据失败"
							})
						}
						this.newCds = res.data.products;
					}
				})
			},
			goodSale(){
				
			}
		}
	}
</script>

<style lang="scss">
	.bannerImg{
		height:300rpx;
		background-color: #fae2e7;
	}
	.newCd{
		padding:35rpx 22rpx;
		.someSong{
			width:33%;
			display: inline-block;
			padding:18rpx 10rpx;
			image{
				width:98%;
				height:200rpx;
				border:3px solid pink
			}
			span{
				 text-overflow: ellipsis;
				  display: inline-block;
				  white-space: nowrap;
				  overflow-x:hidden;
				  width:200rpx;
			}
		  }
		
	}
	.cdLevel{
		
		padding-left:25rpx;
		img{
			width:20%;
			height:160rpx;
			padding: 20rpx;
		}
		
	}
</style>
