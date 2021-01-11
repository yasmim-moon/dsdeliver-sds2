import React from 'react';
//import { format } from 'path';
import { formatPrice } from './helpers';

type Props ={
    amount: number;
    totalPrice: number;
    onSubmit:() => void;
}
function OrderSummary({amount, totalPrice}: Props){
    return(
       <div className="order-summary-container">
           <div className="order-summary-content">
               <span className="amount-selected-contaner">
                   <strong className="amount-selected" >amount</strong>
                   PEDIDOS SELECIONADOS
               </span>
               <span className="order-summary-total">
                   <strong 
                      className="amount-selected">
                      oneClick={onsubmit}
                       {formatPrice(totalPrice)}
                   </strong>
                   VALOR TOTAL
               </span>
               </div>
               <div>

                <button className="order-summary-make">
                    FAZER PEDIDO
                </button>
           </div>

       </div>
    )
}

export default OrderSummary;
