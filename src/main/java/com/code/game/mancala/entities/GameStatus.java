package com.code.game.mancala.entities;

public class GameStatus {
	
	private boolean finished;
	
	private Player winner;

	public boolean isFinished() {
		return finished;
	}

	public void setFinished(boolean finished) {
		this.finished = finished;
	}

	public Player getWinner() {
		return winner;
	}

	public void setWinner(Player winner) {
		this.winner = winner;
	}
	
	

}
