package com.devsuperio.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperio.dsdeliver.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

	//metodo auxiliar que irá buscar por nome

     List<Product> findAllByOrderByNameAsc();

}
