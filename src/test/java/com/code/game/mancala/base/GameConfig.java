package com.code.game.mancala.base;

import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.code.game.mancala.repository.PitRepository;
import com.code.game.mancala.repository.PlayerRepository;
import com.code.game.mancala.service.GameService;
import com.code.game.mancala.service.GameServiceImpl;

@Configuration
public class GameConfig {

	@Bean
	public GameService gameService(){
		GameService gameService = new GameServiceImpl();
		return gameService;
	}
	
	@Bean
  	public PitRepository pitRepository(){
  		return Mockito.mock(PitRepository.class);
  	}
	
	@Bean
  	public PlayerRepository playerRepository(){
  		return Mockito.mock(PlayerRepository.class);
  	}
	
}
