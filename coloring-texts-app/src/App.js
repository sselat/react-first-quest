import TextCard from './components/textCard/textCard.js'
import ColorPicker from './components/colorPicker/colorPicker.js'

function App() {
  return (
    <div className="App">
      <TextCard backgroundColor={'lightgreen'} textColor={'darkgreen'}/>
      <ColorPicker />
    </div>
  );
}

export default App;
