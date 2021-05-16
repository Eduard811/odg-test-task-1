import { combineReducers } from 'redux'
import { brandReducer } from './brandReducer'

export const rootReducer = combineReducers({
  brand: brandReducer,
})

export type RootState = ReturnType<typeof rootReducer>
