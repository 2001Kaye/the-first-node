import "./App.css";
import Container from "./Container";

const App = () => {
  return (
    <div>
      <Header />
      <Playlist />
      <Container idx="1" title="숲" />
      <Container idx="2" title="Animal" />
      <Container idx="3" title="Happy" />
    </div>
  );
};

const Header = () => {
  return <h1>React 프로그래밍</h1>;
};

const Playlist = () => {
  return <div className="playlist">프로그래밍하면서 듣고 싶은 노래</div>;
};

export default App;
