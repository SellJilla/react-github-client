import { useDispatch } from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit';
import {
  accountLoading,
  accountLoaded,
  accountLoadFailed
} from '../../features/account/accountSlice';

export const useAppDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators({
    accountLoading,
    accountLoaded,
    accountLoadFailed
  }, dispatch);
}