import React, { useEffect, useState } from 'react';
import './styles.css';
import {toast} from 'react-toastify'
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { Product} from '.types';
import { fetcProducts } from '../api';
import OrderLocation from './OrderLocation';
import { OrderLocationdata } from './types';
import Footer from '../Footer';
import { checkIsSelect } from './helpers';

function Orders(){
    const [products, setProduct] = useState<Product[]>([]);
    const [selectProducts, setSelectProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLOcation] = useState<OrderLocationdata>();
    const totalPrice = selectProducts.reduce((sum,item) =>{
        return sum + item.price;
    })
    useEffect(() => {
        fetcProducts()
        .then(response =>  setProduct(response.data))//mudando o valor da lista de produtos
        .catch(error => { 
            toast.warning(`Erro ao lista produtos`};
    },[]);
    //estado que armazena lista de produtos
 
      
const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelect(selectProducts, product)
  
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
            onSelectProduct={handleSelectProduct}
            selectedProducts={selectProducts}
            />
            <OrderLocation 
            onChangeLocation={location => setOrderLocation(location)}/>
            <OrderSummary 
            amount={selectProducts.length} 
            totalPrice={totalPrice }
            onSubmit={handleSubmit}
            />
        </div>
        <Footer />
      </>
   
    

    )
}

export default Orders;
