package com.example.offers;


import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
@Transactional
public class BidsJPARepostistory {
    @PersistenceContext
    EntityManager entityManager;

    public  Bid findById(int id){
        return  entityManager.find(Bid.class, id);
    }
}
