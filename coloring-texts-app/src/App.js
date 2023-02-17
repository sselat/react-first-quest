import TextCard from './components/textCard/textCard.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <TextCard bgColor='lightgreen' txtColor='darkgreen'/>
      <TextCard bgColor='red' txtColor='pink'/>
      <TextCard bgColor='blue' txtColor='white'/>
      <TextCard/>
    </div>
  );
}

export default App;
