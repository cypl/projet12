import { useState, useEffect, useRef } from 'react'
import DataFactory from '../dataModels/dataModels'
import { useNavigate } from 'react-router-dom'

const ENV = 'http://localhost:3000/users'

/**
 * A React hook, used to fetch data
 * @param {number} id - The ID of the current user.
 * @param {string} pathMock - The path of the mock data source.
 * @param {string} pathDev - The path of the development data source.
 * @param {string} dataSource - The name of the data source.
 * @param {function} setData - The function used to change the state dataFetched.
 * @param {function} setDataLoading - The function used to change the state isDataLoading.
 */

const useFetchData = (id, pathMock, pathDev, dataSource, dataType) => {
  const [dataFetched, setData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [isError, setError] = useState()
  const [errorStatus, setErrorStatus] = useState(null)

  const navigate = useNavigate()
  const timeoutRef = useRef(null)

  useEffect(() => {
    async function fetchData() {
      setDataLoading(true)

      if (timeoutRef.current) {
        // timeout is cleared when error has occured,
        // to avoid a second timeout before navigating to error page with error status
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(async () => {
        try {
          let response
          // if dataSource is "MOCK"
          if (dataSource === 'MOCK') {
            response = await fetch(pathMock)
            const dataUsers = await response.json()
            const dataUser = dataUsers[id]
            setData(dataUser.data)
            setError(null)
            setDataLoading(false)
          }
          // if dataSource is "DEV"
          if (dataSource === 'DEV') {
            response = await fetch(pathDev)
            // define an error status
            if (!response.ok) {
              setErrorStatus(response.status)
              throw new Error(response.status)
            }
            const dataUser = await response.json()
            setData(dataUser.data)
            setError(null)
            setDataLoading(false)
          }
        } catch (error) {
          setError(true)
          setDataLoading(false)
          if (errorStatus != null) {
            navigate('/error/' + errorStatus) // add the errorStatus as a url param
          }
        }
      }, 1000)
    }
    fetchData()
  }, [dataSource, id, navigate, pathDev, pathMock, errorStatus])

  const data = DataFactory(dataType, dataFetched)

  return { data, isDataLoading, isError }
}

/**
 * API is an object containing functions
 * to retrieve a data object for every routes
 */
export const API = {
  GetUserData: (idUser, dataSource) => {
    const pathMock = `../data/mockedUsersInfos.json`
    const pathDev = `${ENV}/${idUser}/`
    const dataType = 'user'
    return useFetchData(idUser, pathMock, pathDev, dataSource, dataType)
  },

  GetUserActivity: (idUser, dataSource) => {
    const pathMock = `../data/mockedUsersActivity.json`
    const pathDev = `${ENV}/${idUser}/activity`
    const dataType = 'activity'
    return useFetchData(idUser, pathMock, pathDev, dataSource, dataType)
  },

  GetUserSessions: (idUser, dataSource) => {
    const pathMock = `../data/mockedUsersSessions.json`
    const pathDev = `${ENV}/${idUser}/average-sessions`
    const dataType = 'sessions'
    return useFetchData(idUser, pathMock, pathDev, dataSource, dataType)
  },

  GetUserPerformance: (idUser, dataSource) => {
    const pathMock = `../data/mockedUsersPerformance.json`
    const pathDev = `${ENV}/${idUser}/performance`
    const dataType = 'performance'
    return useFetchData(idUser, pathMock, pathDev, dataSource, dataType)
  },
}

export default API
