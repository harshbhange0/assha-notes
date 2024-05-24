import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Notes from "./pages/notes";
import AuthRoutes from "./components/AuthRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoutes auth={false}>
              <Home />
            </AuthRoutes>
          }
        />
        <Route
          path="/notes"
          element={
            <AuthRoutes auth={false}>
              <Notes />
            </AuthRoutes>
          }
        />

        <Route path="/auth/">
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}
