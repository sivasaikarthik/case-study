package com.gms.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.gms.models.ERole;
import com.gms.models.Role;


public interface RoleRepository extends MongoRepository<Role, String> {
	  Optional<Role> findByName(ERole name);
	}