package com.demo.request;

import java.util.Set;

 
public class SignupRequest {
    
    private String username;
 
    
    private String email;
    private String phoneNumber;
    
    private Set<String> roles;
    
   
    private String password;
  
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
 
    public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }
    
    public Set<String> getRoles() {
      return this.roles;
    }
    
    public void setRole(Set<String> roles) {
      this.roles = roles;
    }

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	@Override
	public String toString() {
		return "SignupRequest [username=" + username + ", email=" + email + ", phoneNumber=" + phoneNumber + ", roles="
				+ roles + ", password=" + password + "]";
	}
	
    
}