package com.demo.models.traindetails;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "coaches")
public class CoachesDetails {
	
	@Id
	private String trainNumberAndDate;
	private List<Coaches> allCoaches;
	private List<String>cancelledTicked;
	public CoachesDetails() {
		super();
	}
	public CoachesDetails(String trainNumberAndDate, List<Coaches> allCoaches, List<String> cancelledTicked) {
		super();
		this.trainNumberAndDate = trainNumberAndDate;
		this.allCoaches = allCoaches;
		this.cancelledTicked = cancelledTicked;
	}
	
	public String getTrainNumberAndDate() {
		return trainNumberAndDate;
	}
	public void setTrainNumberAndDate(String trainNumberAndDate) {
		this.trainNumberAndDate = trainNumberAndDate;
	}
	public List<Coaches> getAllCoaches() {
		return allCoaches;
	}
	public void setAllCoaches(List<Coaches> allCoaches) {
		this.allCoaches = allCoaches;
	}
	public List<String> getCancelledTicked() {
		return cancelledTicked;
	}
	public void setCancelledTicked(List<String> cancelledTicked) {
		this.cancelledTicked = cancelledTicked;
	}
	@Override
	public String toString() {
		return "CoachesDetails [trainNumberAndDate=" + trainNumberAndDate + ", allCoaches=" + allCoaches + ", cancelledTicked="
				+ cancelledTicked + "]";
	}
	
	

	
	

}
