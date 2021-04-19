package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.models.Details;




public interface RailwayRepository extends MongoRepository<Details,Integer>{
	
	
	@Query(value = "{'weekDays.sunday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<Details>searchBySundaySourceDestination(Boolean date,String source,String destination);
	
	@Query(value = "{'weekDays.monday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<Details>searchByMondaySourceDestination(Boolean date,String source,String destination);
	
	
	@Query(value = "{'weekDays.tuesday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<Details>searchByTuesdaySourceDestination(Boolean date,String source,String destination);
	
	
	@Query(value = "{'weekDays.wednesday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<Details>searchByWednesdaySourceDestination(Boolean date,String source,String destination);
	
	@Query(value = "{'weekDays.thrusday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<Details>searchByThrusdaySourceDestination(Boolean date,String source,String destination);
	
	
	@Query(value = "{'weekDays.friday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<Details>searchByFridaySourceDestination(Boolean date,String source,String destination);
	
	
	@Query(value = "{'weekDays.saturday':?0,'trainStopsAndTimes.stop':?1,'trainStopsAndTimes.stop':?2}")
	List<Details>searchBySaturdaySourceDestination(Boolean date,String source,String destination);

}
