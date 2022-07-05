import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://localhost:1234/api/v1',
})

export const getDragon = (params?: any) =>
  Api.get('/dragon', { params }).then(({ data }: any) => data)

export const createDragon = ({ data, params }: any) =>
  Api.post('/dragon', data, params).then(({ data }: any) => data)

export const updateDragon = (id: string, { data, params }: any) =>
  Api.put(`/dragon/${id}`, data, params).then(({ data }: any) => data)

export const removeDragon = (params: any) =>
  Api.delete(`/dragon/${params.id}`).then(({ data }: any) => data)
