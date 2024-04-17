const ArticleBox = ({ data }) => {
  return (
    <div className="w-full mr-1 last:mr-0">
      {data ? (
        <img
          className="w-full h-full object-cover aspect-square border border-neutral-400"
          src="/images/sample.jpg"
          alt="img"
        />
      ) : (
        <div className="w-full h-full object-cover aspect-square" />
      )}
    </div>
  );
};

export default ArticleBox;
