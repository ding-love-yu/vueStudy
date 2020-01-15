import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios';
import req from '@/plugins/req';
import common from "../plugins/common";

Vue.use(Vuex)
// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage
// });

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user){
            state.user = user
        }
    },
    actions: {
        login(context, data) {
            return axios.post(req.login, data).then(res=>{
                // context.commit('setUser', JSON.parse(JSON.stringify(res.data.data)));  //保存登录信息
                return res.data;
            })
        },
        logout({commit}) {
            commit('setUser', null);
            common.router.go2page('/login')
        }
    },
    modules: {},
    // plugins: [vuexLocal.plugin]
    plugins: [new VuexPersistence().plugin]
})
