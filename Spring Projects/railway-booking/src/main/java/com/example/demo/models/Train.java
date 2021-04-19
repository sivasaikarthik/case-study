package com.example.demo.models;

import java.util.Date;
import java.util.List;

public class Train {
	private int trainNumber;
	private Date date;
	private String personId;
	private List<AddPassengerDetails>passengers;
	private String classType;
	private String source;
	private String destination;
	private String sourceTime;
	private String destinationTime;
	private int cost;
	public Train() {
		super();
	}
	public Train(int trainNumber, Date date, String personId, List<AddPassengerDetails> passengers, String classType,
			String source, String destination, String sourceTime, String destinationTime, int cost) {
		super();
		this.trainNumber = trainNumber;
		this.date = date;
		this.personId = personId;
		this.passengers = passengers;
		this.classType = classType;
		this.source = source;
		this.destination = destination;
		this.sourceTime = sourceTime;
		this.destinationTime = destinationTime;
		this.cost = cost;
	}
	public String getClassType() {
		return classType;
	}
	public void setClassType(String classType) {
		this.classType = classType;
	}
	public int getTrainNumber() {
		return trainNumber;
	}
	public void setTrainNumber(int trainNumber) {
		this.trainNumber = trainNumber;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getPersonId() {
		return personId;
	}
	public void setPersonId(String personId) {
		this.personId = personId;
	}
	public List<AddPassengerDetails> getPassengers() {
		return passengers;
	}
	public void setPassengers(List<AddPassengerDetails> passengers) {
		this.passengers = passengers;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getSourceTime() {
		return sourceTime;
	}
	public void setSourceTime(String sourceTime) {
		this.sourceTime = sourceTime;
	}
	public String getDestinationTime() {
		return destinationTime;
	}
	public void setDestinationTime(String destinationTime) {
		this.destinationTime = destinationTime;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	@Override
	public String toString() {
		return "Train [trainNumber=" + trainNumber + ", date=" + date + ", personId=" + personId + ", passengers="
				+ passengers + ", classType=" + classType + ", source=" + source + ", destination=" + destination
				+ ", sourceTime=" + sourceTime + ", destinationTime=" + destinationTime + ", cost=" + cost + "]";
	}
	
	
}
