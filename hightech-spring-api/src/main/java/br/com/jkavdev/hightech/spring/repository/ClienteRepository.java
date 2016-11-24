package br.com.jkavdev.hightech.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.jkavdev.hightech.spring.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
