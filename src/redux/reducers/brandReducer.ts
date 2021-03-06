import { BrandState, BrandAction, BrandActionTypes } from '../../types/brand'

const initialState: BrandState = {
  brands: [],
  isLoading: true,
  error: null,
  sort: false,
}

export const brandReducer = (state = initialState, action: BrandAction): BrandState => {
  switch (action.type) {
    case BrandActionTypes.FETCH_BRANDS:
      return { ...state, isLoading: true }
    case BrandActionTypes.FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        brands: action.payload,
      }
    case BrandActionTypes.FETCH_BRANDS_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    case BrandActionTypes.TOGGLE_IS_OPEN:
      return {
        ...state,
        ...state.brands.forEach((el: any) => {
          if (el[0].group === action.group) {
            el[0].isOpen = !el[0].isOpen
          }
        }),
      }
    case BrandActionTypes.SORT_BY_AZ_OR_ZA:
      return {
        ...state,
        sort: !state.sort,
        brands: [...state.brands].reverse(),
      }
    default:
      return state
  }
}
