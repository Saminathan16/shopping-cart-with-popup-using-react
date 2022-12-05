import { useState } from 'react';
import './App.css';
import Popup from './popup';

const img=[
  {id:'1',imageName:'1.jpg' ,name:'Shirts' , price:'$40', describtion:"Full sleeve, Collar style - Semi cutaway collar; Cuff style - Single cuff" },
  {id:'2',imageName:'2.jpg' ,name:"Jeans" , price:'$80', describtion:"Due to the nature of Denim fabric, the product might lose color during first few washes. This is a natural attribute and adds to the uniqueness of the product." },
  {id:'3',imageName:'3.jpg' ,name:'T-Shirts' , price:'$100', describtion:"This attractive full sleeves black t shirt will look make you look attractive and will make you stand out of the crowd. You can wear this classic black full sleeves tshirt for going to a party." },
];
function App() {
  const [show,setShow]=useState(false);
  console.log(show);

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div class="project">
        <div class="shop">
          {img.map(image =>
          <div className="box">
            <img src={`./imgs/${image.imageName}`} alt="image"/>
            <div class="content">
              <h3>{image.name}</h3>
              <h4>{image.price}</h4>
              <h4>{image.describtion}</h4>
              <p class="unit">Quantity: <input name="" value="-"/><input name="" value="2"/><input name="" value="+"/></p>
              <button className='btn-area'><i aria-hidden="true" class="fa fa-trash"></i></button>
            </div>
          </div>
          )}
        </div>
        <div class="right-bar">
          <p><span>Subtotal</span> <span>$220</span></p>
          <p><span>Delivery</span> <span>Cash On Delivery</span></p>
          <p><span>Total</span> <span>$220</span></p><a onClick={()=>setShow(true)}><i class="fa fa-shopping-cart"></i>Checkout</a>
          
        </div>
      </div> 
      {show && (
        <Popup
          close={setShow}
        />
      )
    }
      
    </div>
  );
}

export default App;
