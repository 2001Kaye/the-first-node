import "./App.css";
import Container from "./Container";

const App = () => {
  const songs = ["숲", "Animal", "Happy"];

  return (
    <div>
      <Header />
      <Playlist title="프로그래밍하면서 듣고 싶은 노래" listSong={songs} />
    </div>
  );
};

const Header = () => {
  return <h1>React 프로그래밍</h1>;
};

const Playlist = (props) => {
  return (
    <div className="playlist">
      <div className="playlist">{props.title}</div>
      {props.listSong.map((song, idx) => (
        <Container key={idx} idx={idx} title={song} />
      ))}
    </div>
  );
};

export default App;
