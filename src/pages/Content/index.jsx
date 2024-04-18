import Story from "./Story"
import Article from "../../components/Article"
import RecommendUser from "./RecommendUser"
import userStore from "../../stores/userStore"


// 더미
import dummyData from "../../assets/dummy/data.json"

const ContentPage = () => {
  const {userInfo} = userStore()
  
  const getArticle = () => {
    const data = dummyData.posts.filter((post) => userInfo.following.includes(post.userId));
    return data
  }

  return(
    <div className="flex justify-center mt-4">
      <main className="w-[630px]">
        <div className="mb-6">
          <Story />
        </div>
        {getArticle().map((post) => (
          <Article key={post.id} data={post} />

        ))}
        {/* <Article data={jsonData} />
        <Article data={jsonData} />
        <Article data={jsonData} /> */}
      </main>
      <div className="hidden xl:block pl-20">
        <RecommendUser />
      </div>
    </div>
  )

}

export default ContentPage