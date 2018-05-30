import Vue from 'vue'
import Vuex, { GetterTree, MutationTree, StoreOptions } from 'vuex'

Vue.use(Vuex)

//
// MODULE PATTERN WITHOUT USING NAMESPACES
//


import { event_getters, event_mutations, event_state, EventState } from './event-module'
import { user_getters, user_mutations, user_state, UserState } from "./user-module"


export interface RootState{
  event: EventState
  user: UserState
}

const state: RootState = {
  event: event_state,
  user : user_state
}

const getters: GetterTree<RootState, any> = {
  ...event_getters,
  ...user_getters
}

const mutations: MutationTree<RootState> = {
  ...event_mutations,
  ...user_mutations
}

export const store = new Vuex.Store<RootState>({
  state,
  getters,
  mutations
})


setInterval(() =>{
  store.commit('addEvent')
}, 1000)


// NOT SURE IF THIS IS ACTUALLY NEEDED:
declare var module
module.hot.accept(() =>{
  store.hotUpdate({
    getters,
    mutations
  })
})
