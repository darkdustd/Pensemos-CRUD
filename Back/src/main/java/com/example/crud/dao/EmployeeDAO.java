package com.example.crud.dao;


import com.example.crud.entity.Employee;

import java.util.List;

public interface EmployeeDAO {

     List<Employee> findAll();

     Employee findById(int theId);
     void saveEmployee(Employee theEmployee);
     void deleteById(int theId);



}
