import { useDispatch } from 'react-redux'
import { createSlice } from '@reduxjs/toolkit'
import {bindActionCreators} from '@reduxjs/toolkit';

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
      console.log(action.payload)
    }
  }
})

export const useAccountActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(accountSlice.actions, dispatch);
}

export default accountSlice.reducer