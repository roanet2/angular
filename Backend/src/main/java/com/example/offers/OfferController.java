package com.example.offers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController

public class OfferController {
    @Autowired
    private OfferMockUpService service;
    private OfferJPARepostistory offerJPARepostistory;
    private BidsJPARepostistory bidsJPARepostistory;



    @GetMapping("/offers")
    public  List<Offer> retrieveAllOffers(){
        return  service.findAll();
    }
    @GetMapping("offers/{id}")
    public Offer retrieveOffer(@PathVariable int id){
        Offer offer = service.findById(id);
        if (offer == null)
            throw  new OfferNotFoundExecption("id-" + id);

        return offer;
    }


    @GetMapping("bid/{id}")
    public Bid retrieveBid(@PathVariable int id){
        return  bidsJPARepostistory.findById(id);
    }

    @PostMapping("/offers")
    public ResponseEntity<Object>  createOffer(@RequestBody Offer offer){
        Offer savedOffer = service.save(offer);

        URI location = ServletUriComponentsBuilder.
                fromCurrentRequest().path("/{id}").
                buildAndExpand(savedOffer.getId()).toUri();

        return ResponseEntity.created(location).build();
    }




}
