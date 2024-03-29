package com.demo.models;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.lang.NonNull;

@Document(collection  = "users")
public class User {
	
	  @Id
	  private String id;

	  private String username;

	 
	  private String email;
	  
	  
	  private String phoneNumber;

	 
	  private String password;

	  @DBRef
	  private Set<Role> roles = new HashSet<>();

	  public User() {
	  }

	  public User(@Size(max = 20) String username, @NotBlank @Size(max = 50) @Email String email,
			String phoneNumber, @NotBlank @Size(max = 120) String password) {
		super();

		this.username = username;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.password = password;
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

	  public String getPassword() {
	    return password;
	  }

	  public void setPassword(String password) {
	    this.password = password;
	  }

	  public Set<Role> getRoles() {
	    return roles;
	  }

	  public void setRoles(Set<Role> roles) {
	    this.roles = roles;
	  }



	public String getPhoneNumber() {
		return phoneNumber;
	}



	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

}
