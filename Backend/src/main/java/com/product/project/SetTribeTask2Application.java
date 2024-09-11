package com.product.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SetTribeTask2Application {

	public static void main(String[] args) {
		SpringApplication.run(SetTribeTask2Application.class, args);
		System.err.println("\033[42m<===================== Server Is ON =================>\033[0m"); // Green Background
	}

}
