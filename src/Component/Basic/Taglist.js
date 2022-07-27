import React from 'react';

const Taglist = ({mylist, filtertag}) => {
  return (
    <>
        <nav className="navbar">
            <div className="btn-group">
                { mylist.map((curval, i)=>{
                return(
                  <button key={i} className="btn-group__item" onClick={ ()=> filtertag(curval)} >{curval}</button> 
                )
                })}                               
            </div>
        </nav>
    </>
  )
}

export default Taglist;