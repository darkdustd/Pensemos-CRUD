package com.example.crud.rest;


import com.example.crud.entity.Employee;
import com.example.crud.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmployeeRestController {

    private EmployeeService employeeService;

    @Autowired
    public EmployeeRestController(EmployeeService theEmployeeService){
        employeeService = theEmployeeService;
    }

    //expose "/employees" and return list of employees

    @GetMapping("/employees")
    public List<Employee> findAll(){
        return employeeService.findAll();
    }

    // add mapping for GET /employees/{employeeId}
    @GetMapping("/employees/{Id}")
    public Employee getEmployee(@PathVariable int Id) {
        Employee theEmployee = employeeService.findById(Id);

        if (theEmployee == null)
            throw new RuntimeException("Employee id not found - " + Id);

        return theEmployee;
    }

    //add mapping for POST /employees - add new employee
    //requestbody hadle it as a JSON
    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee theEmployee){
        //also jst in case they pass an id in JSON set id to 0
        // this is to force a save of new item instead of update

        theEmployee.setId(0);
        employeeService.saveEmployee(theEmployee);
        return theEmployee;

    }


    // add mapping for PUT /employees - update existing employee

    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee theEmployee){
        employeeService.saveEmployee(theEmployee);

        return theEmployee;
    }


    // add mapping for DELETE /employee/{Id} - delete employee

    @DeleteMapping("/employees/{Id}")
    public String deleteEmployee (@PathVariable int Id) {
        Employee tempEmployee = employeeService.findById(Id);

        // throw exception if null


        if(tempEmployee == null)
            throw new RuntimeException("Employee id not found - " + Id);

        employeeService.deleteById(Id);
        return "Deleted employee id - " + Id;


    }






}
