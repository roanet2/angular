package com.example.offers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class OfferJPARepostistory {
    @PersistenceContext
    EntityManager entityManager;

//    @Autowired
//    JdbcTemplate jdbcTemplate;
//
//    public List<Offer> findAll(){
//        return jdbcTemplate.query("select * from Offer",
//                new BeanPropertyRowMapper<Offer>(Offer.class));
//    }
//
//    public   Offer findById(int id){
//        return jdbcTemplate.queryForObject(
//                "select * from Offer where id=?"
//        , new Object[]{id}, new BeanPropertyRowMapper<Offer>(Offer.class));
//    }
//
//    public  int deleteById(int id){
//        return  jdbcTemplate.update("delete from Offer where id=?, xyz=?", new Object[]{id});
//    }
    public  Offer findById(int id){
        return  entityManager.find(Offer.class, id);
    }

    public Offer update(Offer offer){
        return  entityManager.merge(offer);
    }

    public Offer insert(Offer offer){
        return  entityManager.merge(offer);
    }

    public void deleteById(int id){
        Offer offer  = findById(id);
        entityManager.remove(offer);
    }


    public List<Offer> findAll(){
        TypedQuery<Offer> namedQuery = entityManager.createNamedQuery("find_all_offers", Offer.class);
        return namedQuery.getResultList();
    }


}
