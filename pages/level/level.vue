<template>
	<view>
		<view class="youLike">
			<h3>榜单推荐</h3>
			<view class="likeList">
				<view class="listBox"><image></image></view>
				<view class="listBox"><image></image></view>
				<view class="listBox"><image></image></view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.youLike{
		padding:30rpx 0;
		h3{
			text-align: center;
			
		}
		.likeList{
			display: flex;
			justify-content:space-around;
			padding:30rpx 0;
			.listBox{
				border:1px solid black;
				width:220rpx;
				height:250rpx;
				image{
					width:100%;
					height:100%;
				}
			}
		}
	}
</style>
