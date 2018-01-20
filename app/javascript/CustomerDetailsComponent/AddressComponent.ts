import { Component } from "@angular/core";
import   template    from "./AddressComponent.html";

var AddressComponent = Component({
  selector: "shine-address",
  // allowing set via binding
  inputs: [
    "address",
    "addressType"
  ],
  template: template
}).Class({
  constructor: [
    function() {
      // component properties initial value
      this.address     = null;
      this.addressType = null;
    }
  ]
})

export { AddressComponent }
