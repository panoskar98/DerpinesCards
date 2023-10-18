package com.example.DerpinesCards.controller;

import com.example.DerpinesCards.models.Order;
import com.example.DerpinesCards.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("orders")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping
    private List<Order> getAllOrders() {
        return this.orderRepository.findAll();
    }

    @PostMapping
    private ResponseEntity<Order> addOrder(@RequestBody Order order) {
        order.setOrderDate(java.time.LocalDateTime.now());
        order.setCompleted(false);
        return new ResponseEntity<>(this.orderRepository.save(order), HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    private ResponseEntity<Order> getOrderById(@PathVariable int id) {
        Order order = this.orderRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return ResponseEntity.ok(order);
    }
}
