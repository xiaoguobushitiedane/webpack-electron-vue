import Vue from 'vue'
import Vuex from 'vuex'

import Head from './base/Head'
import Content from './base/Content'
import Foot from './base/Foot'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{

    },
    mutations:{

    },
    actions:{

    },
    modules:{
        Head,
        Content,
        Foot
    }
})
