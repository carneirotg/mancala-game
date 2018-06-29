package com.code.game.mancala.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="pit")
public class Pit {
	
	@Id
	private String id;
	
	private int seq;
	
	private int ammount;
	
	private boolean main;
	
	public Pit(){
		
	}
	
	public Pit(int seq, int ammount, Player owner, boolean larger){
		this.seq = seq;
		this.ammount = ammount;
		this.main = larger;
	}

	public int getId() {
		return this.seq;
	}
	
	public void setId(int id) {
		this.seq = id;
	}

	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

	public int getAmmount() {
		return ammount;
	}

	public void setAmmount(int ammount) {
		this.ammount = ammount;
	}
	
	public void add(int ammount){
		this.ammount += ammount;
	}

	public boolean isMain() {
		return main;
	}

	public void setMain(boolean main) {
		this.main = main;
	}

	@Override
	public String toString(){
		return String.format("id: [%d], ammout: [%d], main: [%s]", this.seq, this.ammount, this.main);
	}
	
	public boolean equals(Object obj){
		if (obj instanceof Pit){
			return ((Pit) obj).getId() == this.seq;
		}
		return false;
	}

}
