package com.example.demo.service;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.example.demo.models.Sequence;

public class SeatDecrement {

	 @Autowired 
	 private MongoOperations mongoOperations;

	    public long getSeatDecrement(String id,int number,String classType)
	    {
	    	Query query=new Query(Criteria.where("id").is(id));
	    	Update update=new Update().inc(classType, -(number));
	    	Sequence sequence=mongoOperations.findAndModify(
	    			query, 
	    			update, 
	    			options().returnNew(true).upsert(true),
                    Sequence.class);
	    	 return !Objects.isNull(sequence) ? sequence.getSeq() : 1;
	    }
}
