import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header/>
      <main className='py-3'>
      <Container>
        <Outlet/>
      </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
