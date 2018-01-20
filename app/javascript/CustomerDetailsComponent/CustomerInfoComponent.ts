import { Component } from "@angular/core";
import   template    from "./CustomerInfoComponent.html";

var CustomerInfoComponent = Component({
  selector: "shine-customer-info",
  // CustomerInfoComponent have its own properties set by other components
  inputs: [
    "customer"
  ],
  template: template
}).Class({
  constructor: [
    function() {
      this.customer = null;
    }
  ]
})

export { CustomerInfoComponent }
