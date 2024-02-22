export class Offer {

  public title: string;
  public sellDate: Date;
  public description: string;
  public auctionStatus: AuctionStatus;
  public numberOfBids: number;
  public valueHighestBid: number;

  constructor(title: string, sellDate: Date, description: string, auctionStatus: AuctionStatus,
              numberOfBids: number, valueHighestBid: number) {
    this.title = title;
    this.sellDate = sellDate;
    this.description = description;
    this.auctionStatus = auctionStatus;
    this.numberOfBids = numberOfBids;
    this.valueHighestBid = valueHighestBid;
  }

}

export enum AuctionStatus {
  NEW,
  FOR_SALE,
  SOLD,
  PAID,
  DELIVERED,
  CLOSED,
  EXPIRED,
  WITHDRAWN
}
