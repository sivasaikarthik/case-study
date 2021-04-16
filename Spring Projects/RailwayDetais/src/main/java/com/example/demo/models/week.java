package com.example.demo.models;

public class week {
	
	private boolean sunday,monday,tuesday,wednesday,thrusday,friday,saturday;

	public boolean isSunday() {
		return sunday;
	}

	public void setSunday(boolean sunday) {
		this.sunday = sunday;
	}

	public boolean isMonday() {
		return monday;
	}

	public void setMonday(boolean monday) {
		this.monday = monday;
	}

	public boolean isTuesday() {
		return tuesday;
	}

	public void setTuesday(boolean tuesday) {
		this.tuesday = tuesday;
	}

	public boolean isWednesday() {
		return wednesday;
	}

	public void setWednesday(boolean wednesday) {
		this.wednesday = wednesday;
	}

	public boolean isThrusday() {
		return thrusday;
	}

	public void setThrusday(boolean thrusday) {
		this.thrusday = thrusday;
	}

	public boolean isFriday() {
		return friday;
	}

	public void setFriday(boolean friday) {
		this.friday = friday;
	}

	public boolean isSaturday() {
		return saturday;
	}

	public void setSaturday(boolean saturday) {
		this.saturday = saturday;
	}

	public week(boolean sunday, boolean monday, boolean tuesday, boolean wednesday, boolean thrusday, boolean friday,
			boolean saturday) {
		super();
		this.sunday = sunday;
		this.monday = monday;
		this.tuesday = tuesday;
		this.wednesday = wednesday;
		this.thrusday = thrusday;
		this.friday = friday;
		this.saturday = saturday;
	}

	public week() {
		super();
	}
	
	@Override
	public String toString() {
		return "week [sunday=" + sunday + ", monday=" + monday + ", tuesday=" + tuesday + ", wednesday=" + wednesday
				+ ", thrusday=" + thrusday + ", friday=" + friday + ", saturday=" + saturday + "]";
	}

}
