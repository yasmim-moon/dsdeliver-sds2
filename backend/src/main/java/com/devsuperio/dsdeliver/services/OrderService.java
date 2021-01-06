package com.devsuperio.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperio.dsdeliver.dto.OrderDTO;
import com.devsuperio.dsdeliver.dto.ProductDTO;
import com.devsuperio.dsdeliver.entities.Order;
import com.devsuperio.dsdeliver.entities.OrderStatus;
import com.devsuperio.dsdeliver.entities.Product;
import com.devsuperio.dsdeliver.repositories.OrderRepository;
import com.devsuperio.dsdeliver.repositories.ProductRepository;



//registrado
@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	//reconverter para lista
	//fechar conexão com o banco, somente leitura
	@Transactional(readOnly = true)
	public List<OrderDTO> findALL(){
	   List<Order> list = repository.findOrderWithProducts();
       return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	//inserir pedido
	
	
	@Transactional
	public OrderDTO insert(OrderDTO dto){
    //retornar o obj que eu inseri no banco
    //dto,é  obj qu evai chegar na requisição
	    
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(),dto.getLongitude(),
				Instant.now(), OrderStatus.PENDING);
	    for(ProductDTO p : dto.getProducts()) {
	        Product product = productRepository.getOne(p.getId());
	        order.getProducts().add(product);
	    }
	
	//associar os pedidos com os produtos dto
	//percorrer todos os produtos dto dentro dos produtos
	//instanciar um produto com base no id do p.Adicionado na lista
        
	   order = repository.save(order);
	   return new OrderDTO(order);
	   
	}
}
