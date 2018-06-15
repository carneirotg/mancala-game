package com.code.game.mancala.service;

import com.code.game.mancala.entities.GameStatus;
import com.code.game.mancala.entities.Pit;

public interface GameService {

	GameStatus sortPieces(Pit pit);

	void createGame();

}
