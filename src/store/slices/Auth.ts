import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../model/User";

export interface AuthProps {
  isAuthenticated: boolean;
  authToken: string | null;
  user: User | null;
  showLoginModal?: boolean;
}

const initialState: AuthProps = {
  isAuthenticated: false,
  authToken: null,
  user: null,
  showLoginModal: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setAuthToken: (state, action: PayloadAction<string | null>) => {
      state.authToken = action.payload;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setShowLoginModal: (state, action: PayloadAction<boolean | undefined>) => {
      state.showLoginModal = action.payload;
    },
  },
});

export const { setAuthenticated, setAuthToken, setUser, setShowLoginModal } =
  auth.actions;

export default auth.reducer;
