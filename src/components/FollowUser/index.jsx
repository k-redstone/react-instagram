import PropTypes from "prop-types";
import FollowBtn from "../FollowBtn";
import useFollow from "../../Hooks/follow";
import { useEffect } from "react";
import userStore from "../../stores/userStore";

const FollowUser = ({ userData }) => {
  const { userInfo } = userStore();
  const { setDefaultFollow, isFollow, handleFollow } = useFollow(userData.id);

  useEffect(() => {
    if (userInfo.followings.find((id) => id === userData.id)) {
      setDefaultFollow();
    }
  }, []);

  return (
    <div className="flex my-2">
      <div className="grow">{userData.username}</div>
      <FollowBtn isFollow={isFollow} handleFollow={handleFollow} />
    </div>
  );
};
FollowUser.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default FollowUser;
