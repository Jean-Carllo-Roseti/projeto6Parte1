import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeatureRestaurantes: builder.query<Restaurante[], void>({
      query: () => '/restaurantes'
    }),
    getFeaturePratos: builder.query<Restaurante, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetFeatureRestaurantesQuery, useGetFeaturePratosQuery } = api

export default api
