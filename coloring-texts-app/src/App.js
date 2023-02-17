import TextCard from './components/textCard/textCard.js'
import ColorPicker from './components/colorPicker/colorPicker.js'

function App() {
  return (
    <div className="App">
      <TextCard bgColor={'lightgreen'} txtColor={'darkgreen'}/>
      <TextCard bgColor={'red'} txtColor={'pink'}/>
      <TextCard bgColor={'pink'} txtColor={'red'}/>
      <ColorPicker />
    </div>
  );
}

export default App;
