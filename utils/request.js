import http from '@/common/vmeitime-http/interface.js'

//设置baseUrl
http.config.baseUrl = "http://10.122.1.77:8085/"
	//设置请求前拦截器
http.interceptor.request = (config) => {
		//添加通用参数
		config.header = {
			"Authorization": uni.getStorageSync("tokenHead")+uni.getStorageSync("token"),
			'Content-Type':'application/json;charset=UTF-8'
		}
}
	//设置请求结束后拦截器
http.interceptor.response = (response) => {
		//判断返回状态 执行相应操作
		return response;
}

const request = {

	get(url,paramObj, options){
		return new Promise((resolve, reject) =>{
			http.get(url,paramObj, options).then((res)=>{
							const data = res.data
							if(data.code === 200) {
								 resolve(data)
							} 
							else if(data.code === 401) {
								uni.redirectTo({
									url: '/pages/auth/auth'
								})
								resolve(data)
							} else {
								reject(data)
							}	
			})
		})
	},
	post(url,paramObj, options){
		return new Promise((resolve, reject) =>{
			http.post(url,paramObj, options).then((res)=>{
							const data = res.data
							if(data.code === 200) {
								 resolve(data)
							} 
							else if(data.code === 401) {
								uni.redirectTo({
									url: '/pages/auth/auth'
								})
								resolve(data)
							} else {
								reject(data)
							}	
			})
		})
	}
	
}

export default request