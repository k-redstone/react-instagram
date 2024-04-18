import { Outlet } from "react-router";
import MainLayout from "../../layout/MainLayout";
import GlobalNav from "../../layout/GlobalNav";

const HomePage = () => {

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
