import logo from './logo.svg';
import './App.css';
import { Header } from './HeaderComponent/Header';
import { Form } from './FormComponents/FormPage';
import { Footer } from './FooterComponent/Footer';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header></Header>
      </div>
      <div className='form'>
        <Form></Form>
      </div>
      <div className='footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
