import { EventEmitter,
         Component } from "@angular/core";
import   template    from "./AddressComponent.html";

var AddressComponent = Component({
  selector: "shine-address",
  // allowing set via binding
  inputs: [
    "address",
    "addressType"
  ],
  outputs: [
    "addressChanged"
  ],
  template: template
}).Class({
  constructor: [
    function() {
      // component properties initial value
      this.address        = null;
      this.addressType    = null;
      this.addressChanged = new EventEmitter();
    }
  ],
  save: function(update) {
    this.addressChanged.emit(update);
  }
});

export { AddressComponent }
