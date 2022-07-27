import React, {useState} from 'react';
import Product from './Itemlist';
import Tagdata from './Tagdata';
import Taglist from './Taglist';

const Mylist = [...new Set(Product.map((curlist)=>{
  return curlist.category;
})), "All"];

const Resturant = () => {

  const [myProduct, setMyProduct] = useState(Product);

  const[uniqList, setUniqList] = useState(Mylist);
  

  const filtertag = (tagval) =>{   
    const menulist =  Product.filter((curelm) =>{
        return curelm.category === tagval;
      })     
      setMyProduct(menulist);

      if(tagval == "All"){
        setMyProduct(Product);
      }
  }
    
  return (
    <>
    <Taglist mylist={uniqList} filtertag={filtertag}/>

    <Tagdata myProduct={myProduct}/>       
    </>
  )
}

export default Resturant;