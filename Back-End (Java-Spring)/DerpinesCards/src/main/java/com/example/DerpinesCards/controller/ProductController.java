package com.example.DerpinesCards.controller;

import com.example.DerpinesCards.models.Product;
import com.example.DerpinesCards.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    private List<Product> getAllProducts() {
        return this.productRepository.findAll();
    }

    @PostMapping
    private ResponseEntity<Product> addProduct(@RequestBody Product product) {
        return new ResponseEntity<>(this.productRepository.save(product), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Product> deleteProduct(@PathVariable int id) {
        Product product = this.productRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        this.productRepository.delete(product);
        return ResponseEntity.ok(product);
    }

    @PutMapping("/{id}")
    private ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product product){
        Product productToUpdate = this.productRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        productToUpdate.setTitle(product.getTitle());
        productToUpdate.setDescription(product.getDescription());
        productToUpdate.setImg(product.getImg());
        productToUpdate.setWeight(product.getWeight());
        productToUpdate.setColour(product.getColour());
        productToUpdate.setType(product.getType());
        productToUpdate.setPrice(product.getPrice());
        return ResponseEntity.ok(this.productRepository.save(productToUpdate));
    }
}
