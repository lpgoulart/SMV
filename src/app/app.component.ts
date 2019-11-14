import { Component } from '@angular/core';

interface Memoria {
  number: number;
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'smv-angular';

  memorySize: number = 10;
  memoria: Memoria[] = [];
  replaceIndex: number;
  entry: number;
  newPage = { 'number': 0, 'count': 0 };

  ngOnInit() {
    for (let i = 0; i < this.memorySize; i++) {
      this.memoria.push({
        number: -1,
        count: 0
      });
    }
    this.newPage.number=0;
    this.newPage.count =0; 
    this.entry = 0;
    this.replaceIndex = 0;
  }
  
  
  showConsole(): void {
    console.log( this.memoria );
  }

  generateValue(): void {
    
    this.newPage.number = (Math.floor(Math.random() * (10 - 0 + 1)) + 0);
    this.newPage.count = 0;

  }

  checkValue(): boolean {
    let i:number;
    for ( i = 0; i < this.memoria.length; i++) {
      if ( this.memoria[i].number == this.newPage.number ) {
        this.replaceIndex = i;
        return true;
      } 
    }
    
    return false;

  }
    
  randomMemory(): void {
    this.generateValue();

    let index: number = this.newPage.number % this.memorySize;

    // console.log(this.newPage.number);

    if ( this.checkValue() ) {
      // console.log("tem");
      this.memoria[this.replaceIndex].count++;

    }
    else {
      // console.log("nao");
      // console.log("new page number: " + this.newPage.number);

      // console.log("index to replace: " + index);
      this.memoria[index].number = this.newPage.number;
      this.memoria[index].count = 0;

    }
  }

  fifoMemory(): void {
    this.generateValue();
    // console.log("indice "+this.entry);

    if( this.entry == this.memorySize ) {
      this.entry = 0;
      if ( this.checkValue() ) {
        this.memoria[this.replaceIndex].count++;
      }
      else {
        this.memoria[this.entry].number = this.newPage.number;
        this.memoria[this.entry].count = 0;
        this.entry++;
      }
    }
    else {
      if ( this.checkValue() ) {
        this.memoria[this.replaceIndex].count++;
      }
      else {
        this.memoria[this.entry].number = this.newPage.number;
        this.memoria[this.entry].count = 0;
        this.entry++;
      }
    }
    // console.log("numero: "+this.newPage.number + " " + this.memoria[this.replaceIndex].count + " vezes");

  }





  generateRandomMemory(): void {
    for (let index = 0; index < 20; index++) {
      this.randomMemory();      
    }
    this.showConsole();
  }
  generateFIFOMemory(): void {
    for (let index = 0; index < 20; index++) {
      this.fifoMemory();  
      // console.log(index)  
    }
    this.showConsole();
  }
  cleanMemory(): void {
    for (let i = 0; i < this.memorySize; i++) {
      this.memoria[i].number = -1;
      this.memoria[i].count = 0;
    }
    this.entry = 0;
    this.showConsole();
  }

}
