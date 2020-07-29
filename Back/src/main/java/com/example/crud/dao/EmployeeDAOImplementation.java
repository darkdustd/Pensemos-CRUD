package com.example.crud.dao;


import com.example.crud.entity.Employee;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class EmployeeDAOImplementation implements EmployeeDAO{


    // define field for entitymanager
    private EntityManager entityManager;




    // set up constructor injection
    @Autowired
    public EmployeeDAOImplementation(EntityManager theEntityManager) {
        entityManager = theEntityManager;

    }



    @Override

    public List<Employee> findAll(){
        // get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);


        //create a query
        Query<Employee> theQuery = currentSession.createQuery("from Employee", Employee.class);

        //execute query and get result list
        List<Employee> employees = theQuery.getResultList();

        //return the result
        return employees;
    }

    @Override
    public Employee findById(int theId) {

        //get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);


        //get the employee

        Employee theEmployee = currentSession.get(Employee.class, theId);

        //return the employee
        return theEmployee;
    }

    @Override
    public void saveEmployee(Employee theEmployee) {
            // get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        //save employee
        currentSession.saveOrUpdate(theEmployee);


    }



    @Override
    public void deleteById(int theId) {
            //get the current hibernate session

        Session currentSession = entityManager.unwrap(Session.class);


            //delete object with primary key
        Query theQuery = currentSession.createQuery("delete from Employee where id=:id");
        theQuery.setParameter("id", theId);
        theQuery.executeUpdate();
    }

}
