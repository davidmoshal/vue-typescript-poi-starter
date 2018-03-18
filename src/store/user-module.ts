//

import { RootState } from "./index"

export interface UserState{
  users: Array<{ username: string }>
}

export const user_state = {
  users: <Array<{ username: string }>> []
}

export const user_getters = {
  users( state: RootState ){
    return state.user.users
  }
}

export const user_mutations = {
  addUser: ( state: RootState, username: string ) => state.user.users.push({username: username})
  
}