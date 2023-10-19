package com.example.DerpinesCards.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "image")
    private String img;
    @Column(name = "weight")
    private int weight;
    @Column(name = "colour")
    private String colour;
    @Column(name = "type")
    private String type;
    @Column(name = "price")
    private double price;

    @JsonIgnore
    @ManyToMany(mappedBy = "ordersProducts")
    private List<Order> productsOrders;

    public Product(String title, String description, String img, int weight, String colour, String type, double price, List<Order> productsOrders) {
        this.title = title;
        this.description = description;
        this.img = img;
        this.weight = weight;
        this.colour = colour;
        this.type = type;
        this.price = price;
        this.productsOrders = productsOrders;
    }

    public List<Order> getProductsOrders() {
        return productsOrders;
    }

    public void setProductsOrders(List<Order> productsOrders) {
        this.productsOrders = productsOrders;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
