import ArticleBox from "../../components/ArticleBox"

const ProfileArticle = () => {
  return(
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[309px] h-[309px] flex mb-1 last:mb-0">
          <ArticleBox />
          <ArticleBox />
          <ArticleBox />
        </div>
        <div className="w-full h-full flex mb-1 last:mb-0">
          <ArticleBox />
          <ArticleBox />
          <ArticleBox />
        </div>

      </div>

    </div>
  )
}



export default ProfileArticle