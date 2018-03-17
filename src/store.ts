import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface EventLog {
  events: Array<{timestamp:string}>
}

export const store = new Vuex.Store<EventLog>({
  state    : {
    events: []
  },
  mutations: {
    addEvent( state ){
      state.events.push({
        timestamp: new Date().getTime() + ''
      })
    }
  }
})


setInterval(() =>{
  store.commit('addEvent')
}, 1000)




