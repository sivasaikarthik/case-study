package com.demo.Controllers;

import java.util.List;

import javax.ws.rs.PUT;
import javax.ws.rs.Path;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.demo.models.traindetails.Details;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RailwayReservationController {

	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/all/hey")
	public String allMicroservices() {
		//String hiFromOtherServices = restTemplate.getForObject("http://Booking-service/booking/hey", String.class);
		return "hi from login" + " " ;
	}
	
	
	@PreAuthorize("hasRole('USER')")
	@GetMapping("/authuser/hey")
	public String user() {
		//String hiFromOtherServices = restTemplate.getForObject("http://Booking-service/booking/hey", String.class);
		return "hi from login" + " user" ;
	}


	@GetMapping("/all/searchAllTrains")
	public List<Details> allTrains() {

		ResponseEntity<List<Details>> responseEntity = restTemplate.exchange("https://Train-service/allTrains",
				HttpMethod.GET, null, new ParameterizedTypeReference<List<Details>>() {
				});
		return responseEntity.getBody();
	}

	@GetMapping("/all/{searchByTrainID}")
	public Details trainById(@PathVariable int searchByTrainID) {
		return restTemplate.getForObject("https://Train-service/trainById/" + searchByTrainID, Details.class);
	}

	@GetMapping("/all/{day}/{source}/{destination}")
	public List<Details> searchTrains(@PathVariable("day") int day, @PathVariable("source") String source,
			@PathVariable("destination") String destination) {

		ResponseEntity<List<Details>> responseEntity = restTemplate.exchange(
				"https://Train-service/searchTrains/" + day + "/" + source + "/" + destination, HttpMethod.GET, null,
				new ParameterizedTypeReference<List<Details>>() {
				});
		return responseEntity.getBody();
	}

	@PostMapping("/authuser/addTrain")
	@PreAuthorize("hasRole('ADMIN')")
	public String addTrain(@RequestBody Details details) {
		String response = "";
		// response=restTemplate.postForObject("http://TRAIN-SERVICE/addTrain",details);
		Details s = restTemplate.postForObject("http://TRAIN-SERVICE/addTrain", details, Details.class);
		if (s.getTrainNumber() == details.getTrainNumber()) {
			response = "Train added";
		}
		return response;
	}

	@PutMapping("/authuser/updateTrain")
	@PreAuthorize("hasRole('ADMIN')")
	public String updateTrain(@RequestBody Details detail) {
		restTemplate.put("http://TRAIN-SERVICE/updateTrain", detail);
		return "updated train details of " + detail.getTrainNumber();
	}

	@DeleteMapping("/authuser/{trainNumber}")
	@PreAuthorize("hasRole('ADMIN')")
	public String deleteTrain(@PathVariable int trainNumber) {
		restTemplate.delete("http://TRAIN-SERVICE/deleteTrain/" + trainNumber);
		return "Deleted train details of " + trainNumber;
	}

}
