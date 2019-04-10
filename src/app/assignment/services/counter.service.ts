export class CounterService {

  toActive: number = 0;
  toInactive: number = 0;

  constructor() {
  }

  addToActive(): void {
    this.toActive++
    console.log('active count:   ' + this.toActive);
  }

  addToInactive(): void {
    this.toInactive++;
    console.log('inactive count: ' + this.toInactive);
  }
}
