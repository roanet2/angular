package com.example.offers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class OfferNotFoundExecption extends RuntimeException {
    public OfferNotFoundExecption(String message) {
        super(message);
    }
}
