package com.example.dao;


import com.example.test.Person;
import org.springframework.data.repository.CrudRepository;

public interface PersonDao extends CrudRepository<Person, Long> {

}
