package com.devsuperio.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperio.dsdeliver.dto.OrderDTO;
import com.devsuperio.dsdeliver.entities.Order;
import com.devsuperio.dsdeliver.repositories.OrderRepository;



//registrado
@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	//reconverter para lista
	//fechar conexão com o banco, somente leitura
	@Transactional(readOnly = true)
	public List<OrderDTO> findALL(){
	   List<Order> list = repository.findOrderWithProducts();
       return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}

}
