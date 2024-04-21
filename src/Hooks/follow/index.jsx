import { useState } from "react";
import userStore from "../../stores/userStore";
import api from "../../util/api";

const useFollow = (userId) => {
  const { userToken, userInfo } = userStore();
  const [isFollow, setFollow] = useState(false);
  const [followerData, setfollowerData] = useState([]);
  const [followingData, setfollowingData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleFollow = async () => {
    try {
      setLoading(true);
      await api.post(`accounts/${userId}/follow/`, null, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      });
      setfollowerData(!isFollow);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getFollowings = async () => {
    try {
      setLoading(true);
      const response = await api.get(`contents/users/${userId}/following/`, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      });
      console.log(response.data);
      setfollowingData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getFollowers = async () => {
    try {
      setLoading(true);
      const response = await api.get(`contents/users/${userId}/following/`, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      });
      console.log(response.data);
      setfollowerData(response.data);
      if (response.data.find((user) => user.id === userInfo.id)) {
        setFollow(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    isFollow,
    isLoading,
    followerData,
    followingData,
    getFollowers,
    getFollowings,
    handleFollow,
  };
};

export default useFollow;
