import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6307991946372013f56cf403.mockapi.io/api/v1'
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        fetchContancts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),
        createContact: builder.mutation({
            query: ({ nameContact, phoneContact }) => ({
                url: '/contacts',
                method: 'POST',
                body: { 
                    name: nameContact,
                    phone: phoneContact,
                 },
              }),
            invalidatesTags: ['Contact'],
        }),
        deleteContatct: builder.mutation({
            query(contactId) {
                return {
                  url: `/contacts/${contactId}`,
                  method: 'DELETE',
                }
            },
            invalidatesTags: ['Contact'],
        })
    }),
});

export const {
    useFetchContanctsQuery, 
    useDeleteContatctMutation,
    useCreateContactMutation,
} = contactApi;