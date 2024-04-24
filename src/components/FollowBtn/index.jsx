import PropTypes from "prop-types";

const FollowBtn = ({ isFollow, handleFollow }) => {
  return (
    <div>
      {isFollow ? (
        <div
          className="flex items-center border rounded-md bg-neutral-300 px-3 mr-4 hover:cursor-pointer"
          onClick={handleFollow}
        >
          <p className="text-base">팔로잉</p>
        </div>
      ) : (
        <div
          className="flex items-center border rounded-md bg-blue-300 px-3 mr-4 text-white hover:cursor-pointer"
          onClick={handleFollow}
        >
          <p className="text-base">팔로우</p>
        </div>
      )}
    </div>
  );
};

// const followBtn = () => {
//   return (
//     <div
//       className="flex items-center border rounded-md bg-blue-300 px-3 mr-4 text-white hover:cursor-pointer"
//       onClick={handleFollow}
//     >
//       <p className="text-base">팔로우</p>
//     </div>
//   );
// };

// const followingBtn = () => {
//   return (
//     <div
//       className="flex items-center border rounded-md bg-neutral-300 px-3 mr-4 hover:cursor-pointer"
//       onClick={handleFollow}
//     >
//       <p className="text-base">팔로잉</p>
//     </div>
//   );
// };

FollowBtn.propTypes = {
  isFollow: PropTypes.bool.isRequired,
  handleFollow: PropTypes.func.isRequired,
};

export default FollowBtn;
