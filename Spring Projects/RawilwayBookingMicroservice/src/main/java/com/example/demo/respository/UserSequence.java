package com.example.demo.respository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.models.Sequence;

public interface UserSequence extends MongoRepository<Sequence, String> {

}
