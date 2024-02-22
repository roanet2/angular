package com.example.offers;

import java.util.List;

public interface OfferRepository {
    List<Offer> findAll();
    Offer findById(int id);
    Offer save(Offer offer);
    boolean deleteById(int id);
}
