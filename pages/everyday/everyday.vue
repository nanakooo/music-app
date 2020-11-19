<template>
	<view>
		<view class="allSong">
		        <h3 style="padding-top:300rpx;text-align: center; color: white;">每日精选</h3>
				<view class="allItems" v-for="item in allSongs">
					<span>{{item.name}}</span>
					<image src="item.picUrl"></image>
				</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				allSongs:[]
			}
		}
	}
</script>

<style lang="scss">
	.allSong{
		background-color: #366092;
		border-radius: 4%;
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
