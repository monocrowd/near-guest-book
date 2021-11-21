import { context, u128, PersistentSet, PersistentVector } from "near-sdk-as";

/** 
 * Exporting a new class PostedMessage so it can be used outside of this file.
 */
@nearBindgen
export class PostedMessage {
  premium: boolean;
  sender: string;
  time: string;
  constructor(public text: string) {
    this.premium = context.attachedDeposit >= u128.from('10000000000000000000000');
    this.sender = context.sender;
    this.time = new Date(context.blockTimestamp/1000000).toUTCString();
  }
}

export const messages = new PersistentVector<PostedMessage>("m");
export const senders = new PersistentSet<string>("s");
