import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Playlist />
      <Container idx="1" title="숲" />
      <Container idx="2" title="Animal" />
      <Container idx="3" title="Happy" />
    </div>
  );
}

function Header() {
  return <h1>React 프로그래밍</h1>;
}

function Playlist() {
  return <div className="playlist">프로그래밍하면서 듣고 싶은 노래</div>;
}

function Container(props) {
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
}

export default App;
