import PropTypes from "prop-types";
// import userStore from "../../stores/userStore";
// import api from "../../util/api";
import { useEffect } from "react";
import useFollow from "../../Hooks/follow";
import FollowUser from "../FollowUser";

// const renderUser = (data, myData) => {
//   const items = [];
//   console.log(data);
//   console.log(myData.followings);
//   data.map((el) => {
//     if (myData.followings.find((user) => user.id === el.id)) {
//       items.push(<FollowUser key={el.id} userData={el} defaultFollow={true} />);
//     } else {
//       items.push(
//         <FollowUser key={el.id} userData={el} defaultFollow={false} />
//       );
//     }
//   });

//   return items;
// };

const FollowModal = ({ userId, type }) => {
  // const { userInfo, userToken } = userStore();
  const {
    isLoading,
    followerData,
    followingData,
    getFollowers,
    getFollowings,
  } = useFollow(userId);
  // const [myFollow, setMyFollow] = useState({});
  // const getMyFollowers = async () => {
  //   try {
  //     const response = await api.get(
  //       `contents/users/${userInfo.id}/following/`,
  //       {
  //         headers: {
  //           Authorization: `Token ${userToken}`,
  //         },
  //       }
  //     );
  //     setMyFollow(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    // getMyFollowers();
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
          {/* {type === "follower" && <FollowUser userData={followerData} />} */}
          {/* {type === "following" && renderUser(followingData, userInfo)} */}

          {type === "follower" &&
            followerData.map((el) => {
              return <FollowUser key={el.id} userData={el} />;
            })}
          {type === "following" &&
            followingData.map((el) => {
              return <FollowUser key={el.id} userData={el} />;
            })}

          {/* : test(followingData, myFollow)} */}
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
