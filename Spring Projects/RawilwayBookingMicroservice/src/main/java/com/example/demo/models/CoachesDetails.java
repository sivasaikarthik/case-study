package com.example.demo.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "coaches")
public class CoachesDetails {
	
	@Id
	private int trainNumber;
	private List<Coaches>allCoaches;
	private List<String>cancelledTicked;

	
	

}
