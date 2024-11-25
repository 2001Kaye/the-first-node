const Container = (props) => {
  return (
    <div className="container">
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.youtube.com/results?search_query=${props.title}`}
      >
        <img
          src={`https://picsum.photos/600/150?random=${props.idx}`}
          alt={`랜덤 이미지 ${props.idx}`}
        />
        <div className="song-title">{props.title}</div>
      </a>
    </div>
  );
};

export default Container;
