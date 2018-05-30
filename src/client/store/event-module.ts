//

import { RootState } from "./index"

export interface EventState{
  events: Array<{ timestamp: string }>
}

export const event_state = {
  events: <Array<{ timestamp: string }>> []
}

export const event_getters = {
  events: ( state: RootState ) => state.event.events
}

export const event_mutations = {
  addEvent( state: RootState ){
    state.event.events.push({
      timestamp: 'timestamp: ' + new Date().getTime()
    })
  }
}
