<script>
export default {
	// 初始化完成时触发（全局只触发一次）
	onLaunch: function() { 
		console.log('App Launch');
	},
	// 启动，或从后台进入前台显示
	onShow: function() {
		console.log('App Show');
	},
	// 从前台进入后台
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifndef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
