<template>
	<view>
			<image :src="pic">
<!-- 		<view class="imgBox" v-for="item in pics">
			<img :src="item.coverImgUrl">
		</view> -->
		<view class="songMenu">
		
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				pics:[],
				pic:""
			}
		},
		onLoad(option){
				console.log(option);
				let item=JSON.parse(decodeURIComponent(option.msg))
				var songId = option.msg.id;
				this.pic=item.songImg;
			uni.request({
				url: 'http://localhost:3000/related/playlist?id='+songId,
				success: res => {
					console.log(res.data)
					if (res.data.code == 200) {
				
							this.pics=res.data.playlists
					}else{
					return uni.showToast({
						title: "获取数据失败"
					})
					}
			
				
				}
			})
		}
	}
</script>

<style>
	page{
		
		background-color: #1c5a98;
	}
	.imgBox{
		
	}
	.songMenu{
		background-color: white;
		width:100%;
		margin-top: 400rpx;
	}
</style>
