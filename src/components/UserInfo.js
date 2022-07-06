import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAccountActions } from '../features/account/accountSlice'
import { getAccount } from '../features/account/accountApi'

const UserInfo = () => {
  const account = useSelector(state => state.account.account)
  const {
    accountLoading,
    accountLoaded,
    accountLoadFailed
  } = useAccountActions()

  useEffect(() => {
    accountLoading()
    getAccount()
      .then((data) => accountLoaded(data))
      .catch((e) => accountLoadFailed(e.message))
  }, [])

  return (
    <div className='container'>
      { account &&
      <div className='card text-center'>
        <img
          className='card-img-top rounded-circle m-3 w-50 mx-auto'
          src={account.avatar_url}
        />
        <div className='card-body'>
          <h5 className='card-title'>{account.name || account.login}</h5>
          { account.email &&
            <h6 className='card-subtitle mb-2 text-muted'>account.email</h6> }
        </div>
      </div>
      }
    </div>
  )
}

export default UserInfo