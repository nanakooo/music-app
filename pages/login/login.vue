<template>
	<view class="login-box">
	        <view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">登录</view>
	        <view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="Inv=1">注册</view>
	</view>
</template>

<script>
</script>

<style>
</style>
