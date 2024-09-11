package com.product.project.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Addmission")
public class AdmissionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int admissionId;

    private String fullName;
    private String email;
    private String mobileNumber;
    private String studentClass;
    private String courseName;
    private String address;
    private String paymentMethod;
    private String admissionDate;
	

    // Getters and Setters.
    public AdmissionEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


	public AdmissionEntity(int admissionId, String fullName, String email, String mobileNumber, String studentClass,
			String courseName, String address, String paymentMethod, String admissionDate) {
		super();
		this.admissionId = admissionId;
		this.fullName = fullName;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.studentClass = studentClass;
		this.courseName = courseName;
		this.address = address;
		this.paymentMethod = paymentMethod;
		this.admissionDate = admissionDate;
	}


	public int getAdmissionId() {
		return admissionId;
	}


	public void setAdmissionId(int admissionId) {
		this.admissionId = admissionId;
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


	public String getMobileNumber() {
		return mobileNumber;
	}


	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}


	public String getStudentClass() {
		return studentClass;
	}


	public void setStudentClass(String studentClass) {
		this.studentClass = studentClass;
	}


	public String getCourseName() {
		return courseName;
	}


	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getPaymentMethod() {
		return paymentMethod;
	}


	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}


	public String getAdmissionDate() {
		return admissionDate;
	}


	public void setAdmissionDate(String admissionDate) {
		this.admissionDate = admissionDate;
	}


	@Override
	public String toString() {
		return "AdmissionEntity [admissionId=" + admissionId + ", fullName=" + fullName + ", email=" + email
				+ ", mobileNumber=" + mobileNumber + ", studentClass=" + studentClass + ", courseName=" + courseName
				+ ", address=" + address + ", paymentMethod=" + paymentMethod + ", admissionDate=" + admissionDate
				+ "]";
	}
	
    
    
    
}
