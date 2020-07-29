package com.example.test;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;


@Data
@Entity
@Table(name = "person")
public class Person implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPerson;

   // @NotEmpty
    @Column(name= "first_name")
    private String firstName;
    //@NotEmpty
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
   // @NotEmpty
    @Column(name = "gender")
    private String gender;


}

//data accessed object
//nos va permitir conectarnos a la base de datos
//hacer las queries crud