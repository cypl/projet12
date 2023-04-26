import { useEffect } from 'react'

/**
 *
 * @param {*} id
 * @param {*} pathMock
 * @param {*} patchBack
 * @param {*} dataSource
 * @param {*} setData
 */

export const useFetch = (id, pathMock, patchBack, dataSource, setData) => {
  useEffect(() => {
    async function fetchData(id) {
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
          const response = await fetch(patchBack)
          const dataUser = await response.json()
          setData(dataUser.data)
        }
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    fetchData(id)
  }, [id, pathMock, patchBack, dataSource, setData])
}
