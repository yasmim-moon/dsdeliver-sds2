export type Product = {
    
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
} 
export type  OrderLocationdata = {
    address: number;
    latitude: string;
    longitude: string;s
}

type ProductId={
    id: number;
}
export type OrderPlayload={
    products: ProductId;
}& OrderLocationdata;