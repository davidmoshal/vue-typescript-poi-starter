import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export interface EventLog{
  events: Array<{ timestamp: string }>
}


const mutations = {
  addEvent( state ){
    state.events.push({
      timestamp: 'timestamp: ' + new Date().getTime()
    })
  }
}


export const store = new Vuex.Store<EventLog>({
  state: {
    events: []
  },
  mutations
})


setInterval(() =>{
  store.commit('addEvent')
}, 1000)


declare var module
if( module.hot ){
  module.hot.accept(() =>{
    store.hotUpdate({
      mutations: mutations
    })
  })
}
