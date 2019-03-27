<template>
	<view class="container">
		<view class="carousel">
			<swiper circular=true interval="3000" duration="400" @change="swiperChange">
				<block v-for="(item,index) in data.imgList" :key="index">
					<swiper-item>
						<view class="swiper-item">
							<view class="image-wrapper">
								<image
									:src="item.src" 
									:class="item.loaded" 
									mode="aspectFill"
									@load="imageOnLoad('imgList', index)" 
								></image>
							</view>
						</view>
					</swiper-item>
				</block>
			</swiper>
			<view class="swiper-dots">
				<block v-for="(item, index) in data.imgList" :key="index">
					<view class="swiper-dots-item" :class="index === swiperCurrent ? 'active': ''"></view>
				</block>
			</view>
		</view>
		
		
		<view class="page-bottom">
			<view class="p-b-btn">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>首页</text>
			</view>
			<view class="p-b-btn">
				<text class="yticon icon-fenxiang2"></text>
				<text>分享</text>
			</view>
			<view class="p-b-btn active">
				<text class="yticon icon-shoucang"></text>
				<text>收藏</text>
			</view>
			
			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border buy-now-btn">立即购买</button>
				<button type="primary" class=" action-btn no-border add-cart-btn">加入购物车</button>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				swiperCurrent: 0,
				data: {
					guessList: [{},{},{},{}]
				},
			};
		},
		onLoad(){
			this.data = {
				imgList: [{
						src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
					},
					{
						src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
					},
					{
						src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
					},
					{
						src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
					},
				]
			}
		},
		methods:{
			//图片加载
			imageOnLoad(key,index){
				this.$set(this.data[key][index], 'loaded', 'loaded');
			},
			//swiper dot
			swiperChange(e){
				this.swiperCurrent = e.detail.current;
			}
		},

	}
</script>

<style lang='scss'>
	page{
		background: #fff;
	}

	.carousel {
		height: 722upx;
		position:relative;
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	.swiper-dots{
		position:absolute;
		left: 34upx;
		bottom: 26upx;
		height: 40upx;
		z-index: 95;
		font-size: 0;
		display:flex;
		align-items:center;
		.swiper-dots-item{
			margin-right:16upx;
			width: 14upx;
			height: 14upx;
			background: rgba(255,255,255,.7);
			border-radius: 10px;
			&.active{
				width: 18upx;
				height: 18upx;
				background: rgba(255,255,255,1);
			}
		}
	}
	.page-bottom{
		position:fixed;
		left: 30upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 16upx;
		
		.p-b-btn{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 80upx;
			height: 80upx;
			&.active{
				color: $uni-color-primary;
			}
			.yticon{
				font-size: 40upx;
				line-height: 48upx;
			}
			.icon-fenxiang2{
				font-size: 42upx;
				transform: translateY(-2upx);
			}
			.icon-shoucang{
				font-size: 46upx;
			}
		}
		
	}
	.action-btn-group{
		display: flex;
		height: 76upx;
		border-radius: 100px;
		overflow: hidden;
		box-shadow: 0 20upx 40upx -16upx #fa436a;
		background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
		margin-left: 20upx;
		position:relative;
		&:after{
			content: '';
			position:absolute;
			top: 50%;
			right: 50%;
			transform: translateY(-50%);
			height: 28upx;
			width: 0;
			border-right: 1px solid rgba(255,255,255,.5);
		}
		.action-btn{
			display:flex;
			align-items: center;
			justify-content: center;
			width: 200upx;
			height: 100%;
			font-size: $font-base + 2upx;
			padding: 0;
			border-radius: 0;
			background: transparent;
		}
	}
</style>
