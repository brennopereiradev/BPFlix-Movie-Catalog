package com.bpflix.bpflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bpflix.bpflix.entities.Score;
import com.bpflix.bpflix.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
}
