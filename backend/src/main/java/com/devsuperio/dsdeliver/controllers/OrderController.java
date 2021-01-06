package com.devsuperio.dsdeliver.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperio.dsdeliver.dto.OrderDTO;
import com.devsuperio.dsdeliver.services.OrderService;


//controlador rest

@RestController
//caminho do recurso
@RequestMapping(value = "/orders")
public class OrderController {
//controle depende do serviço
	
	@Autowired
	private OrderService service;
	
	@GetMapping
	public ResponseEntity<List<OrderDTO>> findAll(){
		 List<OrderDTO> list = service.findALL();
	       return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<OrderDTO> insert(@RequestBody OrderDTO dto){
		dto = service.insert(dto);
		URI uri =  ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				       .buildAndExpand(dto.getId()).toUri();
				       
	    return ResponseEntity.created(uri).body(dto);
		
	}
	
	
}
