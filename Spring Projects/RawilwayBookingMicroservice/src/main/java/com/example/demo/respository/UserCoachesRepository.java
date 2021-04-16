package com.example.demo.respository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.models.CoachesDetails;

public interface UserCoachesRepository extends MongoRepository<CoachesDetails,Integer> {
	
}
