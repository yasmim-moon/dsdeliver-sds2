import React, { useEffect, useState } from 'react';
import './styles.css';
import {toast} from 'react-toastify'
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { Product} from './types';
import { fetcProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import { OrderLocationData } from './types';
import Footer from '../Footer';
import { checkIsSelect } from './helpers';
import OrderSummary from './OrderSummary';

function Orders(){
    const [products, setProduct] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum,item) =>{
        return sum + item.price;
    },0);
    useEffect(() => {
        fetcProducts()
        .then(response =>  setProduct(response.data))//mudando o valor da lista de produtos
        .catch(error => console.log(error))
      } ,[]);
            //toast.warning(`Erro ao lista produtos`);
    //estado que armazena lista de produtos
 
      
const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelect(selectedProducts, product)
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  
const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload).then((response)=> {
      toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
      setSelectedProducts([]);
    })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }
    return(
      <>
        <div className="orders-container">
            <StepsHeader />
            <ProductsList 
              products={products}
              oneSelectProduct={handleSelectProduct}
              selectedProducts={selectedProducts}
            />
            <OrderLocation 
             onChangeLocation={location => setOrderLocation(location)}/>
            <OrderSummary
            amount={selectedProducts.length} 
            totalPrice={totalPrice }
            onSubmit={handleSubmit}
            />
        </div>
        <Footer />
      </>
   
    

    )
}

export default Orders;
