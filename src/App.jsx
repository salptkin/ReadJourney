import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshUser } from "./store/auth/authOperations";

import PageLayout from "./PageLayout/PageLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
         <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
