import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <Main />
      <div style={{height:"100px"}}>{/*workaround to keep footer from being on top of content on long screens*/}</div>
      <Footer />
    </>
  );
}

export default App;
