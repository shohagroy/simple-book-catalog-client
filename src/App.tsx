import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { useAppDispatch } from "./redux/hooks/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import auth from "./configs/firebase";

function App() {
  const dispatch = useAppDispatch();

  dispatch(setLoading(true));
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
