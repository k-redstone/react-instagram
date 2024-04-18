import PropTypes from "prop-types";
import {
  AiOutlineMore,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
} from "react-icons/ai";

import { PiPaperPlaneTilt, PiBookmarkSimpleBold } from "react-icons/pi";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useState, useLayoutEffect } from "react";
import userStore from "../../stores/userStore";
import api from "../../util/api";

const Article = ({ data }) => {
  const [isLike, setLike] = useState(false);
  const [post, setPost] = useState({});
  const { userToken } = userStore();

  const { register, handleSubmit, resetField } = useForm();

  const reloadArticle = async () => {
    try {
      const reloadData = await api.get(`contents/${data.id}/`, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      });
      setPost(reloadData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = async () => {
    try {
      await api.post(`contents/${data.id}/like/`, null, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      });
      setLike(!isLike);
      reloadArticle();
    } catch (error) {
      console.error(error);
    }
  };

  useLayoutEffect(() => {
    setLike(data.liked_by_user);
    setPost(data);
  }, []);

  const onSubmit = (formValues) => {
    resetField("comment");
    alert(JSON.stringify(formValues));
  };

  const commentRegister = register("comment", {
    required: {
      value: true,
    },
  });

  return (
    <div className="flex justify-center mb-4">
      <article className="flex flex-col w-[470px]">
        {/* 상단 */}
        <div className="pb-3">
          <div className="flex h-8 justify-start items-center">
            <div className="w-8 h-8 border rounded-2xl overflow-hidden">
              {/* adf */}
              <img src="/images/sample.jpg" alt="sample" />
            </div>
            <div className="flex grow">
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

            {/* 좋아요 갯수 */}
            <div className="pl-2 font-bold">
              <span>좋아요 {post.likes_count}개</span>
            </div>
            {/* 게시글 내용 */}
            <div className="flex flex-row pl-2">
              <div className="mr-2 font-bold">
                <span>{post.author}</span>
              </div>
              <span>{post.content}</span>
            </div>
            {/* 댓글 내용 */}
            {/* 댓글 3개 보여줄 예정 */}
            <div className="flex pl-2 pt-1">
              <div>
                <span>댓글 {post.comments?.length}개 모두 보기</span>
              </div>
            </div>
            {/* 댓글 달기 */}
            <div className="pl-2 pt-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextareaAutosize
                  {...commentRegister}
                  cacheMeasurements
                  className="w-full focus:outline-none resize-none"
                  maxLength="200"
                  placeholder="댓글 달기..."
                  autoComplete="off"
                  autoCorrect="off"
                />
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
