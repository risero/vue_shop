<template>
	<view class="container">
		<!-- 商品图片（轮播图） -->
		<swiper class="detail_imgs" indicator-dots=true indicator-color="#FFFFFF" indicator-active-color="#FF0066" autoplay>
			<swiper-item><image src="/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg"></image></swiper-item></swiper-item>
			<swiper-item><image src="/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg"></image></swiper-item>
			<swiper-item><image src="/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg"></image></swiper-item>
			<swiper-item><image src="/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg"></image></swiper-item>
		</swiper>
		<view class="detail_info">
			<!-- 商品标题 -->
			<view class="detail_title">
				<text>立白！衣物除菌茶籽洗衣液10斤</text>
			</view>
			<!-- 卷后价 -->
			<view class="discount_info">
				<text class="discount_text">卷后价￥</text>
				<text class="discount_price">89.00</text>
				<text class="discount_text">元</text>
			</view>
			<!-- 原价 和 销量 -->
			<view class="other_discount_info">
				<text>原价￥149.00</text>
				<text>销量：1699</text>
			</view>
			<!-- 优惠卷 -->
			<view class="preferential">
				<view class="preferential_left">
					<view class="preferential_left_info">
						<text>60元卷</text>
					</view>
					<view class="preferential_left_info">
						<text class="expiration_date">截止日期: 2020-11-17</text>
					</view>
				</view>
				<view class="preferential_right">
					<text>立即领劵</text>
				</view>
			</view>
			<view class="comment">
				
			</view>
		</view>
		
		<!-- 相关推荐 -->
		<view class="recommend_title">
			<view class="line"></view>
			<view><text>相关推荐</text></view>
		</view>
		
		<view class="recommend_content">
			<view class="row_good_content">
				<view class="good_content">
					<view class="good_img">
						<image src="" mode=""></image>
					</view>
					<view class="good_info">
						<view class="good_title">2020加厚冬新款针织衫防水貂绒套头宽松时尚...</view>
						<view class="good_preferential">30元卷</view>
						<view class="good_preferential_info">
							<view class="good_preferential_info_left">卷后￥39.00</view>
							<view class="good_preferential_info_right">￥69.00</view>
						</view>
						<view class="good_info_foot">
							<view class="salesVolume">销量: 1508</view>
							<view class="good_area">
								<view class="province">浙江</view>
								<view class="city">温州</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="row_good_content">
				<view class="good_content"></view>
			</view>
			<view class="row_good_content">
				<view class="good_content"></view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
	.container {
		width: 100%;
		height: 100%;
		background-color: #CCCCCC;
	}
	/* 轮播图 */
	.detail_imgs, .detail_imgs image{
		height: 300px;
		width: 100%;
	}
	/* 商品信息 */
	.detail_info {
		padding: 10px;
		border: 1px;
		background-color: #fff;
	}
	.discount_info {
		padding: 10px 0px;
	}
	.discount_info .discount_text {
		font-size: 14px;
		color: #fc4d52;
	}
	.discount_info .discount_price {
		color: #FF0036;
		font-weight: 700;
	}
	.other_discount_info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: #9a9a9a;
		font-size: 14px;
	}
	.preferential {
		width: 100%;
		height: 60px;
		color: #FFFFFF;
		text-align: center;
		display: flex;
		flex-direction: row;
		margin-top: 10px;
	}
	.preferential .preferential_left {
		width: 100%;
		height: 100%;
		background-color: #fc4d52;
		box-sizing: border-box;
		padding: 10px 0;
	}
	.preferential_left .preferential_left_info, .preferential_left_info text {
		display: block;
	}
	.preferential_left .expiration_date {
		font-size: 10px;
	}
	.preferential .preferential_right {
		width: 60%;
		height: 100%;
		background-color: #FF0036;
		font-size: 14px;
	}
	.preferential_right text {
		width: 100%;
		height: 100%;
		line-height: 60px;
	}
	
	/* 相关推荐 */
	.recommend_title {
		height: 40px;
		line-height: 40px;
		margin-top: 5px;
		width: 100%;
		font-weight: 700;
		display: flex;
		flex-direction: row;
		background-color: #fff;
		font-size: 14px;
	}
	.recommend_title .line {
		width: 5px;
		height: 14px;
		display: inline-block;
		margin: 13px 10px 0px;
		background-color: #FF0036;
	}
	/* 推荐内容 */
	.recommend_content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-right: 10px;
	}
	.row_good_content {
		width: 50%;
		height: 180px;
		background-color: #red;
	}
	.good_content {
		width: 100%;
		height: 100%;
		margin-left: 10px;
		background-color: #fff;
	}
</style>
