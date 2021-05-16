import { Brand } from '../types/brand'
import { $host } from './index'

export const fetchBrands = async () => {
  const { data } = await $host.get('/brands')
  return data
}

export const fetchBrand = async (id: string) => {
  const { data } = await $host.get(`/brand/${id}`, { responseType: 'json' })
  return data
}

export const updateBrand = async (id: string) => {
  const { data } = await $host.put(`/brand/${id}`)
  return data
}

export const createBrand = async (brand: Brand) => {
  const { data } = await $host.post('/brands/', brand)
  return data
}

export const deleteBrand = async (id: string) => {
  const { data } = await $host.delete(`/brand/${id}`)
  return data
}
