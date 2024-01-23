import ReactPlayer from 'react-player';
import './App.css';


function App() {
  const vidurl="https://youtu.be/zaIsVnmwdqg"
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ReactPlayer
        url={vidurl}
        volume={0.5}
        playing={false}
        controls
        />
      </header>
    </div>
  );
}

export default App;
