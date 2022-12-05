import './popup.css';
import React from 'react';

export default function Popup({close}){
    const img=[
        {id:'1',imageName:'1.jpg' ,name:'Shirts' , price:'$40', describtion:"Full sleeve, Collar style - Semi cutaway collar; Cuff style - Single cuff" },
        {id:'2',imageName:'2.jpg' ,name:"Jeans" , price:'$80', describtion:"Due to the nature of Denim fabric, the product might lose color during first few washes. This is a natural attribute and adds to the uniqueness of the product." },
        {id:'3',imageName:'3.jpg' ,name:'T-Shirts' , price:'$100', describtion:"This attractive full sleeves black t shirt will look make you look attractive and will make you stand out of the crowd. You can wear this classic black full sleeves tshirt for going to a party." },
      ];

  return (
    <div className='pop1'>
        <div className="app1">        
                <button className='btn-area2' onClick={()=>close(false)}>x</button>
                <div class="project1">
                    <div class="shop1">
                    {img.map(image =>
                    <div className="box1">
                        <img src={`./imgs/${image.imageName}`} alt="image"/>
                        <div class="content1">
                        <h3>{image.name}</h3>
                        <h4>{image.price}</h4>
                        <h4>{image.describtion}</h4>
                        <p class="unit1">Quantity: <input name="" value="-"/><input name="" value="2"/><input name="" value="+"/></p>
                        <button className='btn-area1'><i aria-hidden="true" class="fa fa-trash"></i></button>
                        </div>
                    </div>
                    )}
                    </div>
                </div>
            </div>
    </div>
    
  );
  }