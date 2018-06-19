package com.code.game.mancala.entities;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "player")
public class Player {
	
	@Id
	private String id;
	
	private String name;
	
	@DBRef
	private ArrayList<Pit> pits;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public ArrayList<Pit> getPits() {
		return pits;
	}

	public void setPits(ArrayList<Pit> pits) {
		this.pits = pits;
	}
	
	public Pit getMainPit(){
		return pits.get(pits.size()-1);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString(){
		return String.format("id: [%s] name [%s]", this.id, this.name);
	}
	
	public boolean equals(Player compare){
		return this.id.equals(compare.getId());
	}

	


}
