// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import { useState } from "react";

// export default function App() {
//   let p = { pid: 1, pname: "Lays", isStock: true }
//   let up = { pid: 1, pname: "Lays", isStock: false }

//   let [num, setNum] = useState(0)
//   let [name, setName] = useState("Bahadur")
//   let [product, setProduct] = useState(p)
 
//   let update = () => {
//     // setNum(num=num+1)
//     // setName(name="Mirza Bahadur")
//     setProduct({ ...product, isStock: false, qty: 10 })
//   }

//   return <div>
//     {/* <Header/>
//     <Body/>
//     <Footer/> */}
//     {/* <h1>{num}</h1>
//     <h1>{name}</h1> */}
//     <h1>{product.pid}</h1>
//     <h1>{product.pname}</h1>
//     <h1>{product.isStock == true ? "Available" : "Out of Stock"}</h1>
//     <h1>{product.qty}</h1>
//     <button onClick={update}>Value Update</button>
//   </div>
// }

//------------------------------------------------------------------------------------

import React from 'react'
import Home from './pages/Home'

function App() {
  let products=[
    {
    title:"Deal 1",
    describ:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 250,
    img:"/burger.png"
  },
  {
    title:"Deal 2",
    describ:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 350,
    img:"/fries.png"
  },
  {
    title:"Deal 3",
    describ:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 550,
    img:"/burger.png"
  },
  {
    title:"Deal 4",
    describ:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 750,
    img:"/deal.png"
  },
  {
    title:"Deal 5",
    describ:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 750,
    img:"/deal.png"
  },
  {
    title:"Deal 6",
    describ:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 750,
    img:"/deal.png"
  },
  {
    title:"Deal 7",
    describ:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 750,
    img:"/deal.png"
  },
  {
    title:"Deal 8",
    describ:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 750,
    img:"/deal.png"
  }
]
  return (
    <div>
      <Home products={products}/>
    </div>
  )
}

export default App  