import PropTypes from "prop-types";
import ArticleBox from "../../components/ArticleBox";

const renderPostContainer = (datas) => {
  const rowCnt = parseInt(datas.length / 3) + 1;
  let row = 0;
  let itemCnt = 0;
  const containers = [];
  while (row != rowCnt) {
    const items = [];
    for (let i = 0; i < 3; i++) {
      if (datas[itemCnt]) {
        items.push(
          <ArticleBox
            key={itemCnt}
            data={datas[itemCnt].id}
            liked_by_user={datas[itemCnt].liked_by_user}
          />
        );
      } else {
        items.push(<ArticleBox key={itemCnt} />);
      }
      itemCnt++;
    }
    const container = (
      <div key={row} className="flex mb-1 last:mb-0">
        {items}
      </div>
    );
    containers.push(container);
    row++;
  }
  return containers;
};

const ProfileArticle = ({ postData }) => {
  return (
    <div>
      <div className="flex flex-col">{renderPostContainer(postData)}</div>
    </div>
  );
};

{
  /* <div>
  <div className="flex flex-col">
    <div className="flex mb-1 last:mb-0">
      <ArticleBox img_url={"asdfsad"} />
      <ArticleBox />
      <ArticleBox />
    </div>
    <div className="flex mb-1 last:mb-0">
      <ArticleBox />
      <ArticleBox />
      <ArticleBox />
    </div>
  </div>
</div> */
}

export default ProfileArticle;

ProfileArticle.propTypes = {
  postData: PropTypes.array.isRequired,
};
