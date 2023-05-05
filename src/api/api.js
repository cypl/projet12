import { useState, useEffect } from 'react'
import { UserData, UserDataSessions } from '../dataModels/dataModels'

const ENV = 'http://localhost:3000/user'

export const useFetch = (
  id,
  pathMock,
  pathDev,
  dataSource,
  setData,
  setDataLoading
) => {
  useEffect(() => {
    async function fetchData(id) {
      setDataLoading && setDataLoading(true)
      // ajouter un setTimeOut
      setTimeout(async () => {
        try {
          // if dataSource is MOCK :
          if (dataSource === 'MOCK') {
            const response = await fetch(pathMock)
            const dataUsers = await response.json()
            const dataUser = dataUsers[id]
            setData(dataUser.data)
          }
          // if dataSource is BACK :
          else {
            const response = await fetch(pathDev)
            const dataUser = await response.json()
            setData(dataUser.data)
          }
        } catch (error) {
          setDataLoading && setDataLoading(false)
          console.log(error)
        } finally {
          setDataLoading && setDataLoading(false)
        }
      }, 1000)
    }
    fetchData(id)
  }, [id, pathMock, pathDev, dataSource, setData, setDataLoading])
}

////////////////////////

export function GetUserData(idUser, dataSource) {
  const [dataUser, setDataUser] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  useFetch(
    idUser,
    `../data/mockedUsersInfos.json`,
    `${ENV}/${idUser}`,
    dataSource,
    setDataUser,
    setDataLoading
  )
  const data = new UserData(dataUser)
  return { data, isDataLoading }
}

////////////////////////

export function GetUserActivity(idUser, dataSource) {
  const [dataSessions, setDataSessions] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  useFetch(
    idUser,
    `../data/mockedUsersActivity.json`,
    `${ENV}/${idUser}/average-sessions`,
    dataSource,
    setDataSessions,
    setDataLoading
  )
  const data = new UserDataSessions(dataSessions)
  return { data, isDataLoading }
}

//   static getUserSessions() {}

//   static getUserPerformance() {}
// }
