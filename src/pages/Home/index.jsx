import GlobalNav from "../../layout/GlobalNav";
import Article from "../../components/Article";
import jsonData from '../../assets/data.json';
import RecommendUser from "../../layout/RecommendUser";
import Story from "../../layout/Story";


const HomePage = () => {


  console.log(jsonData)
  return (
    <div className="flex">
      <GlobalNav />
      <div className="flex w-full justify-center ml-[335px] mt-4">
        <main className="w-[630px]">
          <div className="mb-6">
            <Story />
          </div>
          <Article data={jsonData} />
          <Article data={jsonData} />
          <Article data={jsonData} />
        </main>
        <div className="pl-20">
          <RecommendUser />
        </div>

      </div>
    </div>
  );
};

export default HomePage;
