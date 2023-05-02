import { useEffect } from 'react'

/**
 *
 * @param {*} id
 * @param {*} pathMock
 * @param {*} pathDev
 * @param {*} dataSource
 * @param {*} setData
 */

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
      setDataLoading(true)
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
          setDataLoading(false)
          console.log(error)
        } finally {
          setDataLoading(false)
        }
      }, 1000)
    }
    fetchData(id)
  }, [id, pathMock, pathDev, dataSource, setData, setDataLoading])
}
