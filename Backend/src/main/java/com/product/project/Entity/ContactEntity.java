package com.product.project.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Contact")
public class ContactEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String email;
    private String message;
    private String phoneNumber;
	

    // Constructors, Getters, and Setters
    public ContactEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


	public ContactEntity(int id, String name, String email, String message, String phoneNumber) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.message = message;
		this.phoneNumber = phoneNumber;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public String getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	@Override
	public String toString() {
		return "ContactEntity [id=" + id + ", name=" + name + ", email=" + email + ", message=" + message
				+ ", phoneNumber=" + phoneNumber + "]";
	}
    
    
    
}
