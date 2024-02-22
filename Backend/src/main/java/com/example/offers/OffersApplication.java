package com.example.offers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class OffersApplication implements CommandLineRunner {

    private Logger logger  = LoggerFactory.getLogger(this.getClass());
    @Autowired
    OfferJPARepostistory jpa;

    public static void main(String[] args) {
        SpringApplication.run(OffersApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info("Offer id 1 -> {}", jpa.findById(1));
        logger.info("Insert Offer id 4 -> {}", jpa.insert(new Offer(4, "offer4" , new Date(12/11/2019), "hello", "new", 4 ,5)));
        logger.info("Update Offer id 3 -> {}", jpa.insert(new Offer(3, "offer1" , new Date(12/11/2019), "hello", "new", 4 ,5)));
        jpa.deleteById(2);

//        logger.info("All offers -> {}", jpa.findAll());
//        logger.info("Offer id 1 -> {}", jpa.findById(1));
//        logger.info("Deleting 2 -> No of Rows Deleted - {}", jpa.deleteById(2));
    }

}
