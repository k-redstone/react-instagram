import { AiFillHeart, AiOutlineComment } from "react-icons/ai";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ArticleModal from "../ArticleModal";
import Modal from "react-modal";
import useContent from "../../Hooks/contents";
import useLike from "../../Hooks/like";

const ModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
  },
  content: {
    zIndex: "999999",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    backgroundColor: "white",
    width: "60%",
    height: "60%",
  },
};

const ArticleBox = ({ data, liked_by_user }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { post, getArticle } = useContent(data);
  const { isLike, handleLike } = useLike(data, liked_by_user);

  const handleModal = () => {
    getArticle();
    setModalOpen(false);
  };
  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div className="relative w-full mr-1 last:mr-0">
      {post ? (
        <div className="">
          <img
            className="peer w-full h-full object-cover aspect-square border border-neutral-400  hover:brightness-50 hover:cursor-pointer"
            src="/images/sample.jpg"
            alt="img"
            onClick={() => setModalOpen(true)}
          />
          <div className="hidden peer-hover:flex top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 text-white text-xl">
            <div className="flex items-center mr-4">
              <AiFillHeart />
              <p className="ml-1">{post.likes_count}</p>
            </div>
            <div className="flex items-center">
              <AiOutlineComment />
              <p className="ml-1">{post.comments.length}</p>
            </div>
          </div>
          <Modal
            isOpen={isModalOpen}
            shouldCloseOnOverlayClick={true}
            style={ModalStyles}
            ariaHideApp={false}
            onRequestClose={handleModal}
          >
            <ArticleModal
              post={post}
              getArticle={getArticle}
              isLike={isLike}
              handleLike={handleLike}
            />
          </Modal>
        </div>
      ) : (
        <div className="w-full h-full object-cover aspect-square" />
      )}
    </div>
  );
};

ArticleBox.propTypes = {
  data: PropTypes.number,
  liked_by_user: PropTypes.bool,
};

export default ArticleBox;
