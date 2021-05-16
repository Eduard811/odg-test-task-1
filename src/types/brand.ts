export interface BrandState {
  brands: any
  isLoading: boolean
  error: null | string
  sort: boolean
}

export enum BrandActionTypes {
  FETCH_BRANDS = 'FETCH_BRANDS',
  FETCH_BRANDS_SUCCESS = 'FETCH_BRANDS_SUCCESS',
  FETCH_BRANDS_ERROR = 'FETCH_BRANDS_ERROR',
  TOGGLE_IS_OPEN = 'TOGGLE_IS_OPEN',
  SORT_BY_AZ_OR_ZA = 'SORT_BY_AZ_OR_ZA',
}

interface FetchBrandsAction {
  type: BrandActionTypes.FETCH_BRANDS
}

interface FetchBrandsSuccessAction {
  type: BrandActionTypes.FETCH_BRANDS_SUCCESS
  payload: any[]
}

interface FetchBrandsErrorAction {
  type: BrandActionTypes.FETCH_BRANDS_ERROR
  payload: string
}

interface ToggleIsOpenAction {
  type: BrandActionTypes.TOGGLE_IS_OPEN
  group: string
}

interface SortByAzOrZaAction {
  type: BrandActionTypes.SORT_BY_AZ_OR_ZA
}

export type BrandAction =
  | FetchBrandsAction
  | FetchBrandsSuccessAction
  | FetchBrandsErrorAction
  | ToggleIsOpenAction
  | SortByAzOrZaAction
