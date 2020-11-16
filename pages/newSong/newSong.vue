
<template>
        <view>
                <view class="inv-h-w">
                        <view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">全部</view>
                        <view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="Inv=1">华语</view>
						<view :class="['inv-h',Inv==2?'inv-h-se':'']" @click="Inv=2">欧美</view>
						<view :class="['inv-h',Inv==3?'inv-h-se':'']" @click="Inv=3">日本</view>
						<view :class="['inv-h',Inv==4?'inv-h-se':'']" @click="Inv=4">韩国</view>
                </view>
                <view class="allSong" v-show="Inv == 0">
                        <h3 style="padding-top:100rpx;text-align: center; color: white;">全部</h3>
						<view class="allItems" v-for="item in allSongs">
							<span>{{item.name}}</span>
							<image src="item.picUrl"></image>
						</view>
                </view>
                <view class="allSong" v-show="Inv == 1">
                        <h3 style="padding-top:100rpx;text-align: center; color: white;">华语</h3>
						<view class="allItems" v-for="item in chinaSongs">
							<span>{{item.name}}</span>
							<image src="item.picUrl"></image>
						</view>
                </view>
				<view class="allSong" v-show="Inv == 2">
				        <h3 style="padding-top:100rpx;text-align: center; color: white;">欧美</h3>
						<view class="allItems" v-for="item in AmericaSongs">
							<image src="http://p4.music.126.net/Zmo3tpVvWpsrTmKKQGm9pQ==/109951165441392074.jpg" style="width:150rpx;height:150rpx;"></image>
							<span>{{item.name}}</span>
						</view>
				</view>
				<view class="allSong" v-show="Inv == 3">
				        <h3 style="padding-top:100rpx;text-align: center; color: white;">日本</h3>
						<view class="allItems" v-for="item in japanSongs">
							<image src="http://p3.music.126.net/0Yus7yGK8elVx0gj7N-NZQ==/109951165434283247.jpg" style="width:150rpx;height:150rpx;"></image>
							<span>{{item.name}}</span>
						</view>
				</view>
				<view class="allSong" v-show="Inv == 4">
				        <h3 style="padding-top:100rpx;text-align: center; color: white;">韩国</h3>
						<view class="allItems" v-for="item in koreanSongs">
							<span>{{item.name}}</span>
							<image src="item.picUrl"></image>
						</view>
				</view>
        </view>
</template>
 
<script>

        export default {
			
                data() {
                        return {
                                Inv:0,
								allSongs:[],
								allPics:[],
								chinaSongs:[],
								chinaPics:[],
								AmericaSongs:[],
								japanSongs:[],
								koreanSongs:[]
                        }
                },
				onLoad() {
					this.getAllSongs();
					this.getChinaSongs();
					this.getAmericaSongs();
					this.getjapanSongs();
					
				},
                methods: {
                        changeTab(Inv){
                                that.navIdx = Inv;
                        },
						getAllSongs() {
							console.log("获取全部")
							uni.request({
								url: 'http://localhost:3000/top/song?type=0',
								success: res => {
									console.log(res)
									if (res.data.code !== 200) {
										return uni.showToast({
											title: "获取数据失败"
										})
									}
									this.allSongs = res.data.data;
								}
							})
						},
						getChinaSongs() {
							console.log("获取华语")
							uni.request({
								url: 'http://localhost:3000/top/song?type=7',
								success: res => {
									console.log(res)
									if (res.data.code !== 200) {
										return uni.showToast({
											title: "获取数据失败"
										})
									}
									this.chinaSongs = res.data.data;
								}
							})
						},
						getAmericaSongs() {
							console.log("获取欧美")
							uni.request({
								url: 'http://localhost:3000/top/song?type=96',
								success: res => {
									console.log(res)
									if (res.data.code !== 200) {
										return uni.showToast({
											title: "获取数据失败"
										})
									}
									this.AmericaSongs = res.data.data;
								}
							})
						},
						getjapanSongs() {
							console.log("获取日语")
							uni.request({
								url: 'http://localhost:3000/top/song?type=8',
								success: res => {
									console.log(res)
									if (res.data.code !== 200) {
										return uni.showToast({
											title: "获取数据失败"
										})
									}
									this.japanSongs = res.data.data;
								}
							})
						},
                }
        }
</script>
         
<style>
        .inv-h-w{background-color: #FFFFFF;height: 100upx;display: flex;}
        .inv-h{font-size: 30upx;flex: 1;text-align: center;color: #C9C9C9;height: 100upx;line-height: 100upx;}
        .inv-h-se{color: #5BA7FF;border-bottom: 4upx solid #5BA7FF;}
		.allSong{
			background-color: #366092;
		}
        .allItems{
			
			background-color: white;
			image{
				position: absolute;
				width:50rpx;
				height:50rpx;
			}
		
		}
</style>