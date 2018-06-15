package com.code.game.mancala.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.code.game.mancala.entities.GameStatus;
import com.code.game.mancala.entities.Pit;
import com.code.game.mancala.repository.PitRepository;
import com.code.game.mancala.repository.PlayerRepository;


public class GameServiceImpl implements GameService{
	
	private static final Logger logger = LogManager.getLogger(GameServiceImpl.class);
	
	@Autowired
	private PitRepository pitRepository;
	
	@Autowired
	private PlayerRepository playerRepository;

	@Override
	public GameStatus sortPieces(Pit pit) {
		Pit result = pitRepository.findById(pit.getId()).get();
		
		GameStatus status = new GameStatus();
		
		return status;
	}

	@Override
	public void createGame() {

		//create player1
		//save
		//create player2
		//save
		//create pitList
	}

}
