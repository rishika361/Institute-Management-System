package com.product.project.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Feedback")
public class FeedbackEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int feedbackId;
    
    private String name;
    private String message;
    private String phoneNumber;
    private String city;
	
    
    // getter setter
    
    public FeedbackEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


	public FeedbackEntity(int feedbackId, String name, String message, String phoneNumber, String city) {
		super();
		this.feedbackId = feedbackId;
		this.name = name;
		this.message = message;
		this.phoneNumber = phoneNumber;
		this.city = city;
	}


	public int getFeedbackId() {
		return feedbackId;
	}


	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
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


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	@Override
	public String toString() {
		return "FeedbackEntity [feedbackId=" + feedbackId + ", name=" + name + ", message=" + message + ", phoneNumber="
				+ phoneNumber + ", city=" + city + "]";
	}
    
    
}
