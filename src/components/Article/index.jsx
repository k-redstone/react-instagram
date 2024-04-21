import PropTypes from "prop-types";
import {
  AiOutlineMore,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
} from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { PiPaperPlaneTilt, PiBookmarkSimpleBold } from "react-icons/pi";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import userStore from "../../stores/userStore";
import api from "../../util/api";
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

const Article = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  // const [isLike, setLike] = useState(false);
  // const [post, setPost] = useState({});
  const { post, getArticle } = useContent(data.id);
  const { isLike, handleLike } = useLike(data.id, data.liked_by_user);
  const { userInfo, userToken } = userStore();
  const navigate = useNavigate();
  const { register, handleSubmit, resetField } = useForm();

  const handleModal = () => {
    getArticle();
    setModalOpen(false);
  };

  useEffect(() => {
    getArticle();
  }, [isLike]);

  const onSubmit = (formValues) => {
    resetField("content");
    api
      .post(
        `contents/${post.id}/comment/`,
        {
          content: formValues.content,
          author: userInfo.id,
          article: post.id,
        },
        {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      )
      .then(() => {
        getArticle();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const commentRegister = register("content", {
    required: {
      value: true,
      message: "댓글을 입력해주세요.",
    },
  });

  if (!post) {
    return null;
  }

  return (
    <div className="flex justify-center mb-4">
      <article className="flex flex-col w-[470px]">
        {/* 상단 */}
        <div className="pb-3">
          <div className="flex h-8 justify-start items-center">
            <div
              className="w-8 h-8 border rounded-2xl overflow-hidden hover:cursor-pointer"
              onClick={() => navigate(`/${post.author}`)}
            >
              <img src="/images/sample.jpg" alt="sample" />
            </div>
            <div
              className="flex grow hover:cursor-pointer"
              onClick={() => navigate(`/${post.author}`)}
            >
              <div className="pl-3">{post.author}</div>
              <div className="pl-3">{}</div>
            </div>
            <AiOutlineMore />
          </div>
        </div>

        {/* 중간 */}
        <div>
          <div className="border rounded-sm max-w-[470px] min-h-[450px]"></div>
        </div>

        {/* 하단 */}
        <div className="mb-4">
          <div className="flex flex-col text-sm">
            {/* 각종 기능 이모지 */}
            <div className="flex items-center text-3xl">
              <div className="flex grow">
                <div className="p-2 box-border hover:cursor-pointer hover:opacity-50">
                  {isLike ? (
                    <AiFillHeart color="red" onClick={handleLike} />
                  ) : (
                    <AiOutlineHeart onClick={handleLike} />
                  )}
                </div>
                <div className="p-2 box-border">
                  <AiOutlineComment />
                </div>
                <div className="p-2 box-border">
                  <PiPaperPlaneTilt />
                </div>
              </div>
              <div className="p-2 box-border">
                <PiBookmarkSimpleBold />
              </div>
            </div>

            {/* 좋아요 갯수 */}
            <div className="pl-2 font-bold">
              <span>좋아요 {post.likes_count}개</span>
            </div>
            {/* 게시글 내용 */}
            <div className="flex flex-row pl-2">
              <div
                className="mr-2 font-bold hover:cursor-pointer"
                onClick={() => navigate(`/${post.author}`)}
              >
                <span>{post.author}</span>
              </div>
              <span>{post.content}</span>
            </div>
            {/* 댓글 내용 */}
            {/* 댓글 3개 보여줄 예정 */}
            <div className="flex pl-2 pt-1">
              <div>
                <span
                  className="hover:cursor-pointer"
                  onClick={() => setModalOpen(true)}
                >
                  댓글 {post.comments?.length}개 모두 보기
                </span>
                <Modal
                  isOpen={isModalOpen}
                  shouldCloseOnOverlayClick={true}
                  style={ModalStyles}
                  ariaHideApp={false}
                  onRequestClose={handleModal}
                >
                  <ArticleModal
                    isLike={isLike}
                    post={post}
                    getArticle={getArticle}
                    handleLike={handleLike}
                  />
                </Modal>
              </div>
            </div>
            {/* 댓글 달기 */}
            <div className="pl-2 pt-1">
              <form onSubmit={handleSubmit(onSubmit)} className="flex">
                <TextareaAutosize
                  {...commentRegister}
                  cacheMeasurements
                  className="grow focus:outline-none resize-none"
                  maxLength="200"
                  placeholder="댓글 달기..."
                  autoComplete="off"
                  autoCorrect="off"
                />
                <button className="text-blue-500 px-3">댓글 달기</button>
              </form>
            </div>
          </div>
        </div>

        <hr />
      </article>
    </div>
  );
};
Article.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Article;
