import React, {useState} from "react";
 const sr = {
    width: "80px",
    height: "40px",
    backgroundColor: "green",
    color: "white",
    borderRadius: "10px",
    fontSize: "20px",
 }
export default function Search({ search, setSearch, submit, setSubmit }) {
    function handleSearch(e) {
        setSearch(e.target.value)
        console.log(search)
    }
    function handleSubmit(e) {
        e.preventDefault()
        // submit ? setSubmit(false) : setSubmit(true)
    }
    

  return (
    <div className="search">
     <form onSubmit={handleSubmit}>
        <input onChange={handleSearch}></input>
        <button style={sr} >Search</button>
     </form>
    </div>
  )
}
