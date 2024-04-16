import Article from "../../components/Article";
import jsonData from '../../assets/data.json';
import RecommendUser from "./RecommendUser";
import Story from "./Story";
import HomeLayout from "../../layout/MainLayout";


const HomePage = () => {


  console.log(jsonData)
  return (
    <div>
      <HomeLayout>
        <main className="w-[630px]">
          <div className="mb-6">
            <Story />
          </div>
          <Article data={jsonData} />
          <Article data={jsonData} />
          <Article data={jsonData} />
        </main>
        <div className="hidden md:block pl-20">
          <RecommendUser />
        </div>
      </HomeLayout>
    </div>
  );
};

export default HomePage;
