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
			<view class="iconfont icon-gouwu"><text>综合</text></view>
			<view class="iconfont icon-tianmao2"><text>天猫</text></view>
			<view class="iconfont icon-taobao"><text>淘宝</text></view>
			<view class="iconfont icon-pinduoduo1"><text>拼多多</text></view>
		</view>
		
		<!-- 商品列表 -->
		<view class="goods_list">
			<!-- 商品内容 -->
			<view class="goods_content" @tap="backPage" v-for="(item, key) in list" :key="key">
				<!-- 商品图片 -->
				<view class="goods_content_img">
					<image :src="item.goodImg"></image>
				</view>
				<!-- 商品信息 -->
				<view class="goods_content_info">
					<view :class="categoryList[parseInt(item.category) - 1].icon">
						<text>【{{categoryList[parseInt(item.category) - 1].text}}】{{item.title}}</text>
					</view>
					<view class="coupon">{{item.coupon}}</view>
					<view class="discount_info">
						<view class="discount_info_left">
							<text class="discount_text">卷后价</text>
							<text class="price_unit">￥</text>
							<text class="discount_price">{{item.discountPrice}}</text>
						</view>
						<!-- 折扣信息 -->
						<view class="discount_info_right">
							<text class="original_price">原价{{item.originalPrice}}</text>
						</view>
					</view>
					<view class>销量: {{item.salesVolume}}</view>
					<view class="discount_shop">
						<view class="shop">{{item.shop}}</view> 
						<view class="shop_area">
							<view class="province">{{item.province}}</view>
							<view class="city">{{item.city}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryList: [ // 1: 天猫, 2: 淘宝, 3: 拼多多
					{
						val: 1,
						text: "天猫",
						icon: "content_title iconfont icon-tianmao2"
					},
					{
						val: 2,
						text: "淘宝",
						icon: "content_title iconfont icon taobao"
					},
					{
						val: 3,
						text: "拼多多",
						icon: "content_title iconfont icon pinduoduo"
					}
				],
				list: [
					{
						title: "【32.80秒杀】特级安溪铁观音礼盒125g",
						goodImg: "/static/images/O1CN013JlR5E2CxMy3YnyY1_!!2206121798540.jpg_310x310.jpg",
						category: 1,
						coupon: 20,
						discountPrice: 32.80,
						originalPrice: 52.80,
						salesVolume: 8888,
						shop: "伊古道旗舰店",
						province: "广东",
						city: "广州"
					},
					{
						title: "【32.80秒杀】特级安溪铁观音礼盒125g",
						goodImg: "/static/images/O1CN013JlR5E2CxMy3YnyY1_!!2206121798540.jpg_310x310.jpg",
						category: 1,
						coupon: 20,
						discountPrice: 32.80,
						originalPrice: 52.80,
						salesVolume: 8888,
						shop: "伊古道旗舰店",
						province: "广东",
						city: "广州"
					},
					{
						title: "【32.80秒杀】特级安溪铁观音礼盒125g",
						goodImg: "/static/images/O1CN013JlR5E2CxMy3YnyY1_!!2206121798540.jpg_310x310.jpg",
						category: 1,
						coupon: 20,
						discountPrice: 32.80,
						originalPrice: 52.80,
						salesVolume: 8888,
						shop: "伊古道旗舰店",
						province: "广东",
						city: "广州"
					},
					{
						title: "【32.80秒杀】特级安溪铁观音礼盒125g",
						goodImg: "/static/images/O1CN013JlR5E2CxMy3YnyY1_!!2206121798540.jpg_310x310.jpg",
						category: 1,
						coupon: 20,
						discountPrice: 32.80,
						originalPrice: 52.80,
						salesVolume: 8888,
						shop: "伊古道旗舰店",
						province: "广东",
						city: "广州"
					}
				]
			}
		},
		methods: {
			backPage() {
				uni.redirectTo({
					url: `/pages/good_detail`
				})
			}
		},
		created() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		font-size: 14px;
		line-height: 24px;
	}
	/* 导航栏 */
	.index_nav {
		background-color: #FF0066;
		height: 60px;
		z-index: 1;
	}
	/* 搜索框 */
	.index_search {
		height: 40px;
		line-height: 13px;
		background-color: #FF0066;
		width: 100%;
		text-align: center;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		padding-top: 10px;
		position: fixed;
		top: 0px;
		z-index: 1;
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
		height: 40px;
		width: 100%;
		font-size: 16rpx;
		white-space: nowrap; /* 段落文本不进行换行*/
		background-color: #FF0066;
		position: fixed;
		top: 40px;
		z-index: 1;
	}
	.nav_category_box {
		height: 100%;
		width: 60px;
		line-height: 40px;
		color: #FFFFFF;
		display: inline-block;
		text-align: center;
		font-size: 16px;
	}
	
	/* 搜索过滤 */
	.filter_condition {
		display: flex;
		flex-direction: row;
		height: 30px;
		width: 100%;
		justify-content: center;
		padding: 5px 0px;
		position: fixed;
		top: 80px;
		z-index: 1;
		background-color: #fff;
	}
	/* 分类图标 */
	.filter_condition view {
		font-size: 14px;
		margin: 0px 5px;
		color: #3C3E49;
	}
	.filter_condition text {
		font-size: 14px;
		padding-left: 4px;
	}
	.iconfont::before {
		font-size: 14px;
	}
	.icon-taobao::before {
		color: #f40;
	}
	.icon-tianmao2::before {
		color: #FF0036;
	}
	.icon-pinduoduo1::before {
		color: #fc475d;
	}
	
	/* 商品列表 */
	.goods_list {
		width: 100%;
		height: 700px;
		position: relative;
		overflow: hidden;
		z-index: 0;
		top: 120px;
	}
	.goods_list .goods_content {
		height: 170px;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		padding-bottom: 7px;
	}
	/* 商品左侧图片 */
	.goods_list .goods_content_img {
		width: 45%;
		height: 100%;
		margin: 0px 10px;
	}
	
	.goods_content_img image {
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
	
	/* 右侧商品描述信息 */
	.goods_list .goods_content_info {
		width: 55%;
		height: 100%;
		font-size: 10px;
		color: #9a9a9a;
		margin-right: 5px;
	}
	.content_title {
		color: #333333;
		font-size: 14px;
	}
	.content_title .content_title {
		font-size: 16px;
	}
	.coupon {
		background: url('@/static/images/quan.png');
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		height: 23px;
		width: 35px;
		padding: 0px 5px;
		text-align: center;
		font-size: 14px;
		color: #fc4d52;
		margin: 5px 0;
	}
	.discount_info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: #fc4d52;
	}
	.discount_info .discount_info_left .discount_text,.price_unit {
		font-size: 14px;
	}
	.discount_info .discount_info_left .discount_price {
		color: #FF0036;
		font-size: 16px;
	}
	.discount_info .discount_info_right .original_price {
		color: #9a9a9a;
		margin-right: 10px;
		text-decoration: line-through;
	}
	.discount_shop,.shop_area {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.shop_area {
		margin-right: 5px;
	}
	.shop_area view {
		margin-right: 5px;
	}
</style>
