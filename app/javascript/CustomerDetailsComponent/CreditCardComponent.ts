import { Component } from "@angular/core";
import { Http      } from "@angular/http";
import   template    from "./CreditCardComponent.html";

var CreditCardComponent = Component({
  selector: "shine-credit-card",
  inputs: [
    "cardholder_id"
  ],
  template: template
}).Class({
  constructor: [
    Http,
    function(http) {
      this.http          = http;
      this.cardholder_id = null;
    }
  ],
  // this function set credit_card_info
  fetchCreditCardInfo: function() {
    var self = this;
    self.http.get("/credit_card_info/" + self.cardholder_id).subscribe(
      function(response) {
        self.credit_card_info = response.json().credit_card_info;
      },
      function(response) {
        window.alert(response);
      }
    );
  },
  ngOnChanges: function(changes) {
    if (changes.cardholder_id) {
      if (changes.cardholder_id.currentValue) {
        this.cardholder_id = changes.cardholder_id.currentValue;
        this.fetchCreditCardInfo();
      } else {
        this.cardholder_id    = null;
        this.credit_card_info = null;
      }
    }
  },
})

export { CreditCardComponent }
