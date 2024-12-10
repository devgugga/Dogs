import { useContext } from "react";
import { UserContext } from "../../Context/UserContext.jsx";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export function ProtectedRoute({ children }) {
  const { login } = useContext(UserContext);

  return login ? children : <Navigate to="/login" />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
