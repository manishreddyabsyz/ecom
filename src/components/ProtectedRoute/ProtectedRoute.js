import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
  const data = JSON.parse(localStorage.getItem("signupdata"));
  return data ?
  <>
  
  <Outlet/> 
 
  </> 
  
  : <Navigate to="/login" />;
};

export default ProtectedRoute;