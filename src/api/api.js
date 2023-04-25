import { useEffect } from 'react'

/**
 * retrieves information from a user
 */
class UserData {
  constructor(id, userInfos, todayScore, keyData) {
    this.id = id
    this.userInfos = userInfos
    this.todayScore = todayScore
    this.keyData = keyData
  }
}

export const useFetchUserData = (id, setData) => {
  useEffect(() => {
    async function fetchData(id) {
      try {
        const response = await fetch(`http://localhost:3000/user/${id}`)
        const dataUser = await response.json()
        setData(
          new UserData(
            dataUser.data.id,
            dataUser.data.userInfos,
            dataUser.data.todayScore,
            dataUser.data.keyData
          )
        )
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    fetchData(id)
  }, [id, setData])
}

/**
 * retrieves activity from a user
 */
class UserActivity {
  constructor(id, sessions) {
    this.id = id
    this.sessions = sessions
  }
}
export const useFetchUserActivity = (id, setData) => {
  useEffect(() => {
    async function fetchData(id) {
      try {
        const response = await fetch(
          `http://localhost:3000/user/${id}/activity`
        )
        const dataUser = await response.json()
        setData(new UserActivity(dataUser.data.id, dataUser.data.sessions))
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    fetchData(id)
  }, [id, setData])
}
