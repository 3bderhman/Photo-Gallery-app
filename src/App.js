import React from "react";
import Title from "./Components/Title/Title";
import UploadImg from "./Components/Upload/UploadImg";
import Image from "./Components/Image/Image";

function App() {
  return (
    <div className="container mt-4">
      <Title/>
      <UploadImg />
      <Image/>  
    </div>
  );
}

export default App;
