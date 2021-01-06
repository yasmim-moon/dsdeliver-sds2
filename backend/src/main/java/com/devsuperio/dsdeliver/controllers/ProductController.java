package com.devsuperio.dsdeliver.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperio.dsdeliver.services.ProductService;
import com.devsuperio.dsdeliver.dto.ProductDTO;


import java.util.List;


//controlador rest

@RestController
//caminho do recurso
@RequestMapping(value = "/products")
public class ProductController {
//controle depende do serviço
	
	@Autowired
	private ProductService service;
	
	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll(){
		 List<ProductDTO> list = service.findALL();
	       return ResponseEntity.ok().body(list);
	}
}
