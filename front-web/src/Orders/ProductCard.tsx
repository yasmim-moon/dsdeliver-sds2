import React from 'react';
import { Product } from './types';
import {formatPrice} from './helpers'

type Props = {
    product: Product;
    oneSelectProduct:(product: Product) => void;
    isSelected: boolean;
}


function ProductCard({ product, oneSelectProduct, isSelected}: Props){
    return(
        <div 
          className={`orders-card-container ${isSelected} ? 'selected' : '' }`}
          onClick={() => oneSelectProduct(product)}
          >
           <h3 className="order-card-title">
               {product.name}
               </h3>  
               <img
               src={product.imageUri} 
               className="order-card-image" />
               alt={product.name}
               <h3 className="order-card-price">
                   {formatPrice(product.price)}
               </h3>
               <div className="order-card-description">
                   <h3> Descrição </h3>
               <p>
               {product.description}

               Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.  
               </p>
               </div>
        </div>

    

    )
}

export default ProductCard;