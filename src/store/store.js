import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users/useSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})