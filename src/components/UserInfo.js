import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../app/hooks/appDispatch'
import { getAccount } from '../features/account/accountApi'

const UserInfo = () => {
  const account = useSelector(state => state.account.account)
  const {accountLoading, accountLoaded, accountLoadFailed} = useAppDispatch()

  useEffect(() => {
    accountLoading()
    getAccount()
      .then((data) => accountLoaded(data))
      .catch((e) => accountLoadFailed(e.message))
  }, [])

  return (
    <div className='userInfo'>{ account && account.login }</div>
  )
}

export default UserInfo