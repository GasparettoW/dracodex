import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1',
})

export const getDragon = (params?: any) =>
  Api.get('/dragon', { params }).then(({ data }: any) => data)

export const createDragon = ({ data, params }: any) =>
  Api.post('/dragon', data, params).then(({ data }: any) => data)

export const updateDragon = ({ data, params }: any) =>
  Api.put(`/dragon/${data.id}`, data, params).then(({ data }: any) => data)

export const removeDragon = (params: any) =>
  Api.delete(`/dragon/${params.id}`).then(({ data }: any) => data)
