//Duong Nhat Anh - 22728821

import React, { useState } from "react";
import "./Bai1.css";

function Bai1() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [tinh, setTinh] = useState(0);
  const [chon, setChon] = useState('');
  function nhapA(e){
    setA(e.target.value);
  }
  function nhapB(e){
    setB(e.target.value);
  }

  function thucHien(){
    if(chon === '+')
      setTinh(parseInt(a) + parseInt(b))
    else if(chon === '-')
      setTinh(parseInt(a) - parseInt(b))
    else if(chon === '*')
      setTinh(parseInt(a) * parseInt(b))
    else if(chon === '/')
      setTinh(parseInt(a) / parseInt(b))
    else console.log('chon phep tinh')
  }

  function chonRadio(e){
    setChon(e.target.value);
  }

  return (
    <div className="container">
      <input onChange={nhapA} type="text" placeholder="nhap a" /><br />
      <input onChange={nhapB} type="text" placeholder="nhap b" /><br />
      <input onChange={chonRadio} type="radio" value='+' name="group"/> <p>+</p> <br />
      <input onChange={chonRadio} type="radio" value='-' name="group"/> <p>-</p> <br />
      <input onChange={chonRadio} type="radio" value='*' name="group"/> <p>*</p> <br />
      <input onChange={chonRadio} type="radio" value='/' name="group"/> <p>/</p> <br />
      <button onClick={thucHien}>Click</button>
      <nav>resual:{tinh}</nav>
    </div>
  );
}
export default Bai1;
