import './App.css';
import Header from './components/header';
import Links from './components/links/index'
import StlContainer from './components/stlContainer/index';
function App() {
  return (
    <div className="App">
    <Header />
		<Links />
		<StlContainer />
    </div>
  );
}

export default App;
