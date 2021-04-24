import React from "react";
import "../style/title.css";

function DirectoryHeader (){
return (
<div className style={{ backgroundImage: `url(require("../images/header_background_image.png"))`}}>
      <div className="jumbotron" >
        <h1> Company Directory </h1>
        <p> Welcome to your company employee directory! </p>
   </div>
   </div>     
);
}
export default DirectoryHeader;