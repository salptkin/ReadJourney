import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../store/auth/authSelectors";

const PublicRoute = ({ children }) => {
  const token = useSelector(selectToken);
  const location = useLocation();

  return !token ? children : <Navigate to={location.state ?? "/"} />;
};

export default PublicRoute;
