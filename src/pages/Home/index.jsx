import GlobalNav from "../../layout/GlobalNav";
import Article from "../../components/Article";
import jsonData from '../../assets/data.json';


const HomePage = () => {


  console.log(jsonData)
  return (
    <div className="flex">
      <GlobalNav />
      <main className="ml-[335px]">
        <Article data={jsonData} />
      </main>
    </div>
  );
};

export default HomePage;
