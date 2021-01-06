package com.devsuperio.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperio.dsdeliver.entities.Order;


public interface OrderRepository extends JpaRepository<Order, Long> {
	//escrever uma consulta no jpa
	//jpql aeplido para os objetos, fazer o from tem que ter o nme igual o da classe
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
			   + " WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List<Order> findOrderWithProducts();
	

}
