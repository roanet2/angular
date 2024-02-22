package com.example.offers;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="Offer")
@NamedQuery(name="find_all_offers", query="select o from Offer o")
public class Offer
{
    @Id
    @GeneratedValue
    private  Integer id;

    private  String title;
    private Date SellDate;
    private String description;
    private  String status;
    private  int numberOfBids;
    private double valueHighestBid;

    public Offer
            (Integer id,
             String title,
             Date sellDate,
             String description,
             String status,
             int numberOfBids,
             double valueHighestBid) {
        this.id = id;
        this.title = title;
        SellDate = sellDate;
        this.description = description;
        this.status = status;
        this.numberOfBids = numberOfBids;
        this.valueHighestBid = valueHighestBid;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getSellDate() {
        return SellDate;
    }

    public void setSellDate(Date sellDate) {
        SellDate = sellDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getNumberOfBids() {
        return numberOfBids;
    }

    public void setNumberOfBids(int numberOfBids) {
        this.numberOfBids = numberOfBids;
    }

    public double getValueHighestBid() {
        return valueHighestBid;
    }

    public void setValueHighestBid(double valueHighestBid) {
        this.valueHighestBid = valueHighestBid;
    }

    @Override
    public String toString() {
        return "\n Offer{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", SellDate=" + SellDate +
                ", description='" + description + '\'' +
                ", status='" + status + '\'' +
                ", numberOfBids=" + numberOfBids +
                ", valueHighestBid=" + valueHighestBid +
                '}';
    }
}
