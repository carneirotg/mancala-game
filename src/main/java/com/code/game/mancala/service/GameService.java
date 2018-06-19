package com.code.game.mancala.service;

import com.code.game.mancala.entities.GameStatus;
import com.code.game.mancala.entities.Pit;
import com.code.game.mancala.entities.Player;

public interface GameService {

	GameStatus sortPieces(String pitId, Player player);

	void createGame();

}
