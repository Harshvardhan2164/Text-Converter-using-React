import React ,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Enabled","success")
    }
  }
  return (
    <>
    <Navbar title="Text Converter" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>
    </div>
    </>
  );
}

export default App;
