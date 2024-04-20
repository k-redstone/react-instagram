import Story from "./Story";
import Article from "../../components/Article";
import RecommendUser from "./RecommendUser";
import userStore from "../../stores/userStore";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import api from "../../util/api";

const ContentPage = () => {
  const { userToken } = userStore();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userToken) {
      navigate("/login");
    }
    const getMainContent = async () => {
      try {
        const response = await api.get("contents/", {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMainContent();
  }, [navigate, userToken]);

  return (
    <div className="flex justify-center mt-4">
      <main className="w-[630px]">
        <div className="mb-6">
          <Story />
        </div>
        {posts.map((post) => (
          <Article key={post.id} data={post} />
        ))}
      </main>
      <div className="hidden xl:block pl-20">
        <RecommendUser />
      </div>
    </div>
  );
};

export default ContentPage;
