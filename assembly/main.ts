import { context } from "near-sdk-core";
import { PostedMessage, messages, senders } from './model';

// --- contract code goes below

/**
 * Adds a new message under the name of the sender's account id.\
 * NOTE: This is a change method. Which means it will modify the state.\
 * But right now we don't distinguish them with annotations yet.
 */
export function addMessage(text: string): void {
  // Creating a new message and populating fields with our data
  const message = new PostedMessage(text);
  
  const sender = context.sender;
  assert(
    !senders.has(sender),
    "Sorry, you only sign the guest book once"
  );

  senders.add(sender);
  messages.push(message);
}

/**
 * Returns an array of all messages.\
 * NOTE: This is a view method. Which means it should NOT modify the state.
 */
export function getMessages(): PostedMessage[] {
  const result = new Array<PostedMessage>(messages.length);
  for(let i = 0; i < messages.length; i++) {
    result[i] = messages[i];
  }
  return result;
}
