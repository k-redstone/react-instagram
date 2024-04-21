import PropTypes from "prop-types";
import userStore from "../../stores/userStore";
import api from "../../util/api";
import { useState, useEffect } from "react";
import useFollow from "../../Hooks/follow";

const test = (data, myFollow) => {
  const items = [];
  data.map((el) => {
    if (myFollow.length > 0 && myFollow.find((user) => user.id === el.id)) {
      items.push(
        <div key={el.id} className="flex my-2">
          <div className="grow">{el.username}</div>
          <div className="flex items-center border rounded-md bg-neutral-300 px-3">
            <p className="text-base">팔로잉</p>
          </div>
        </div>
      );
    } else {
      items.push(
        <div key={el.id} className="flex my-2">
          <div className="grow">{el.username}</div>
          <div className="flex items-center border rounded-md bg-blue-300 px-3 text-white">
            <p className="text-base">팔로우</p>
          </div>
        </div>
      );
    }
  });

  return items;
};

const FollowModal = ({ userId, type }) => {
  const { userInfo, userToken } = userStore();
  const {
    isLoading,
    followerData,
    followingData,
    getFollowers,
    getFollowings,
  } = useFollow(userId);
  const [myFollow, setMyFollow] = useState({});

  const getMyFollowers = async () => {
    try {
      const response = await api.get(
        `contents/users/${userInfo.id}/followers/`,
        {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      );
      setMyFollow(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMyFollowers();
    if (type === "follower") {
      getFollowers();
    }
    if (type === "following") {
      getFollowings();
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="text-center py-3 border-b-2 mb-4">
        <p className="text-sm font-semibold">
          {type === "follower" ? "팔로워" : "팔로잉"}
        </p>
      </div>
      {isLoading ? null : (
        <div className="px-2">
          {type === "follower"
            ? test(followerData, myFollow)
            : test(followingData, myFollow)}
        </div>
      )}
    </div>
  );
};

FollowModal.propTypes = {
  userId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FollowModal;
