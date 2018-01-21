import { EventEmitter,
         Component } from "@angular/core";
import   template    from "./CustomerInfoComponent.html";

var CustomerInfoComponent = Component({
  selector: "shine-customer-info",
  // CustomerInfoComponent have its own properties set by other components
  inputs: [
    "customer"
  ],
  outputs: [
    "customerInfoChanged"
  ],
  template: template
}).Class({
  constructor: [
    function() {
      this.customer            = null;
      this.customerInfoChanged = new EventEmitter();
    }
  ],
  save: function(update) {
    this.customerInfoChanged.emit(update);
  }
});

export { CustomerInfoComponent }
