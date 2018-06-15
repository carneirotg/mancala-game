package com.code.game.mancala.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GameServiceConfig {

	@Bean
	public GameService gameService(){
		GameService gameService = new GameServiceImpl();
		return gameService;
	}
}
