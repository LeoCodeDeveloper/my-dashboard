

import CartCounter from "@/app/shopping-cart/components/CartCounter";


export const metadata = {
  title: "Shopping cart",
  description: "yeaaaa el cart"
}


export default function CounterPage() {



  return (

 
      <main className="flex flex-col items-center justify-center   w-full h-full ">
        <span>Productos en el carrito</span>
      {/* <CartCounter /> */}
      <CartCounter value={20}/>
      </main>
 
    
  );
} 