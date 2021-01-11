import React from 'react';
import ProductCard from './ProductCard';
import { Product} from "./types";
import { checkIsSelect } from './helpers';

type Props ={
    products: Product[];
    oneSelectProduct:(product: Product) => void;
    selectedProducts:  Product[];
}

function ProductsList({ products, selectedProducts, oneSelectProduct} : Props){
    return(
        <div className="orders-list-container">
          <div className="orders-list-items">
                {products.map(product => (
                   <ProductCard 
                   key={product.id} 
                   product={product}
                   oneSelectProduct={oneSelectProduct}
                  isSelected={checkIsSelect(selectedProducts, product)}

                   />
                ))}

             
              </div>        
        </div>

    
//cada vez que interar na lista vai ter um produto
    )
}

export default ProductsList;