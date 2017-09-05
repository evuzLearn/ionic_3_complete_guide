import { Component } from '@angular/core';

@Component({
  selector: 'app-touch-event',
  template: `
    <div class="gestures"
      (click)="onElementClicked()">
      Click me!
    </div>

    <div class="gestures"
      (tap)="onElementTapped()">
      Tap me!
    </div>

    <div class="gestures"
      (press)="onElementPressed()"
      (tap)="onElementTapped()">
      Long press me!
    </div>
  `
})
export class TouchEventComponent {
  onElementClicked() {
    console.log('Element clicked');
  }

  onElementTapped () {
    console.log('Element tapped');
  }

  onElementPressed() {
    console.log('Element pressed');
  }
}
