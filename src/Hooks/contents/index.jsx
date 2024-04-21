import { useEffect, useState } from "react";
import userStore from "../../stores/userStore";
import api from "../../util/api";

const useContent = (postId) => {
  const { userToken } = userStore();
  const [post, setPost] = useState();

  const getArticle = async () => {
    try {
      if (!postId) {
        return null;
      }
      const res = await api.get(`contents/${postId}/`, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      });
      setPost(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return { post, getArticle };
};

export default useContent;
