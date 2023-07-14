import React, { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks/hooks";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}
const PrivateRoute = ({ children }: IProps) => {
  //   const { pathname } = useLocation();

  const location = useLocation();

  const { user, isLoading } = useAppSelector((state) => state.user);

  if (isLoading) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ path: location }} replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;
