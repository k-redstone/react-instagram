import MainLayout from "../../layout/MainLayout"
import Story from "./Story"
import Article from "../../components/Article"
import RecommendUser from "./RecommendUser"
import jsonData from "../../assets/data.json"

const ContentPage = () => {

  return(
    <div className="flex justify-center mt-4">
      <main className="w-[630px]">
        <div className="mb-6">
          <Story />
        </div>
        <Article data={jsonData} />
        <Article data={jsonData} />
        <Article data={jsonData} />
      </main>
      <div className="hidden xl:block pl-20">
        <RecommendUser />
      </div>
    </div>
  )

}

export default ContentPage