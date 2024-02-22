package com.example.offers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OfferMockUpService implements OfferRepository {

    private  static List<Offer> offers = new ArrayList<>();
    private static  int offerCount = 7;

    static{
        offers.add(new Offer(1 ,"offer 1", new Date(11-12-2019), "offer 1" , "NEW" , 8, 88  ));
        offers.add(new Offer(2 ,"offer 2", new Date(11-1-2020), "offer 2" , "NEW" , 8, 88  ));
        offers.add(new Offer(3 ,"offer 3", new Date(21-12-2019), "offer 3" , "NEW" , 8, 88  ));
        offers.add(new Offer(4 ,"offer 4", new Date(11-2-2020), "offer 4" , "NEW" , 8, 88  ));
        offers.add(new Offer(5 ,"offer 5", new Date(10-11-2019), "offer 5" , "NEW" , 8, 88  ));
        offers.add(new Offer(6 ,"offer 6", new Date(11-10-2019), "offer 6" , "NEW" , 8, 88  ));
        offers.add(new Offer(7 ,"offer 7", new Date(11-9-2019), "offer 7" , "NEW" , 8, 88  ));
    }


    @Override
    public List<Offer> findAll() {
        return offers;
    }

    @Override
    public Offer findById(int id) {
        for (Offer offer:offers){
            if (offer.getId()==id){
                return offer;
            }
        }
        return null;
    }

    @Override
    public Offer save(Offer offer) {
        if (offer.getId()== 0){
            offer.setId(++offerCount);
        }
        offers.add(offer);
        return offer;
    }

    @Override
    public boolean deleteById(int id) {
        return false;
    }
}
