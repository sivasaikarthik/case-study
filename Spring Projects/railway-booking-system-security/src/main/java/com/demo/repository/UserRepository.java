package com.demo.repository;



import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.demo.models.User;


public interface UserRepository extends MongoRepository<User, String> {
	  //User findByUsername(String username);
	  Optional<User> findByUsername(String username);
	  Boolean existsByUsername(String username);

	  Boolean existsByEmail(String email);
	  
	  
	  @Query(value = "{'personId':?0}")
	  User findbyusername(String username);
	  
	  
	  
	 
	}