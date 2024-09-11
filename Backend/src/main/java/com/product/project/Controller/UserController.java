package com.product.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.product.project.Entity.UserEntity;
import com.product.project.Service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    // POST method to create a new user
    @PostMapping("/addUser")
    public ResponseEntity<String> createUser(@RequestBody UserEntity user) {
        if (userService.isUsernameTaken(user.getUsername())) {
            return ResponseEntity.status(400).body("Username already exists");
        }
        if (userService.isEmailTaken(user.getEmail())) {
            return ResponseEntity.status(400).body("Email already exists");
        }
        userService.createUser(user);
        return ResponseEntity.status(201).body("User created successfully");
    }

    // GET method to retrieve a user by ID
    @GetMapping("/{userId}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable int userId) {
        UserEntity user = userService.getUserById(userId);
        if (user == null) {
            return ResponseEntity.status(404).body(null);
        }
        return ResponseEntity.ok(user);
    }

    // POST method for user login validation
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestParam String username, @RequestParam String password) {
        if (userService.validateUser(username, password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
}