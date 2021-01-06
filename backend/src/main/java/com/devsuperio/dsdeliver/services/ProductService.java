package com.devsuperio.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperio.dsdeliver.dto.ProductDTO;
import com.devsuperio.dsdeliver.entities.Product;
import com.devsuperio.dsdeliver.repositories.ProductRepository;



//registrado
@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	
	//reconverter para lista
	//fechar conexão com o banco, somente leitura
	@Transactional(readOnly = true)
	public List<ProductDTO> findALL(){
	   List<Product> list = repository.findAllByOrderByNameAsc();
       return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

}
