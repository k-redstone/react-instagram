import { useState } from "react";
import userStore from "../../stores/userStore";
import api from "../../util/api";

const useFollow = (userId) => {
  const { userToken, userInfo, setUserInfo } = userStore();
  const [isFollow, setFollow] = useState(false);
  const [followerData, setfollowerData] = useState([]);
  const [followingData, setfollowingData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const setDefaultFollow = () => {
    setFollow(!isFollow);
  };

  const handleFollow = async () => {
    try {
      setLoading(true);
      const response = await api.post(`accounts/${userId}/follow/`, null, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      });
      if (response.data.message === "팔로우 성공") {
        setFollow(true);
      }
      if (response.data.message === "언팔로우 성공") {
        setFollow(false);
      }
      getUpdateUserInfo()
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
      const response = await api.get(`contents/users/${userId}/followers/`, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      });
      setfollowerData(response.data);
      if (response.data.find((user) => user.id === userInfo.id)) {
        setFollow(true);
      } else{
        setFollow(false)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // 팔로우가 변하면 전역상태 저장
  const getUpdateUserInfo = async () => {
    try {
      const response = await api.get(
        `accounts/user_info/`,
        {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      );
      setUserInfo(response.data.user);
    } catch (error) {
      console.error(error);
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
    setDefaultFollow,
    getUpdateUserInfo
  };
};

export default useFollow;
