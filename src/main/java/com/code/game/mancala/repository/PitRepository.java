package com.code.game.mancala.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.code.game.mancala.entities.Pit;

@Repository
public interface PitRepository extends MongoRepository<Pit, String>{

	@Query("{ 'seq': ?0}")
	Pit findById(int id);
	
}
