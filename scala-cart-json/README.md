# Introduction

Welcome to your Github coding test!

We know you've already spent plenty of your personal time during
interviews. Worry not; this is the last step of our process and it is
designed to be relatively quick. We appreciate both your time and patience!

We've hand-crafted a coding challenge in Scala and in our problem domain, for your intellect to
chew on. Please, take the time to read through this entire readme.

Good luck!

## Problem

The JSON below is a basic representation of a Cart in an eCommerce
platform. The output is from an API endpoint which the front-end UI
will consume for a client side application. The Cart data model is
fundamental to platform success so it must be robust and correct.

Your primary objectives:

1. Create Scala-appropriate data constructs to model the basic behavior of the Cart.
2. Represent associations.
3. Implement JSON (de-)serialization.
4. Consider client-side implications.

Things you don't need:

1. Persistence.
2. HTTP server.
3. Full implementation of business logic.

```json
{
  "id": 1,
  "accountId": null,
  "lineItems": [
    {
      "id": 1,
      "skuId": 2,
      "quantity": 3,
      "price": 232.56,
    }
  ],
  "paymentInformation": [
    {
      "id": 1,
      "type": "creditCard",
      "address": {
        "address1": "1375 Burlingame Ave.",
        "address2": null,
        "city": "Burlingame",
        "state": "California",
        "zipcode": "94010"
      },
      "token": "wdweadowei3209423",
      "cvv": "123"
    }
  ],
  "taxes": [],
  "adjustments": [
    {
      "id": 1,
      "reason": "Shipping",
      "amount": 10.00,
    },
    {
      "id": 2,
      "reason": "Free shipping promotion",
      "amount": -10.00,
    }
  ],
  "totals": {
    "subTotal": 60,
    "taxes": 0,
    "adjustments": 0,
    "total": 60
  }
}
```

Please commit your work to branches in this repo and send us Pull Requests early. You can mark them as 'wip' until they are 'ready for review.'
We will follow along as you add more commits, commenting and collaborating with you. You have as much or as little time as you want. If you are not sure how to best do this you can open an issue on the repository to discuss the design and test strategy.

## What we are looking for

* Thoughtfulness.
* Simplicity and speed.
* How do you communicate and incorporate feedback.

## Some guidelines to help you get started

As you will notice, this is not a simple algorithms or computer science test.  We are trying to get an idea for how you think and how you communicate as a teammate.  
  
Some things you might want to consider doing to help us along:

* Open pull-requests early.  
* Document your thinking (either in a PR or an Issue)
  * Why did you choose the frameworks and libraries you did?
  * What functionality did you choose to focus on?  To omit?  Why?
  * What were your design/archetecture considerations?
* Open issues with any questions you have.
  * What isn't clear to you?
  * Which assumptions are you making because of lacking information?
  * Don't feel obligated to wait for answers.  Feel free to make assumptions and proceed.


## Time Limitations

There are no strict time limitations on this code challenge.  We generally asks that people submit for final review within 5 days from starting.  This helps us ensure that the challenge doesn't get stale or lost in among our various priorities. 

**When you feel as though your work is complete, please let us know via a final pull-request or opening an issue.**
