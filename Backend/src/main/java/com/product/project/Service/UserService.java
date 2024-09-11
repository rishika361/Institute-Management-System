package com.product.project.Service;


import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.project.Entity.UserEntity;
import com.product.project.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Method to save a new user
    public UserEntity createUser(UserEntity user) {
        user.setCreatedOn(LocalDateTime.now()); // Set the current time as LocalDateTime
        return userRepository.save(user);
    }

    // Method to get a user by ID
    public UserEntity getUserById(int userId) {
        return userRepository.findById(userId).orElse(null);
    }

    // Method to validate username and password
    public boolean validateUser(String username, String password) {
        UserEntity user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }

    // Method to check if a username already exists
    public boolean isUsernameTaken(String username) {
        return userRepository.existsByUsername(username);
    }

    // Method to check if an email already exists
    public boolean isEmailTaken(String email) {
        return userRepository.existsByEmail(email);
    }
}