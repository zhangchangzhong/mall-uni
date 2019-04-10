import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
		//首屏广告上次显示时间
		splashAdvertPreTime: 0,
	},
	mutations: {
		
		login(state, provider) {
			console.log(provider);
			state.hasLogin = true;
			state.userInfo = provider.data.userInfo;
			uni.setStorage({//缓存用户登陆状态
				key: 'userInfo',  
				data: provider.data.userInfo  
			}) ;
			uni.setStorage({//缓存用户登陆状态
				key: 'token',  
				data: provider.data.token  
			}); 
			uni.setStorage({//缓存用户登陆状态
				key: 'tokenHead',  
				data: provider.data.tokenHead  
			});
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({  
                key: 'userInfo'  
            });
			uni.removeStorage({  
			    key: 'token'  
			})
		}
	},
	actions: {
	
	}
})

export default store
