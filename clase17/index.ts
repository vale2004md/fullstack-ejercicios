//Crear una interfaz Product con propiedades como nombre, precio, stock y una función para calcular el valor total.
interface Product {
    name: string;
    price: number;
    stock: number;
}
function calculateTotalValue(price: number, stock: number): number {
    return price * stock;
}

const product: Product = {
    name: 'Producto 1',
    price: 10,
    stock: 5,
};

const totalValue = calculateTotalValue(product.price, product.stock);
console.log(`El valor total del producto es: ${totalValue}`);