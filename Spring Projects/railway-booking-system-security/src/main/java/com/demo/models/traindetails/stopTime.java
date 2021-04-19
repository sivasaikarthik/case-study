package com.demo.models.traindetails;


import java.util.*;



public class stopTime {
	private String stop;
	Date time;
	float cost;
	
	public float getCost() {
		return cost;
	}
	public void setCost(float cost) {
		this.cost = cost;
	}
	public String getStop() {
		return stop;
	}
	public void setStop(String stop) {
		this.stop = stop;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public stopTime(String stop, Date time,float cost) {
		super();
		this.stop = stop;
		this.time = time;
		this.cost=cost;
	}
	public stopTime() {
		super();
	}
	@Override
	public String toString() {
		return "stopTime [stop=" + stop + ", time=" + time + ", cost=" + cost + "]";
	}
	

}
