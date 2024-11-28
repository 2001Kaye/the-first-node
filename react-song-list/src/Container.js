import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Container = (props) => {
  const [lyricsExpanded, setLyricsExpanded] = useState(false);
  const toggleLyrics = () => {
    setLyricsExpanded((prevSate) => !prevSate);
  };

  return (
    <>
      <div className="container">
        <img
          src={`https://picsum.photos/600/150?random=${props.song.id}`}
          alt={`랜덤 이미지 ${props.song.id}`}
          onClick={toggleLyrics}
        />
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.youtube.com/results?search_query=${props.song.title}`}
        >
          <div className="song-title">
            {props.song.title} ({props.song.singer})
          </div>
        </a>
        <div className="song-rating">
          {[...Array(props.song.rating)].map((_, idx) => (
            <FaStar key={idx} />
          ))}
        </div>
      </div>
      {props.song.lyrics && lyricsExpanded && (
        <pre className="song-lyrics" onClick={toggleLyrics}>
          {props.song.lyrics}
        </pre>
      )}
    </>
  );
};

export default Container;
