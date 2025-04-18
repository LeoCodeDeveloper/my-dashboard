'use client'

import React from 'react'
import { useState } from "react";


interface Props {
    value? : number
}


const CartCounter = ( {value=0} : Props  ) => {

    function handleSumar() {
        setValor( valor + 1)
      }
    
      function handleRestar() {
        setValor( valor - 1)
      }
    
    
    const [valor, setValor] = useState(value);

    return (
<>
<span className="text-9xl">{valor}</span>

<div className="flex">
  <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" onClick={handleSumar}>+1</button>
  <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"  onClick={handleRestar}>-1</button>
</div>
</>
  )
}

export default CartCounter