package com.example.demo.respository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.models.ReservationDetails;

public interface UserReservationRepository extends MongoRepository<ReservationDetails, Long> {

	/*
	 * it is used to double verify is PNR is cancelled by a valid user or not It
	 * only return when is both are matched
	 */
	@Query(value = "{'_id':?0,'train.personId':?1}")
	ReservationDetails findByIDAndPersonid(long id, String personID);
	
	
	@Query(value = "{'train.personId':?0}")
	List<ReservationDetails> findByUser(String personID);

}
