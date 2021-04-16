package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.models.ReservationDetails;
import com.example.demo.respository.UserRepository;

@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private UserRepository repo;
	
	  @Autowired
	  private RestTemplate restTemplate;
	
	/*
	 This rest controller is used to reservation details to the database
	 
	 */
	@PostMapping("/addBooking")
	public String addBooking(@RequestBody ReservationDetails reservation) {
		
		if(repo.existsById(reservation.getPnr()))
		{
			System.out.println("booked already exist from this account");
			return "You cann't book ticket from this account";
		}
		if(reservation.getPassengers().size()<=6)
		{
			repo.save(reservation);
			return "Your booking is success";
		}
		
		else
		{
			return "There are no sufficient tickets to book";
		}
		
	}
	
	@GetMapping("/hey")
	public String hello()
	{
		String hi=restTemplate.getForObject("https://RAILWAY-DETAIL-SERVICE/hey", String.class);
		return "hello form booking"+"  "+hi;
	}
}
