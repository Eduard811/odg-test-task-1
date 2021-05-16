import { $host } from './index'

export const fetchBrands = async () => {
  const { data } = await $host.get('/brands')
  return data
}
