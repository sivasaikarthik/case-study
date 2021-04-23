package com.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.User;
import com.demo.repository.RoleRepository;
import com.demo.repository.UserRepository;
import com.fasterxml.jackson.annotation.JsonAutoDetect;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/authuser")
public class AdminController {
	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;
	
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/allUser")
	public List<User> allUser(){
		return userRepository.findAll();
	}
	
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/deleteUser/{id}")
	public String deleteUser(@PathVariable String id)
	{
		userRepository.deleteById(id);
		return "Delete Sucessful";
	}
}
