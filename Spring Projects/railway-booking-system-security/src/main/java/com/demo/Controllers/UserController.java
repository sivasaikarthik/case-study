package com.demo.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.demo.models.User;
import com.demo.models.bookings.Train;
import com.demo.models.traindetails.Details;
import com.demo.repository.RoleRepository;
import com.demo.repository.UserRepository;
import com.demo.request.UserDetail;
import com.demo.response.MessageResponse;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/authuser")
public class UserController {

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;
	

	@Autowired
	private RestTemplate restTemplate;
	@GetMapping("hey")
	public String hi()
	{
		return "hi from kal;'";
	}
	@PreAuthorize("hasRole('USER')")
	@PostMapping("/booking")
	public String reservatio(@RequestBody Train train)
	{
		System.out.println("inside booking");
		restTemplate.postForObject("http://BOOKING-SERVICE/booking/addBooking", train, Train.class);
		return "Booking Sucesful";
	}
	
	
	@GetMapping("/userbookings")
	@PreAuthorize("hasRole('USER')")
	public String show()
	{
		return "data";
	}
}
