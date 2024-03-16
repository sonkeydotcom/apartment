import { apiSlice } from "./apiSlice";

const USER_URL = "/api/users";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: user,
      }),
    }),
    getUsers: builder.query({
      query: () => USER_URL,
    }),
    getUser: builder.query({
      query: (id) => `${USER_URL}/${id}`,
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: USER_URL,
        method: "POST",
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `${USER_URL}/${user._id}`,
        method: "PUT",
        body: user,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApi;
