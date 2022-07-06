import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  account: null
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    accountLoading(state) {
      state.loading = true
    },
    accountLoaded(state, action) {
      state.account = action.payload
      state.loading = false
    },
    accountLoadFailed(state, action) {
      state.loading = false
      console.log(`Failed to load the account - Error: ${action.payload}`)
    }
  }
})

export const {
  accountLoading,
  accountLoaded,
  accountLoadFailed
} = accountSlice.actions

export default accountSlice.reducer