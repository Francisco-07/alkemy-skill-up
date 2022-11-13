import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import accountReducer from './account/accountSlice'
import transactionReducer from './transaction/transactionSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
    transaction: transactionReducer,
  },
})
