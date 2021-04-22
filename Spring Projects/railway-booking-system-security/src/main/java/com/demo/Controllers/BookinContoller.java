package com.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.demo.models.traindetails.Coaches;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookinContoller {

	@Autowired
	private RestTemplate restTemplate;
	
	
	/*@GetMapping("/all/seatsLeft/{coachID}")
	public List<Coaches> getCoaches(@PathVariable String coachID)
	{
		
	}*/
}
