import Story from "./Story"
import Article from "../../components/Article"
import RecommendUser from "./RecommendUser"
import userStore from "../../stores/userStore"
import { useNavigate } from "react-router"
import { useEffect } from "react"

// 더미
import dummyData from "../../assets/dummy/data.json"



const ContentPage = () => {
  const {userInfo, userToken} = userStore()
  const navigate = useNavigate()
  useEffect(() => {
    if (!userToken) {
      navigate('/login')
    }
  },[])
  
  const getArticle = (userInfo) => {
    const datas = dummyData.posts.filter((post) => userInfo?.followings.includes([post.userId]));
    return datas
  }

  return(
    <div className="flex justify-center mt-4">
      <main className="w-[630px]">
        <div className="mb-6">
          <Story />
        </div>
        {getArticle(userInfo).map((post) => (
          <Article key={post.id} data={post} />

        ))}
      </main>
      <div className="hidden xl:block pl-20">
        <RecommendUser />
      </div>
    </div>
  )

}

export default ContentPage