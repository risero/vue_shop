<template>
	<view class="container">
		<!-- 商品图片（轮播图） -->
		<swiper class="detail_imgs" indicator-dots=true indicator-color="#FFFFFF" indicator-active-color="#FF0066" autoplay>
			<swiper-item v-for="(item, index) in detailImgs" :key="index">
				<image :src="item"></image>
			</swiper-item>
		</swiper>
		<view class="detail_info">
			<!-- 商品标题 -->
			<view class="detail_title">
				<text>{{detailTitle}}</text>
			</view>
			<!-- 卷后价 -->
			<view class="discount_info">
				<text class="discount_text">卷后价￥</text>
				<text class="discount_price">{{discountPrice}}</text>
				<text class="discount_text">元</text>
			</view>
			<!-- 原价 和 销量 -->
			<view class="other_discount_info">
				<text>原价￥{{originalPrice}}</text>
				<text>销量: {{salesVolume}}</text>
			</view>
			<!-- 优惠卷 -->
			<view class="preferential">
				<view class="preferential_left">
					<view class="preferential_left_info">
						<text>{{preferentialPrice}}元卷</text>
					</view>
					<view class="preferential_left_info">
						<text class="expiration_date">截止日期: {{expirationDate}}</text>
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

		<!-- 推荐列表:start -->
		<view class="recommend_content">
			<view class="row_good_content" v-for="(item, index) in recommendList" :key="item.id">
				<view class="good_content">
					<view class="good_img">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="good_info">
						<view class="good_title">{{item.title}}</view>
						<view class="good_preferential">{{item.preferentialPrice}}元卷</view>
						<view class="good_preferential_info">
							<view class="good_preferential_info_left">卷后￥{{item.preferentialLastPrice}}</view>
							<view class="good_preferential_info_right">￥{{item.originalPrice}}</view>
						</view>
						<view class="good_info_foot">
							<view class="salesVolume">销量: {{item.salesVolume}}</view>
							<view class="good_area">
								<view class="province">{{item.province}}</view>
								<view class="city">{{item.city}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 推荐列表:end -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				detailImgs: [
					'/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg',
					'/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg',
					'/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg',
					'/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg',
					'/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg',
				],
				detailTitle: '立白！衣物除菌茶籽洗衣液10斤', // 标题
				discountPrice: '89.00', // 折扣价
				originalPrice: '149.00', // 原价
				salesVolume: '1699', // 销量
				preferentialPrice: '60', // 优惠卷价格
				expirationDate: '2020-11-17' //截止时间
			}
		},
		methods: {
			recommendList: [{
					img: '/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg',
					title: '2020加厚冬新款针织衫防水貂绒套头宽松时尚',
					preferentialPrice: '30.00', // 优惠卷价格
					originalPrice: '69.00', // 原价
					preferentialLastPrice: '39.00', // 卷后价
					salesVolume: '1508', // 销量
					province: '浙江',
					city: '温州'
				},
				{
					img: '/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg',
					title: '2020加厚冬新款针织衫防水貂绒套头宽松时尚',
					preferentialPrice: '30.00', // 优惠卷价格
					originalPrice: '69.00', // 原价
					preferentialLastPrice: '39.00', // 卷后价
					salesVolume: '1508', // 销量
					province: '浙江',
					city: '温州'
				},
				{
					img: '/static/images/O1CN01Cmn7FG1wgqtr2OiHb_!!0-item_pic.jpg_400x400.jpg',
					title: '2020加厚冬新款针织衫防水貂绒套头宽松时尚',
					preferentialPrice: '30.00', // 优惠卷价格
					originalPrice: '69.00', // 原价
					preferentialLastPrice: '39.00', // 卷后价
					salesVolume: '1508', // 销量
					province: '浙江',
					city: '温州'
				},
			]
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.container {
		width: 100%;
		height: 100%;
		background-color: #EEEEEE;
	}

	/* 轮播图 */
	.detail_imgs,
	.detail_imgs image {
		height: 300px;
		width: 100%;
	}

	/* 商品信息 */
	.detail_info {
		padding: 10px 15px;
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

	.preferential_left .preferential_left_info,
	.preferential_left_info text {
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
		height: 60px;
		line-height: 60px;
		margin-top: 10px;
		width: 100%;
		font-weight: 700;
		display: flex;
		flex-direction: row;
		background-color: #fff;
		font-size: 14px;
	}

	.recommend_title .line {
		width: 5px;
		height: 16px;
		display: inline-block;
		margin-top: 22px;
		margin-left: 15px;
		margin-right: 10px;
		background-color: #FF0036;
	}

	/* 推荐内容 */
	.recommend_content {
		width: auto;
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
		height: 300px;
		margin-top: 10px;
	}

	.row_good_content:last-child {
		margin-bottom: 50px;
	}

	.good_content {
		width: auto;
		height: 100%;
		margin-left: 10px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
	}

	/* 商品图片 */
	.good_img {
		width: 100%;
		height: 165px;
	}

	.good_img image {
		width: 100%;
		height: 100%;
	}

	/* 商品描述信息 */
	.good_info {
		padding: 5px 5px 10px;
		width: 100%;
		height: auto;
		font-size: 16px;
		box-sizing: border-box;

		.good_title {
			word-break: break-all;
			text-overflow: ellipsis;
			display: -webkit-box;
			/** 对象作为伸缩盒子模型显示 **/
			-webkit-box-orient: vertical;
			/** 设置或检索伸缩盒对象的子元素的排列方式 **/
			-webkit-line-clamp: 2;
			/** 显示的行数 **/
			overflow: hidden;
			/** 隐藏超出的内容 **/
		}

		.good_preferential {
			padding: 5px 0px;
			color: #FF0036;
			font-size: 14px;
		}
	}

	.good_preferential_info {
		display: flex;
		justify-content: space-between;
		vertical-align: middle;
		font-size: 14px;

		.good_preferential_info_left {
			color: #FF0036;
		}

		.good_preferential_info_right {
			color: #CCCCCC;
			text-decoration: line-through;
			font-size: 12px;
		}
	}

	.good_info_foot {
		padding-top: 10px;
		display: flex;
		justify-content: space-between;
		font-size: 12px;

		.good_area {
			display: flex;
		}

		.good_area view:first-child {
			padding-right: 5px;
		}
	}
</style>
