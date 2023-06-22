import { useState, useEffect } from 'react'
import DataFactory from '../dataModels/dataModels'
import { useNavigate } from 'react-router-dom'

const ENV = 'http://localhost:3000/user'

/**
 * A React hook, used to fetch data
 * @param {number} id - The ID of the current user.
 * @param {string} pathMock - The path of the mock data source.
 * @param {string} pathDev - The path of the development data source.
 * @param {string} dataSource - The name of the data source.
 * @param {function} setData - The function used to change the state dataFetched.
 * @param {function} setDataLoading - The function used to change the state isDataLoading.
 */
const useFetch = (
  id,
  pathMock,
  pathDev,
  dataSource,
  setData,
  setDataLoading
) => {
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData(id) {
      setDataLoading && setDataLoading(true)
      // setTimeOut is only used to “fake” time load,
      // and make the dataLoading state visible
      setTimeout(async () => {
        try {
          // if dataSource is "MOCK"
          if (dataSource === 'MOCK') {
            const response = await fetch(pathMock)
            const dataUsers = await response.json()
            const dataUser = dataUsers[id]
            setData(dataUser.data)
          }
          // if dataSource is "BACK"
          else {
            const response = await fetch(pathDev).catch((err) => {
              throw URIError('503')
              // server is down ... For the moment \o/
            })
            if (!(response.ok && response.status < 300)) {
              console.log(response.ok, response.status)
              throw URIError('500')
            }
            const dataUser = await response.json()
            setData(dataUser.data)
          }
        } catch (error) {
          setDataLoading && setDataLoading(false)
          console.log(error)
          navigate('/error/' + error.message)
        } finally {
          setDataLoading && setDataLoading(false)
        }
      }, 1000)
    }
    fetchData(id)
  }, [id, pathMock, pathDev, dataSource, setData, setDataLoading, navigate])
}

/**
 * A function that returns fetched data, and data loading status .
 * @param {number} idUser - The ID of the current user.
 * @param {string} dataSource - The name of the data source.
 * @param {string} pathMock - The path of the mock data source.
 * @param {string} pathDev - The path of the development data source.
 * @param {string} dataType - The type of data model.
 * @returns {object} - An object containing data and data loading status.
 */
function FetchData(idUser, dataSource, pathMock, pathDev, dataType) {
  const [dataFetched, setData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  useFetch(
    idUser,
    pathMock,
    `${ENV}/${idUser}${pathDev}`,
    dataSource,
    setData,
    setDataLoading
  )
  const data = DataFactory(dataType, dataFetched)
  return { data, isDataLoading }
}

/**
 * API is an object containing functions
 * to retrieve a data object for every routes
 */
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

  getUserActivity: (idUser, dataSource) => {
    return FetchData(
      idUser,
      dataSource,
      `../data/mockedUsersActivity.json`,
      `/activity`,
      'activity'
    )
  },

  getUserSessions: (idUser, dataSource) => {
    return FetchData(
      idUser,
      dataSource,
      `../data/mockedUsersSessions.json`,
      `/average-sessions`,
      'sessions'
    )
  },

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
