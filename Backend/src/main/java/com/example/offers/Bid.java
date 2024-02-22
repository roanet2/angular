package com.example.offers;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Bid")
public class Bid {

    @Id
    @GeneratedValue
    private  Integer id;
    private  double value;
    private  Integer Offer_ID;
}
