import { Dispatch } from 'redux'
import { fetchBrands } from '../../api/brandAPI'
import { BrandAction, BrandActionTypes } from '../../types/brand'

export const fetchBrandsAC = () => async (dispatch: Dispatch<BrandAction>) => {
  try {
    dispatch({ type: BrandActionTypes.FETCH_BRANDS })
    const response = await fetchBrands().then((brands) => {
      return brands
    })

    const sortArray = response.sort((a: any, b: any) => a.title.localeCompare(b.title))
    const firstLetters = sortArray.map((brand: any) => brand.title.toUpperCase().slice(0, 1))
    const groups = Array.from(new Set(firstLetters))
    const newBrands = new Map()

    for (let i = 0; i < groups.length; i++) {
      let group = groups[i]
      let groupObj = { group, isOpen: false }
      const filterBrand = []
      for (let j = 0; j < sortArray.length; j++) {
        groups[i] === firstLetters[j] ? filterBrand.push(sortArray[j]) : newBrands.set(groupObj, filterBrand)
      }
    }
    dispatch({
      type: BrandActionTypes.FETCH_BRANDS_SUCCESS,
      payload: Array.from(newBrands),
    })
  } catch (error) {
    dispatch({
      type: BrandActionTypes.FETCH_BRANDS_ERROR,
      payload: `Произошла ошибка при загрузке брендов.`,
    })
  }
}

export const toggleIsOpenAC = (group: string) => (dispatch: Dispatch<BrandAction>) => {
  dispatch({ type: BrandActionTypes.TOGGLE_IS_OPEN, group })
}

export const sortByAzOrZaAC = () => (dispatch: Dispatch<BrandAction>) => {
  dispatch({ type: BrandActionTypes.SORT_BY_AZ_OR_ZA })
}
