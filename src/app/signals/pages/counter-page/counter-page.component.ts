import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',

  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss',

})
export class CounterPageComponent {

  public counter = signal<number>(0)

  public squareCounter = computed(() => this.counter() * this.counter())


  increase() {
    this.counter.update(current => current + 1)
  }

  decrease() {
    this.counter.update(current => current - 1)
  }

  reset(){
    this.counter.set(0)
  }
}
