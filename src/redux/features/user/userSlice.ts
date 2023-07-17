import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../../configs/firebase";
import { toast } from "react-hot-toast";

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
      if (typeof error === "object" && error !== null && "code" in error) {
        toast.error((error as { code: string }).code);
      } else {
        toast.error("An error occurred");
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }: ICredential) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);

      return data.user.email;
    } catch (error) {
      if (typeof error === "object" && error !== null && "code" in error) {
        toast.error((error as { code: string }).code);
      } else {
        toast.error("An error occurred");
      }
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
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
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user.email = action.payload!;
        state.errorMessage = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = action.error.message!;
        state.user.email = null;
      });
  },
});

export const { setLoading, setUser } = userSlice.actions;
export default userSlice.reducer;
