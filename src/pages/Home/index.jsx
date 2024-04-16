import GlobalNav from "../../layout/GlobalNav";
import Article from "../../components/Article";
import jsonData from '../../assets/data.json';
import RecommendUser from "../../layout/RecommendUser";


const HomePage = () => {


  console.log(jsonData)
  return (
    <div className="flex">
      <GlobalNav />
      <div className="flex w-full justify-center">
        <main className="ml-[335px]">
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
