import { useState, useEffect } from 'react'
import DataFactory from '../dataModels/dataModels'

const ENV = 'http://localhost:3000/user'

const useFetch = (
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

function FetchData(idUser, dataSource, sourceMock, path, dataType) {
  const [dataFetched, setData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  useFetch(
    idUser,
    sourceMock,
    `${ENV}/${idUser}${path}`,
    dataSource,
    setData,
    setDataLoading
  )
  const data = DataFactory(dataType, dataFetched)
  return { data, isDataLoading }
}

////////////////////////

export const API = {
  getUserData: (idUser, dataSource) => {
    return FetchData(
      idUser,
      dataSource,
      `../data/mockedUsersInfos.json`,
      `/`,
      'user'
    )
  },

  ////////////////////////

  getUserActivity: (idUser, dataSource) => {
    return FetchData(
      idUser,
      dataSource,
      `../data/mockedUsersActivity.json`,
      `/activity`,
      'activity'
    )
  },

  ////////////////////////

  getUserSessions: (idUser, dataSource) => {
    return FetchData(
      idUser,
      dataSource,
      `../data/mockedUsersSessions.json`,
      `/average-sessions`,
      'sessions'
    )
  },

  ////////////////////////

  getUserPerformance: (idUser, dataSource) => {
    return FetchData(
      idUser,
      dataSource,
      `../data/mockedUsersPerformance.json`,
      `/performance`,
      'performance'
    )
  },
}

export default API
