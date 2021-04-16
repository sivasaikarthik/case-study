package com.example.demo.respository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.models.ReservationDetails;

public interface UserRepository extends MongoRepository<ReservationDetails,String>{
   
	
}
