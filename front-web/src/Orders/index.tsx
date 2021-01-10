import React, { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { Product} from '.types';
import { fetcProducts } from '../api';
import OrderLocation from './OrderLocation';
import { OrderLocationdata } from './types';

function Orders(){
    const [products, setProduct] = useState<Product[]>([]);
    const [orderLocation, setOrderLOcation] = useState<OrderLocationdata>();
    useEffect(() => {
        fetcProducts()
        .then(response =>  setProduct(response.data))//mudando o valor da lista de produtos
        .catch(error => console.log(error))
    },[]);
    //estado que armazena lista de produtos
    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>

    

    )
}

export default Orders;
