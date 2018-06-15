package com.code.game.mancala.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="pit")
public class Pit {
	
	@Id
	private String id;
	
	private int ammount;
	
	private Player owner;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getAmmount() {
		return ammount;
	}

	public void setAmmount(int ammount) {
		this.ammount = ammount;
	}

	public Player getOwner() {
		return owner;
	}

	public void setOwner(Player owner) {
		this.owner = owner;
	}
	
	@Override
	public String toString(){
		return String.format("id: [%s], ammout: [%d], owner: [%s]", this.id, this.ammount, this.owner.getId());
	}

}
