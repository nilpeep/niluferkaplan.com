import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    id: null,
    username: "",
    email: "",
    profilePicture: "",
    roles: [], // Kullanıcı rolleri, örneğin ['user', 'admin']
  },
  isLoggedIn: false, // Kullanıcı giriş yapmış mı kontrolü
  isLoading: false, // Asenkron işlemler için yükleme durumu
  error: null, // Hata mesajlarını tutacak alan
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userData = action.payload;
    },
    clearUser(state) {
      state.userData = null;
    },
  },
});

export default userSlice.reducer;

export const { setUser, clearUser } = userSlice.actions;
