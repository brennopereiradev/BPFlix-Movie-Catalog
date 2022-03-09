package com.bpflix.bpflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bpflix.bpflix.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
}
