import PropTypes from "prop-types";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { useEffect } from "react";
import { PiPaperPlaneTilt, PiBookmarkSimpleBold } from "react-icons/pi";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import useLike from "../../Hooks/like";
import api from "../../util/api";
import useContent from "../../Hooks/contents";
import userStore from "../../stores/userStore";

const ArticleModal = ({ data }) => {
  const { isLike, handleLike } = useLike(data.id, data.liked_by_user);
  const { post, getArticle } = useContent(data.id);
  const { userInfo, userToken } = userStore();

  const {
    register,
    // formState: { errors },
    handleSubmit,
    resetField,
  } = useForm();

  const onSubmit = (formValues) => {
    resetField("content");
    resetField("password");
    api
      .post(
        `contents/${data.id}/comment/`,
        {
          content: formValues.content,
          author: userInfo.id,
          article: data.id,
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

  useEffect(() => {
    getArticle();
  }, []);

  if (!post) {
    return null;
  }
  console.log(post);
  return (
    <div className="w-full h-full flex">
      {/* 이미지 */}
      <div className="w-3/5 border-r-2">
        <img
          className="w-full h-full object-fit border border-neutral-400"
          src="/images/sample2.jpg"
          alt="img"
        />
      </div>
      <div className="h-full grow flex flex-col">
        <div className="border-b-2 py-3">
          <p>이름</p>
        </div>

        <div className="py-2">{post.content}</div>

        <div className="pl-4 grow">
          {post.comments.map((comment) => (
            <p key={comment.id} className="py-1">
              {comment.content}
            </p>
          ))}
        </div>
        <div className="mb-4">
          <div className="flex flex-col text-sm">
            {/* 각종 기능 이모지 */}
            <div className="flex items-center text-3xl">
              <div className="flex grow">
                <div className="p-2 box-border">
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
                <button className="text-blue-500 px-3">게시</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ArticleModal.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ArticleModal;
