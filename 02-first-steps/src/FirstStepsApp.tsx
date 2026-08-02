import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCar {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCar[] = [
  { productName: "Nintendo Switch 2", quantity: 5 },
  { productName: "PlayStation 5", quantity: 3 },
  { productName: "Xbox Series X", quantity: 8 },
];

export function FirstStepsApp() {
  return (
    <>
    {
      itemsInCart.map(({productName, quantity}) => (
        <ItemCounter key={productName} itemName={productName} quantity={quantity}/>
      ))
    }

    <h1>Carrito de compras</h1>
    {/*<ItemCounter itemName="Producto 1" quantity={5}/>
    <ItemCounter itemName="Producto 2" quantity={3}/>
    <ItemCounter itemName="Producto 3" quantity={8}/>
    
    */}
    </>
  );
}
