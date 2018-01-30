export const LOADING = "LOADING"
export const LOADED = "LOADED"
export const MORE = "MORE"

const initialState = {
  page: 0,
  isLoading: false,
  beers: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case LOADED:
      return {
        ...state,
        isLoading: false,
        page: action.page,
        beers: [...state.beers, ...action.data]
      }
    default:
      return state
  }
}

export default reducer
