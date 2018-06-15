package com.code.game.mancala.rest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.code.game.mancala.entities.GameStatus;
import com.code.game.mancala.entities.Pit;
import com.code.game.mancala.service.GameService;

@RestController
@RequestMapping("/game")
public class GameController {
	
	@Autowired
	private GameService gameService;

	private static final Logger logger = LogManager.getLogger(GameController.class);
	
	@ResponseStatus(HttpStatus.CREATED)
	@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public void createGame(){
		logger.info("POST - CREATE");
		gameService.createGame();
	}
	
	
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.PUT)
	public ResponseEntity<GameStatus> sortPieces(@RequestBody Pit pit) throws InvalidRequestException{
		
		GameStatus status = gameService.sortPieces(pit);
		
		return new ResponseEntity<GameStatus>(status, HttpStatus.NO_CONTENT);
		
	}
	
}
