import React, { useState, useEffect } from 'react';
import './style.css';

var todolist = localStorage.getItem("todolist");
const localSetitem = () =>{
  if(todolist){
    return JSON.parse(todolist);
  }else{
    return [];
  }
}
const Todo = () => {
  
 const [Itemval, setItemVal] = useState("");
 const [Itemlist, setItemList] = useState(localSetitem());
 const [isEdititem, setIsEditItem] = useState("");
 const [toggleitem, setToogleItem] = useState(false);

 const addItem = () =>{
  if(!Itemval){
    alert("plz fill the data");
  }else if(Itemval && toggleitem){
    
    setItemList(
      Itemlist.map((curElem)=>{
        if(curElem.id === isEdititem){
           return {...Itemlist, name : Itemval}
        }
        return curElem;
      })
    )

    setItemVal("");
    setIsEditItem(null); 
    setToogleItem(false); 
  }else{
    const listid = {
      id: new Date().getTime().toString(),
      name: Itemval,
    }
    setItemList([...Itemlist, listid]);
  }  
  
  setItemVal("");
 }

 const Edititem = (index) =>{
     const editItem = Itemlist.find((curElem)=>{
       return   curElem.id === index;
     }); 
     setItemVal(editItem.name);
     setIsEditItem(index); 
     setToogleItem(true);   
 }

 const Deleteitem = (index) =>{ 

   const remainlist = Itemlist.filter((curElem) =>{
    return(
      curElem.id !== index
    )
   });
   setItemList(remainlist);
 }
 const Removeall = () =>{ 
  setItemList([]);
 }
 
 useEffect(() => {
  localStorage.setItem("todolist", JSON.stringify(Itemlist));
   
 }, [Itemlist])
 
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={Itemval}
              onChange={(e)=> setItemVal(e.target.value)}          
            />
             {toggleitem ? <i className="far fa-edit add-btn" onClick={addItem}></i> : <i className="fa fa-plus add-btn" onClick={addItem} ></i> }
              
            
          </div>
          {/* show our items  */}
          <div className="showItems">
               {Itemlist.map((curElem, i)=>{
                return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={()=> Edititem(curElem.id)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={()=> Deleteitem(curElem.id)}></i>
                  </div>
                </div>
                )
               })}             
          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={Removeall}
              >
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo;