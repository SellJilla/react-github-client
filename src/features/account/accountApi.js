import {APPLICATION_BASE_URL, ACCOUNT_USERNAME} from '../../app/appConfig'

export const getAccount = async () => {
  const response = await fetch(
    `${APPLICATION_BASE_URL}/users/${ACCOUNT_USERNAME}`)
  if (!response.ok) {
    throw new Error('Failed to load account information.')
  } else {
    return response.json()
  }
}