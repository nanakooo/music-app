<template>
	<view>
		<view class="imgBox" v-for="(item,index) in pics" :key="index">
			<image :src="item.picUrl">
		</view>
		<view class="songMenu">
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				pics:[]
			}
		},
		onLoad(option){
			var songId = option.id;
			console.log("id是"+songId);
			uni.request({
				url: 'http://localhost:3000/personalized/detail?id='+songId,
				success: res => {
					console.log(res);
					console.log(songId);
					if (res.data.code !== 200) {
						return uni.showToast({
							title: "获取数据失败"
						})
					}else{
						uni.navigateTo({
							url: 'http://localhost:3000/personalized/detail?id='+songId
						})
					}
					this.pics = res.data.result;
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
