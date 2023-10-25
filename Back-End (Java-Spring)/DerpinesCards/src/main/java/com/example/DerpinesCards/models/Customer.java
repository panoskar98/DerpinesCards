package com.example.DerpinesCards.models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@NoArgsConstructor
@Entity
@Table(name = "Customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerId;
    @Column(name = "name")
    private String name;
    @Column(name = "surname")
    private String surname;
    @Column(name = "email")
    private String email;
    @Column(name = "Address")
    private String address;
    @Column(name = "phone_number")
    private String phoneNumber;
    @Column(name = "comments")
    private String comments;

    @OneToMany(mappedBy = "customer")
    private Set<Order> customerOrders;


    public Customer(String name, String surname, String email, String address, String phoneNumber, String comments, Set<Order> customerOrders) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.comments = comments;
        this.customerOrders = customerOrders;
    }

    public Set<Order> getCustomerOrders() {
        return customerOrders;
    }

    public void setCustomerOrders(Set<Order> customerOrders) {
        this.customerOrders = customerOrders;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
