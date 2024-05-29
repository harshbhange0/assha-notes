import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import AuthRoutes from "./components/AuthRoute";
import { authCheck } from "./utils/auth";
import { useEffect, useState } from "react";
import Add from "./pages/add/Add";
import All from "./pages/all/Index";
import Layout from "./components/Layout";

export default function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      navigate("/");
    }
    getAuth();
  }, []);
  const getAuth = async () => {
    try {
      const res = await authCheck();
      if (res?.auth) {
        return setAuth(true);
      } else setAuth(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoutes auth={auth}>
                <Home />
              </AuthRoutes>
            }
          />
         
          <Route
            path="/add/:param"
            element={
              <AuthRoutes auth={auth}>
                <Add />
              </AuthRoutes>
            }
          />
          <Route
            path="/all/:param"
            element={
              <AuthRoutes auth={auth}>
                <All />
              </AuthRoutes>
            }
          />
          <Route path="/auth/">
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}
