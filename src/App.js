import './App.css';
import UserProvider from './Store/appContext';
import Body from './Components/Body';
import Header from './Components/Header';
function App() {
  return (
    <UserProvider>
      <Header/>
      <Body />
    </UserProvider>
  ); 
}

export default App;
