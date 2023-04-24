import { useEffect } from 'react'

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
