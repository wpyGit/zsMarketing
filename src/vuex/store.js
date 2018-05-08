import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    userName: '',
    userId:'',
    power:'power1,power2,power3',
  },
  //修改状态
  mutations:{
  	setUserName(state,val){
  		state.userName = val;
  	},
  	setUserId(state,val){
  		state.userId = val;
  	}
  }
})

export default store