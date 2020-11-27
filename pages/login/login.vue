<template>
	
	<view class="login-box">
	        <u-field
	        			v-model="mobile"
	        			label="手机号"
	        			placeholder="请填写手机号"
						required
	        		>
	        		</u-field>
	        		<u-field
	        			v-model="code"
	        			label="验证码"
	        			placeholder="请填写验证码"
						required
	        		>
	        		</u-field>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				mobile:'',
				code:''
			}
		}
	}
</script>

<style lang="scss">
	page{
		overflow-y: hidden;
		background-color: #43638a;
	}
	.login-box{
		margin:auto;
		width:86%;
		height:520rpx;
		margin-top:40%;
		
		background-color: white;
		border-radius: 8%;
	}
</style>
