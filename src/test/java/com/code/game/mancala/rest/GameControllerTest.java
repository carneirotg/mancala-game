package com.code.game.mancala.rest;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.context.support.StaticApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import com.code.game.mancala.base.GameConfig;
import com.code.game.mancala.entities.GameStatus;
import com.code.game.mancala.entities.Pit;
import com.code.game.mancala.entities.Player;
import com.code.game.mancala.repository.PitRepository;
import com.code.game.mancala.service.GameService;
import com.code.game.mancala.service.GameServiceImpl;
import com.code.game.mancala.util.TestUtil;

@RunWith(SpringJUnit4ClassRunner.class)
@AutoConfigureMockMvc
@ContextConfiguration(loader=AnnotationConfigContextLoader.class, classes = {GameConfig.class, GameController.class})
public class GameControllerTest {
	
	private MockMvc mockMvc;
	
	@InjectMocks
	@Autowired
	private GameController gameController;
	
	@Autowired 
	private GameService gameService;
	
	@Autowired
	private PitRepository pitRepository;
	
	
	@Before
	public void setUp(){
		final StaticApplicationContext applicationContext = new StaticApplicationContext();	     
		 
		 final WebMvcConfigurationSupport webMvcConfigurationSupport = new WebMvcConfigurationSupport();
	     webMvcConfigurationSupport.setApplicationContext(applicationContext);
		 
		 mockMvc = MockMvcBuilders.standaloneSetup(gameController)
				 .setHandlerExceptionResolvers(webMvcConfigurationSupport.handlerExceptionResolver())
				 .build();
		 
	}
	
	@Test
	public void post_createGame_withSuccess() throws Exception{
		
		this.mockMvc.perform(post("/game")
				.contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(MockMvcResultMatchers.status().isCreated());
	}
	
	@Test
	public void put_sortPiecesAndDontFinishTheGame_WithSucess() throws Exception{
		
		Player player = new Player();
		player.setId("1");
		
		GameStatus status = new GameStatus();
		status.setFinished(true);
		status.setWinner(player);
		
		Pit pit = new Pit();
		pit.setId("1");
		pit.setOwner(player);
		pit.setAmmount(6);
		
		when(pitRepository.findById(pit.getId())).thenReturn(Optional.of(pit));
		
		this.mockMvc.perform(put("/game")
				.contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(TestUtil.convertObjectToJsonBytes(pit)))
				.andExpect(MockMvcResultMatchers.jsonPath("$.finished").value("false"))
				.andExpect(MockMvcResultMatchers.status().isNoContent());
	}
	
	
//	@Test
//	public void put_sortPiecesAndFinishTheGame_WithSucess() throws Exception{
//		
//		String expectedResponse = "{\"finished\": true, \"winner\": \"Player 1\" }";
//		
//		Player player = new Player();
//		player.setId("Player 1");
//		
//		GameStatus status = new GameStatus();
//		status.setFinished(true);
//		status.setWinner(player);
//		
//		Pit pit = new Pit();
//		pit.setId("1");
//		pit.setOwner(player);
//		pit.setAmmount(6);
//		
//		when(pitRepository.findById(pit.getId())).thenReturn(Optional.of(pit));
//		when(gameService.sortPieces(pit)).thenReturn(status);
//		
//		this.mockMvc.perform(put("/game")
//				.contentType(MediaType.APPLICATION_JSON_VALUE)
//				.content(TestUtil.convertObjectToJsonBytes(pit)))
//				.andExpect(MockMvcResultMatchers.jsonPath("$.finished").value("true"))
//				.andExpect(MockMvcResultMatchers.jsonPath("$.winner").value("Player 1"))
//				.andExpect(MockMvcResultMatchers.status().isNoContent());
//	}
}

