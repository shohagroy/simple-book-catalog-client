import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../configs/firebase";
import { toast, ToastOptions } from "react-hot-toast";

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
}
interface ICredential {
  email: string;
  password: string;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }: ICredential) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);

      return data.user.email;
    } catch (error) {
      (
        toast as { error: (message: string, options?: ToastOptions) => void }
      ).error(error.code as string);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user.email = action.payload!;
        state.errorMessage = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = action.error.message!;
        state.user.email = null;
      });
  },
});

export default userSlice.reducer;
