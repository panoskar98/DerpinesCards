package com.example.DerpinesCards.repositories;

import com.example.DerpinesCards.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Integer> {

}
