import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [product, setProduct] = useState([]);


  const hanldeSubmit = (name) => {
    if (name === "") {
      alert("Hãy nhập dữ liệu")
    }
    else {
      setProduct([...product, { name, point:0 }]);
    }
    
  }
  let number = product.length;


  const hanldeDelete = (index) => {
      setProduct([...product.slice(0, index),...product.slice(index + 1)]);
    }

  const updateGiamTang = (index) => {
    setProduct(index);
  }

  const calculateTotalPoints = () => {
    let totalPoints = 0;
    product.forEach((item) => {
      totalPoints += item.point;
    });
    return totalPoints;
  };

  
  return (
    <div className="container mt-5">
      <div className="card-body">
        <Header number={number} totalPoints={calculateTotalPoints()}/>
        <Content onData={product} onDelete={hanldeDelete} updateGiamTang ={updateGiamTang}/>
        <Footer onPush={hanldeSubmit} />
      </div>
    </div>
  );
}

export default App;
