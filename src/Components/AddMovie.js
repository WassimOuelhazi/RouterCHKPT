import React, { useState } from "react";
import "./Addmovie.css";
import { Link } from "react-router-dom";

const AddMovie = ({AddToMovie}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [rate, setRate] = useState("");

  const handleAddMovie = () => {
    console.log(title,"this is our title")
    AddToMovie({
      title: title,
      rate: rate,
      imgUrl: imgUrl,
      date: date,
      description: description,
    });
  };

  return (
    <div className="addmo">
    <h1>Add new movie</h1>
      <h3>Title</h3>
      <input style={{ backgroundColor:"white" ,padding :"10px",borderRadius:"10px", borderWidth:"2px" ,width:"350px",borderStyle:"dashed" ,borderColor:"#FDC600"}}
        placeholder=""
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <h3>Description</h3>
      <input style={{ backgroundColor:"white" ,padding :"10px",borderRadius:"10px", borderWidth:"2px" ,width:"350px",borderStyle:"dashed" ,borderColor:"#FDC600"}}
        placeholder=""
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <h3>Image Url</h3>
      <input style={{ backgroundColor:"white" ,padding :"10px",borderRadius:"10px", borderWidth:"2px" ,width:"350px",borderStyle:"dashed" ,borderColor:"#FDC600"}}
        placeholder=""
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />
      <h3>Rate</h3>
      <input style={{ backgroundColor:"white" ,padding :"10px",borderRadius:"10px", borderWidth:"2px" ,width:"350px",borderStyle:"dashed" ,borderColor:"#FDC600"}}
        placeholder=""
        onChange={(e) => {
          setRate(e.target.value);
        }}
      />
      <h3>Date</h3>
      <input style={{ backgroundColor:"white" ,padding :"10px",borderRadius:"10px", borderWidth:"2px" ,width:"350px",borderStyle:"dashed" ,borderColor:"#FDC600"}}
        placeholder=""
        onChange={(e) => {
          setDate(e.target.value);
        }}
      /><br/>
      <button onClick={ () =>handleAddMovie()} style={{ backgroundColor:"#FDC600",padding: "10px", margin: "30px 0 0 0" , border:"none"}} > <Link to="/movieList"> Add film </Link></button>
    </div>
  );
};

export default AddMovie;
