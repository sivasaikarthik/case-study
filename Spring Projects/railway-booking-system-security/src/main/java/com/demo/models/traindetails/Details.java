package com.demo.models.traindetails;


import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "trains")
public class Details {

	private String trainName;
	@Id
	private int trainNumber;
	List<stopTime> trainStopsAndTimes = new ArrayList<stopTime>();
	Week weekDays;
	List<Coaches> coaches;

	public Details() {
		super();
	}

	public Details(String trainName, int trainNumber, List<stopTime> trainStopsAndTimes, Week weekDays,
			List<Coaches> coaches) {
		super();
		this.trainName = trainName;
		this.trainNumber = trainNumber;
		this.trainStopsAndTimes = trainStopsAndTimes;
		this.weekDays = weekDays;
		this.coaches = coaches;
	}

	public List<Coaches> getCoaches() {
		return coaches;
	}

	public void setCoaches(List<Coaches> coaches) {
		this.coaches = coaches;
	}

	public Week getWeekDays() {
		return weekDays;
	}

	public void setWeekDays(Week weekDays) {
		this.weekDays = weekDays;
	}

	public String getTrainName() {
		return trainName;
	}

	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}

	public int getTrainNumber() {
		return trainNumber;
	}

	public void setTrainNumber(int trainNumber) {
		this.trainNumber = trainNumber;
	}

	public List<stopTime> getTrainStopsAndTimes() {
		return trainStopsAndTimes;
	}

	public void setTrainStopsAndTimes(List<stopTime> trainStopsAndTimes) {
		this.trainStopsAndTimes = trainStopsAndTimes;
	}

	@Override
	public String toString() {
		return "details [trainName=" + trainName + ", trainNumber=" + trainNumber + ", trainStopsAndTimes="
				+ trainStopsAndTimes + ", weekDays=" + weekDays + ", coaches=" + coaches + "]";
	}

}
