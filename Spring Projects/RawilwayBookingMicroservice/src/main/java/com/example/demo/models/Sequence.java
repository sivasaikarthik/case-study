package com.example.demo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sequences")
public class Sequence {
	
	  @Id
	    private String id;
	    private long seq;
		public Sequence() {
			super();
		}
		public Sequence(String id, long seq) {
			super();
			this.id = id;
			this.seq = seq;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public long getSeq() {
			return seq;
		}
		public void setSeq(int seq) {
			this.seq = seq;
		}
		@Override
		public String toString() {
			return "Sequence [id=" + id + ", seq=" + seq + "]";
		}
	    


}
