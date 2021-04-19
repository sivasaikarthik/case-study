package com.example.demo.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reservations")
public class ReservationDetails {
	@Id
	private long pnr;
	private Train train;
	private List<String> seatNo;
	private Boolean booked;

	public ReservationDetails() {
		super();
	}

	public ReservationDetails(long pnr, Train train, List<String> seatNo, Boolean booked) {
		super();
		this.pnr = pnr;
		this.train = train;
		this.seatNo = seatNo;
		this.booked = booked;
	}

	public long getPnr() {
		return pnr;
	}

	public void setPnr(long pnr) {
		this.pnr = pnr;
	}

	public Train getTrain() {
		return train;
	}

	public void setTrain(Train train) {
		this.train = train;
	}

	public List<String> getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(List<String> seatNo) {
		this.seatNo = seatNo;
	}

	public Boolean getBooked() {
		return booked;
	}

	public void setBooked(Boolean booked) {
		this.booked = booked;
	}

	@Override
	public String toString() {
		return "ReservationDetails [pnr=" + pnr + ", train=" + train + ", seatNo=" + seatNo + ", booked=" + booked
				+ "]";
	}

}
