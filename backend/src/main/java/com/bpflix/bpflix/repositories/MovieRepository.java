package com.bpflix.bpflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bpflix.bpflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	
	
}
