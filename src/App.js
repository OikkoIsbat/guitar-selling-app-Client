import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Products from './Components/Products/Products';
import AuthProvider from './context/AuthProvider';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <Header></Header>
        <Footer></Footer>
      </AuthProvider>



    </div>
  );
}

export default App;
