package com.example.offers.Users;

import com.example.offers.Users.Adress;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="person")
public class User {

    @Id
    @GeneratedValue
    private  Integer id;
    private  String name;
    private int age;

    @OneToMany(fetch = FetchType.EAGER)
    private List<Adress> adresses;


    public User(String name, int age) {
        this.name = name;
        this.age = age;

    }

    public User(){

    }

    public List<Adress> getAdresses() {
        return adresses;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
