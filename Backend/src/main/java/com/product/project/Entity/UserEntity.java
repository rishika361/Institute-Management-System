package com.product.project.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="User")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    private String fullName;
    private String email;
    private String username;
    private String password;
    private String mobileNumber;
    private LocalDateTime createdOn;
	
    // Constructor, Getters, Setters
    public UserEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public UserEntity(int userId, String fullName, String email, String username, String password, String mobileNumber,
			LocalDateTime createdOn) {
		super();
		this.userId = userId;
		this.fullName = fullName;
		this.email = email;
		this.username = username;
		this.password = password;
		this.mobileNumber = mobileNumber;
		this.createdOn = createdOn;
	}



	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	
	public LocalDateTime getCreatedOn() {
		return createdOn;
	}



	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}



	@Override
	public String toString() {
		return "UserEntity [userId=" + userId + ", fullName=" + fullName + ", email=" + email + ", username=" + username
				+ ", password=" + password + ", mobileNumber=" + mobileNumber + ", createdOn=" + createdOn + "]";
	}
    
    
    
}
