package com.example.offers.Users;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Adress")
public class Adress {

    @Id
    @GeneratedValue
    private Integer id;
    private String adress;
    private  String postcode;

    public Adress() {

    }

    public Integer getId() {
        return id;
    }
}
