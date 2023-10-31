import logo from './logo.svg';
import './App.css';
import TrainList from "./components/TrainList/TrainList";
import FileUploader from "./components/FileUploader/FileUploader";

function App() {
  return (
    <div className="App">
        <TrainList></TrainList>
        <FileUploader></FileUploader>
    </div>
  );
}

export default App;
