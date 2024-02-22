package com.example.offers.Users;

import com.example.offers.Users.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;


@Repository
@Transactional

public class PersonJPARepostistory {
    @PersistenceContext
    EntityManager entityManager;

    public User findById(int id){
        return  entityManager.find(User.class, id);
    }
}
