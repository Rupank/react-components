import {useEffect} from 'react';
import './App.css';
import Toast from './components/Toast';
import useToast from './hooks/useToast';

function App() {
  const [ toasts, {addToast}] = useToast();
  useEffect(() => {
    addToast({ type: "sucess", message: "hellp", description: "njsanidnsaidn" });
  }, [])
  return <Toast />
}

export default App;
