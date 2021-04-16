package com.example.demo.models;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection = "Reservation-Details")
public class ReservationDetails {
	@Id
	private String pnr;
	private int trainNumber;
	private Date date;
	private String personId;
	private List<AddPassengerDetails>passengers;
	private Boolean booked;
	private String source;
	private String destination;
	private String sourceTime;
	private String destinationTime;
	private List<String>seatNo;
	private int cost;
	
}
