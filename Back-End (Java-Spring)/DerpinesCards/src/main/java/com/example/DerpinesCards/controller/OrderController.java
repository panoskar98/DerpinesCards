package com.example.DerpinesCards.controller;

import com.example.DerpinesCards.models.Customer;
import com.example.DerpinesCards.models.Order;
import com.example.DerpinesCards.models.Product;
import com.example.DerpinesCards.repositories.CustomerRepository;
import com.example.DerpinesCards.repositories.OrderRepository;
import com.example.DerpinesCards.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("orders")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    private List<Order> getAllOrders() {
        return this.orderRepository.findAll();
    }

    @PostMapping("/customer/{customerId}")
    private ResponseEntity<Order> addOrder(@RequestBody List<Integer> productIds, @PathVariable int customerId) {
        List<Product> productList = new ArrayList<>();
        for (int id: productIds) {
            Product product = this.productRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Product Not Fount"));
            productList.add(product);
        }
        Customer customer = this.customerRepository.findById(customerId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Customer Not Found"));
        Order newOrder = new Order(java.time.LocalDateTime.now(),false,customer,productList);
        return new ResponseEntity<>(this.orderRepository.save(newOrder), HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    private ResponseEntity<Order> getOrderById(@PathVariable int id) {
        Order order = this.orderRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return ResponseEntity.ok(order);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Order> deleteOrder(@PathVariable int id) {
        Order order = this.orderRepository.findById(id).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND));
        this.orderRepository.delete(order);
        return ResponseEntity.ok(order);
    }
}
