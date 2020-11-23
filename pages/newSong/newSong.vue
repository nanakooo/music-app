
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
                        <h3 style="padding-top:300rpx;text-align: center; color: white; ">全部</h3>
						<view class="allItems" v-for="(item,index) in allSongs" :key="index">
							<span>{{index+1}}. {{item.name}}&nbsp&nbsp{{item.alias}}</span>
							<p>{{item.artists[0].name}}</p>
							
						</view>
                </view>
                <view class="allSong" v-show="Inv == 1">
                        <h3 style="padding-top:300rpx;text-align: center; color: white;"  align="absmiddle">华语</h3>
						<view class="allItems" v-for="(item,index) in chinaSongs" :key="index">
							<span>{{index+1}}. {{item.name}}&nbsp&nbsp{{item.alias}}</span>
							<p>{{item.artists[0].name}}</p>
							
						</view>
                </view>
				<view class="allSong" v-show="Inv == 2">
				        <h3 style="padding-top:300rpx;text-align: center; color: white;">欧美</h3>
						<view class="allItems" v-for="(item,index) in AmericaSongs" :key="index">
						<span>{{index+1}}. {{item.name}}&nbsp&nbsp{{item.alias}}</span>
						<p>{{item.artists[0].name}}</p>
						
						</view>
				</view>
				<view class="allSong" v-show="Inv == 3">
				        <h3 style="padding-top:300rpx;text-align: center; color: white;">日本</h3>
						<view class="allItems" v-for="(item,index) in japanSongs" :key="index">
							<span>{{index+1}}. {{item.name}}&nbsp&nbsp{{item.alias}}</span>
							<p>{{item.artists[0].name}}</p>
					
						</view>
				</view>
				<view class="allSong" v-show="Inv == 4">
				        <h3 style="padding-top:300rpx;text-align: center; color: white;">韩国</h3>
						<view class="allItems" v-for="(item,index) in koreanSongs" :key="index">
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
         
<style lang="scss">
        .inv-h-w{background-color: #FFFFFF;height: 100upx;display: flex;}
        .inv-h{font-size: 30upx;flex: 1;text-align: center;color: #C9C9C9;height: 100upx;line-height: 100upx;}
        .inv-h-se{color: #5BA7FF;border-bottom: 4upx solid #5BA7FF;}
		.allSong{
			 height: 200px;
			background-image: linear-gradient(#74abe6, #415e78);
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