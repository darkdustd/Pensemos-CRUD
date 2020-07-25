package com.example.test.web;

import com.example.test.Person;
import com.example.test.services.PersonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


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

    @GetMapping("/add")
    public String addPerson(Person person) {
        return "modify";
    }

    @PostMapping("/save")
    public String savePerson(Person person) {
        personService.savePerson(person);
        return "redirect:/";
    }

    @GetMapping("/edit/{idPerson}")
    public String editPerson(Person person, Model model) {
        person = personService.findPerson(person);
        model.addAttribute("person", person);
        return "modify";
    }

    @GetMapping("/delete")
    public String deletePerson(Person person){
        personService.deletePerson(person);
        return  "redirect:/";
    }


}
