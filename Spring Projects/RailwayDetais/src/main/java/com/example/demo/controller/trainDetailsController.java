package com.example.demo.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.models.Coaches;
import com.example.demo.models.details;
import com.example.demo.models.stopTime;
import com.example.demo.repository.railwayRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class trainDetailsController {
	
	@Autowired
	private railwayRepository repo;
	
	@GetMapping("/hey")
	public String hello()
	{
		return "hi from train service";
	}
	@GetMapping("/allTrains")
	public List<details> allTrains()
	{
		System.out.println(repo.findAll());
		return repo.findAll();
	}
	
	  @GetMapping("/allTrains/{trainNumber}") 
	  public  Optional<details> findByTrainNumber(@PathVariable int trainNumber) { 
		  return repo.findById(trainNumber);
		  }
	  
			
	   @GetMapping("/searchTrains/{day}/{source}/{destination}") 
			  public List<details> searchTrains(@PathVariable("day") int day,@PathVariable("source") String source,@PathVariable("destination") String destination) 
		  {
				  System.out.println("train details sended");
				  if(day==0)
				  {
				  return repo.searchBySundaySourceDestination(true, source,destination);
				  }
				  else if(day==1)
				  {
					  return repo.searchByMondaySourceDestination(true, source, destination);
				  }
				  else if(day==2)
				  {
					  return repo.searchByTuesdaySourceDestination(true, source, destination);
				  }
				  else if(day==3)
				  {
					  return repo.searchByWednesdaySourceDestination(true, source, destination);
				  }
				  else if(day==4)
				  {
					  return repo.searchByThrusdaySourceDestination(true, source, destination);
				  }
				  else if(day==5)
				  {
					  return repo. searchByFridaySourceDestination(true, source, destination);
				  }
				  else
				  {
					  return repo.searchBySaturdaySourceDestination(true, source,destination);
				  }
				  
			
		   }
    
	@GetMapping("/getCoaches/{trainNumber}")
	  public List<Coaches>getCoaches(@PathVariable int trainNumber)
	  {
		details d=repo.findById(trainNumber).
				orElseThrow(
						()->new ResourceNotFoundException("Train not found by id"+trainNumber)
				);
		List<Coaches>coaches= new ArrayList<Coaches>();
		if(d!=null)
		{
			coaches=d.getCoaches();
		}
		return coaches;
	  }
	@GetMapping("/trainExist/{trainNumber}")
	public Boolean trainExist(@PathVariable int trainNumber)
	{
		if(repo.existsById(trainNumber))
		{
			return true;
		}
		return false;
	}
	@PostMapping("/addTrain")
	public String addTrain(@RequestBody details d)
	{
		repo.save(d);
		System.out.println(d);
		return "Train details added";
	}

	
	@PutMapping("/updateTrain")
	public String updateTrain(@RequestBody details d)
	{
		repo.deleteById(d.getTrainNumber());
		repo.save(d);
		return "updated train details of "+d.getTrainName();
	}
	
	@DeleteMapping("/deleteTrain/{id}")
	public String deleteTrain(@PathVariable int id)
	{
		repo.deleteById(id);
		return "Deleted train details of "+id;
	}
	
	
	

}
