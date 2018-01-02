import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

//映射computed
const state={
    count: 40,
    getData:{ss:"ss"},
    postData:{pp:"pp"}
}
const getters={
    count2 :function(){
        return state.count+=1
    }
}

const mutations={
    jia(state){
        state.count++;
    },
    jian(state,n){
        state.count-=n.a;
    },
    getReq(state){
        axios.get('http://localhost:8090/api/springboot/map', {
            params: {
              context: "操你妹"
            }
          })
          .then(function (response) {
           // console.log(response.data);
            state.getData=response.data
          })
          .catch(function (response) {
            //console.log(response.data);
          });
    },
    postReq(state){
        axios.post('http://localhost:8090/api/springboot/map', {
            context: "操你妹"
          })
          .then(function (response) {
            //console.log(response.data);
            state.postData=response.data;
          })
          .catch(function (response) {
            //console.log(response.data);
          });
    }
}
function getUserAccount() {
    return axios.get('http://localhost:8090/api/springboot/bingf')
        .then(function (response) {
        console.log(response.data);
       
      })
      .catch(function (response) {
        //console.log(response.data);
      });;
  }
  
  function getUserPermissions() {
    return axios.get('http://localhost:8090/api/springboot/bingf2')
    .then(function (response) {
        console.log(response.data);
      })
      .catch(function (response) {
        //console.log(response.data);
      });;
  }
const actions={
    jiaplus({commit}){
        commit("jia")
    },
    jianplus({commit}){
        commit("jian",{a:2})
    },
    getAxjax({commit}){
       commit("getReq")
    },
    postAxjax({commit}){
        commit("postReq")
    },
    moreRequest(){
        axios.all([getUserAccount(), getUserPermissions()])
        .then(axios.spread(function (acct, perms) {
           
        }));
    }

}
const moduleA={
	state,
	mutations,
	getters,
	actions
}
export default new Vuex.Store({
    //modules:{
    // a:moduleA
    //}
    state,
	mutations,
	getters,
	actions
})
