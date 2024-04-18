import { Outlet, useNavigate } from "react-router";
import MainLayout from "../../layout/MainLayout";
import GlobalNav from "../../layout/GlobalNav";
import userStore from "../../stores/userStore";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate()
  const {userToken} = userStore()
  
  useEffect(() => {
    if (!userToken) {
      navigate('/login')
    }
  },[])
  return (
    <div className="flex">
      <GlobalNav />
      <div className="w-full">
        <MainLayout>
          <Outlet />
        </MainLayout>
      </div>
    </div>
  );
};

export default HomePage;
