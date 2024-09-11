package com.product.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product.project.Entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    
	 // Check if a username exists
    boolean existsByUsername(String username);

    // Check if an email exists
    boolean existsByEmail(String email);

    // Optional: You may also want to add a method for checking if the password is correct, 
    // though this is not recommended for security reasons. It's better to validate the 
    // password during login.
    // boolean existsByPassword(String password);

    // Find a user by username (for login validation)
    UserEntity findByUsername(String username);
}
