package com.example.DerpinesCards.repositories;

import com.example.DerpinesCards.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Integer> {
}
