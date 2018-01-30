import { LOADED, LOADING } from "./index"
import axios from "axios"

const loading = () => ({
  type: LOADING
})

const loaded = (data, page) => ({
  type: LOADED,
  data,
  page
})

export const load_beer = () => (dispatch, getState) => {
  const { page, isLoading } = getState()

  if (!isLoading) {
    dispatch(loading())
    const newPage = page + 1
    return axios
      .get(`https://api.punkapi.com/v2/beers?page=${newPage}`)
      .then(response => {
        const data = response.data
        dispatch(loaded(data, newPage))
        return data.length
      })
  }
}
