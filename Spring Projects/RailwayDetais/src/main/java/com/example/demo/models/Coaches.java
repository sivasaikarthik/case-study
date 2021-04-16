package com.example.demo.models;

public class Coaches {
	
	
	private String coacheType;
	private int noOfCoaches;
	private int noOfSeats;
	public String getCoacheType() {
		return coacheType;
	}
	public void setCoacheType(String coacheType) {
		this.coacheType = coacheType;
	}
	public int getNoOfCoaches() {
		return noOfCoaches;
	}
	public void setNoOfCoaches(int noOfCoaches) {
		this.noOfCoaches = noOfCoaches;
	}
	public int getNoOfSeats() {
		return noOfSeats;
	}
	public void setNoOfSeats(int noOfSeats) {
		this.noOfSeats = noOfSeats;
	}
	public Coaches(String coacheType, int noOfCoaches, int noOfSeats) {
		super();
		this.coacheType = coacheType;
		this.noOfCoaches = noOfCoaches;
		this.noOfSeats = noOfSeats;
	}
	public Coaches() {
		super();
	}
	@Override
	public String toString() {
		return "Coaches [coacheType=" + coacheType + ", noOfCoaches=" + noOfCoaches + ", noOfSeats=" + noOfSeats + "]";
	}
	
	

}
