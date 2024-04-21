import { useState } from "react";
import userStore from "../../stores/userStore";
import api from "../../util/api";

const useLike = (postId, like) => {
  const { userToken } = userStore();
  const [isLike, setLike] = useState(like);

  const handleLike = async () => {
    try {
      await api.post(`contents/${postId}/like/`, null, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      });
      setLike(!isLike);
    } catch (error) {
      console.error(error);
    }
  };

  return { isLike, handleLike };
};

export default useLike;
