<template>
	<view class="container">
		<!-- 首页搜索 -->
		<view class="index_search">
			<view class="index_search_box"></view>
			<view class="index_search_input">
				<input type="text" placeholder="先领劵在购物 粘贴商品标题">
			</view>
			<view class="index_search_box"></view>
		</view>
		
		<!-- 分类tab -->
		<scroll-view class="nav_category" scroll-x=true>
			<view class="nav_category_box">综合</view>
			<view class="nav_category_box">食品</view>
			<view class="nav_category_box">家居</view>
			<view class="nav_category_box">女装</view>
			<view class="nav_category_box">美妆</view>
			<view class="nav_category_box">女鞋</view>
			<view class="nav_category_box">箱包</view>
			<view class="nav_category_box">母婴</view>
			<view class="nav_category_box">童装</view>
			<view class="nav_category_box">男装</view>
			<view class="nav_category_box">男鞋</view>
			<view class="nav_category_box">数码</view>
			<view class="nav_category_box">运动</view>
		</scroll-view>
		
		<!-- 搜索条件 -->
		<view class="filter_condition">
			<view class="iconfont icon-gouwu">综合</view>
			<view class="iconfont icon-tianmao1">天猫</view>
			<view class="iconfont icon-taobao">淘宝</view>
			<view class="iconfont icon-pinduoduo1">拼多多</view>
		</view>
		
		<!-- 商品列表 -->
		<view class="goods_list">
			<!-- 商品内容 -->
			<view class="goods_content">
				<!-- 商品图片 -->
				<view class="goods_content_img">
					
				</view>
				<!-- 商品信息 -->
				<view class="goods_content_info">
					<view class="content_title">超厚保暖内衣男加厚加绒情侣套装中老年人男士大码棉衣...</view>
				</view>
			</view>
			<view class="goods_content">
				<!-- 商品图片 -->
				<view class="goods_content_img">
					
				</view>
				<!-- 商品信息 -->
				<view class="goods_content_info">
					
				</view>
			</view>
			<view class="goods_content">
				<!-- 商品图片 -->
				<view class="goods_content_img">
					
				</view>
				<!-- 商品信息 -->
				<view class="goods_content_info">
					
				</view>
			</view>
			<view class="goods_content">
				<!-- 商品图片 -->
				<view class="goods_content_img">
					
				</view>
				<!-- 商品信息 -->
				<view class="goods_content_info">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		font-size: 14px;
		line-height: 24px;
	}
	/* 导航栏 */
	.index_nav {
		background-color: #FF0066;
		height: 60px;
	}
	/* 搜索框 */
	.index_search {
		height: 30px;
		line-height: 13px;
		background-color: #FF0066;
		width: 100%;
		text-align: center;
		box-sizing: border-box;
		border-radius: 13px;
		display: flex;
		flex-direction: row;
	}
	
	.index_search_box {
		height: 100%;
		width: 5%;
		background-color: #FF0066;
	}
	
	.index_search_input {
		width: 90%;
		height: 100%;
	}
	
	.index_search_input input {
		width: 100%;
		height: 100%;
		font-size: 12px;
		display: inline-block;
		border-radius: 30rpx;
		background-color: #FFF;
	}
	/* 分类bar */
	.nav_category {
		height: 30px;
		width: 100%;
		white-space: nowrap; /* 段落文本不进行换行*/
		background-color: #FF0066;
	}
	.nav_category_box {
		height: 100%;
		width: 60px;
		line-height: 30px;
		color: #FFFFFF;
		display: inline-block;
		text-align: center;
		font-size: 12px;
	}
	
	/* 搜索过滤 */
	.filter_condition {
		display: block;
		height: 30px;
		widows: 100%;
	}
	
	.filter_condition span {
		display: flex;
		height: 12px;
		width: 12px;
		flex-direction: row;
	}
	
	.icon-taobao {
		color: #f40;
	}
	.icon-tianmao1 {
		color: #FF0036;
	}
	.icon-pinduoduo1 {
		color: #fc475d;
	}
	
	/* 商品列表 */
	.goods_list {
		width: 100%;
		height: 700px;
		background-color: #4CD964;
	}
	.goods_list .goods_content {
		height: 130px;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		border: 1px solid;
		padding-bottom: 7px;
	}
	.goods_list .goods_content_img {
		width: 45%;
		height: 100%;
		background-color: #E6A23C;
		border-radius: 5px;
	}
	.goods_list .goods_content_info {
		width: 55%;
		height: 100%;
		background-color: #F56C6C;
	}
</style>
