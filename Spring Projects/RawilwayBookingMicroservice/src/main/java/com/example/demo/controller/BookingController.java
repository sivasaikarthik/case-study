package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.Coaches;
import com.example.demo.models.CoachesDetails;
import com.example.demo.models.ReservationDetails;
import com.example.demo.models.Train;
import com.example.demo.respository.UserCoachesRepository;
import com.example.demo.respository.UserRepository;
import com.example.demo.service.NextSequenceService;



@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private UserRepository repo;
	
   @Autowired
   private UserCoachesRepository userCoachesRepository;
	
	@Autowired
	private NextSequenceService nextSequenceService;
	
	  @Autowired
	  private RestTemplate restTemplate;

	private ReservationDetails reservationDetails=new ReservationDetails();
	  
	
	
	/*
	 This rest controller is used to reservation details to the database
	 
	 */	
		@GetMapping("allBooking")
		public List<ReservationDetails> allBooking()
		{
			return  repo.findAll();
		}
	    @PostMapping("/addBooking")
		public String addBooking(@RequestBody Train reservation) {
		long pnr=nextSequenceService.getNextSequence("PNR");
		reservationDetails.setPnr(pnr);
		reservationDetails.setTrain(reservation);
		reservationDetails.setBooked(true);
		
		String trainNumberAndDate=reservation.getTrainNumber()+""+reservation.getDate();
		
		//Check is there train exist in trains collections
		//if train exists it creates an seats instance in the database
		if(restTemplate.getForObject("https://Train-service/trainExist/"+reservation.getTrainNumber(), Boolean.class))
		{
			//Checking whether the train on that date exist in database or not if not it creates new database
			if(!userCoachesRepository.existsById(trainNumberAndDate))
			{  
				//Getting data from the train detail microservice
				ResponseEntity<List<Coaches>> responseEntity = 
						  restTemplate.exchange(
							"https://Train-service/getCoaches/"+reservation.getTrainNumber(),
						    HttpMethod.GET,
						    null,
						    new ParameterizedTypeReference<List<Coaches>>() {}
						  );
				List<Coaches> allCoaches=responseEntity.getBody();
				
				CoachesDetails coachesDetails = new CoachesDetails();
				coachesDetails.setTrainNumberAndDate(trainNumberAndDate);
				coachesDetails.setAllCoaches(allCoaches);
				userCoachesRepository.save(coachesDetails);
			}
			
		}
		else
		{
			return "Train doesn't exist please check train number";
		}
		List<String>ticketNumbers=tickets(trainNumberAndDate, reservation.getPassengers().size(), reservation.getClassType());
		reservationDetails.setSeatNo(ticketNumbers);
		repo.save(reservationDetails);
		return "Booking completed and your PNR number is this"+pnr;
			
		}

	@GetMapping("/hey")
	public String hello()
	{
		String hi=restTemplate.getForObject("https://RAILWAY-DETAIL-SERVICE/hey", String.class);
		return "hello form booking"+"connected to railway database"+hi;
	}
	
	public List<String> tickets(String id,int noOfTickets,String classType)
	{ 
	  List<String>seats=new ArrayList<String>();
	  CoachesDetails cd=userCoachesRepository.findById(id).
			  orElseThrow(()->new ResourceNotFoundException("Coaches details of this train doesn't exit in the database"));
	  List<Coaches> coaches= cd.getAllCoaches();
	for(Coaches coa:coaches)
	{  
		
		if(coa.getCoacheType().equals(classType))
		{  
			int i=0;
			String seat;
			while(i<noOfTickets)
			{
				int n=coa.getNoOfSeats();
				if(n==0)
				{
					coa.setNoOfSeats(100);
					coa.setNoOfCoaches(coa.getNoOfCoaches()-1);
				}
				seat=classType+coa.getNoOfCoaches()+" "+coa.getNoOfSeats();
				seats.add(seat);
				coa.setNoOfSeats(coa.getNoOfSeats()-1);
				i++;
			}
			
		break;	
		}
	}
	cd.setAllCoaches(coaches);
	userCoachesRepository.save(cd);
	return seats;
	}
	
}
