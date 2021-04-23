package com.demo.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.User;
import com.demo.repository.RoleRepository;
import com.demo.repository.UserRepository;
import com.demo.request.UserDetail;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/authuser")
public class UserController {

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;
	
	@PreAuthorize("hasRole('USER')")
	@GetMapping("/userDetails/{personID}")
	public UserDetail userdetails(@PathVariable String personId)
	{
		User user=userRepository.findbyusername(personId);
		return new UserDetail(user.getId(),user.getUsername(),user.getEmail(),user.getPhoneNumber());
	}
	
	
}
