package com.ecomerce.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecomerce.backend.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}