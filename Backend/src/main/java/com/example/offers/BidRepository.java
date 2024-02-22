package com.example.offers;

import java.util.List;

public interface BidRepository {
    List<Bid> findAll();
    Bid findById(int id);
    Bid save(Bid bid);
    boolean deleteById(int id);
}
