import { Component } from '@angular/core';

interface Memoria {
  number: number;
  count: number;
  type: string;
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
  newPage = { 'number': 0, 'count': 0, 'type': "" };

  ngOnInit() {
    for (let i = 0; i < this.memorySize; i++) {
      this.memoria.push({
        number: -1,
        count: 0,
        type: "EMPTY"
      });
    }
    this.newPage.number=0;
    this.newPage.count =0; 
    this.entry = 0;
    this.replaceIndex = 0;
  }
  
  
  showConsole(): void {
    for (let i = 0; i < this.memorySize; i++) {
      if( this.memoria[i].number == -1 )
        this.memoria[i].type = "EMPTY";
    }
    console.log( this.memoria );
  }

  generateValue(): void {
    
    this.newPage.number = (Math.floor(Math.random() * (10 - 0 + 1)) + 0);
    this.newPage.count = 0;
    this.newPage.type = (Math.floor(Math.random() * (1 - 0 + 1)) + 0) ? "R" : "W";

    console.log(this.newPage.number + " " + this.newPage.type);
  }

  checkValue(): boolean {
    let i:number;
    
    for ( i = 0; i < this.memoria.length; i++) {
      if ( this.memoria[i].number === this.newPage.number && this.memoria[i].type === this.newPage.type ) {
        this.replaceIndex = i;
        return true;
      } else if ( this.memoria[i].number === this.newPage.number && this.memoria[i].type !== this.newPage.type ) {
        return false;
      } 
    }
    
    return false;

  }
    
  randomMemory(): void {
    this.generateValue();

    let index: number = (this.newPage.number + 5) % this.memorySize;

    if ( this.checkValue() ) {
      this.memoria[this.replaceIndex].count++;
    }
    else {
      this.memoria[index].number = this.newPage.number;
      this.memoria[index].count = 0;
      this.memoria[index].type = this.newPage.type;
    }
  }

  fifoMemory(): void {
    this.generateValue();

    if( this.entry == this.memorySize ) {
      this.entry = 0;
      if ( this.checkValue() ) {
        this.memoria[this.replaceIndex].count++;
      }
      else {
        this.memoria[this.entry].number = this.newPage.number;
        this.memoria[this.entry].count = 0;
        this.memoria[this.entry].type = this.newPage.type;
        this.entry++;
        console.log(this.entry)
      }
    }
    else {
      if ( this.checkValue() ) {
        this.memoria[this.replaceIndex].count++;
      }
      else {
        this.memoria[this.entry].number = this.newPage.number;
        this.memoria[this.entry].count = 0;
        this.memoria[this.entry].type = this.newPage.type;
        this.entry++;
        console.log(this.entry)
      }
    }

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
      this.memoria[i].type = "";
    }
    this.entry = 0;
    this.showConsole();
  }

}
