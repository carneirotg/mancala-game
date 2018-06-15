package com.code.game.mancala.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.code.game.mancala.entities.Pit;

@Repository
public interface PitRepository extends MongoRepository<Pit, String>{

}
