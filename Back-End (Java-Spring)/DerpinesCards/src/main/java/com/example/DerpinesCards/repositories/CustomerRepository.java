package com.example.DerpinesCards.repositories;

import com.example.DerpinesCards.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
}
