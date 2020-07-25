package com.example.web;

import com.example.services.PersonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@Slf4j

public class controladorInicio {

    @Autowired //injectar tipo personadao se tienen todos los metodos
    private PersonService personService;




    @GetMapping("/")
    public String inicio(Model model) {


        var people = personService.listPeople();




        log.info("Ejecutando el controlador Spring MVC");
        model.addAttribute("people", people);

        return "index";
    }
}
