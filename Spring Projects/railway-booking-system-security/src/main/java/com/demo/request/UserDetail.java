package com.demo.request;

import org.springframework.data.annotation.Id;

public class UserDetail {
	
	
	 @Id
	  private String id;

	  
	
	  private String username;

	 
	  private String email;
	  
	  
	  private String phoneNumber;


	public UserDetail(String id, String username, String email, String phoneNumber) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	@Override
	public String toString() {
		return "UserDetail [id=" + id + ", username=" + username + ", email=" + email + ", phoneNumber=" + phoneNumber
				+ "]";
	}
	  
	  

}
