package com.example.demo.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.models.details;


public interface railwayRepository extends MongoRepository<details,Integer>{
	
	
	@Query(value = "{'weekDays.sunday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<details>searchBySundaySourceDestination(Boolean date,String source,String destination);
	
	@Query(value = "{'weekDays.monday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<details>searchByMondaySourceDestination(Boolean date,String source,String destination);
	
	
	@Query(value = "{'weekDays.tuesday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<details>searchByTuesdaySourceDestination(Boolean date,String source,String destination);
	
	
	@Query(value = "{'weekDays.wednesday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<details>searchByWednesdaySourceDestination(Boolean date,String source,String destination);
	
	@Query(value = "{'weekDays.thrusday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<details>searchByThrusdaySourceDestination(Boolean date,String source,String destination);
	
	
	@Query(value = "{'weekDays.friday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<details>searchByFridaySourceDestination(Boolean date,String source,String destination);
	
	
	@Query(value = "{'weekDays.saturday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<details>searchBySaturdaySourceDestination(Boolean date,String source,String destination);

}
