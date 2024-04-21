import PropTypes from "prop-types";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { PiPaperPlaneTilt, PiBookmarkSimpleBold } from "react-icons/pi";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import api from "../../util/api";
import userStore from "../../stores/userStore";

const ArticleModal = ({ getArticle, handleLike, isLike, post }) => {
  const { userInfo, userToken } = userStore();

  const { register, handleSubmit, resetField } = useForm();

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
                    <AiFillHeart
                      color="red"
                      onClick={() => {
                        handleLike();
                        getArticle();
                      }}
                    />
                  ) : (
                    <AiOutlineHeart
                      onClick={() => {
                        handleLike();
                        getArticle();
                      }}
                    />
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
  post: PropTypes.object.isRequired,
  isLike: PropTypes.bool.isRequired,
  getArticle: PropTypes.func,
  handleLike: PropTypes.func,
};

export default ArticleModal;
