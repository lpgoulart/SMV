import { Component } from '@angular/core';

interface Memoria {
  number: number;
  count: number;
  type: string;
  time: number;
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
  newPage = { 'number': 0, 'count': 0, 'type': "", "time": 0 };
  time: number;
  loop: number;

  hitPage: number;
  missPage: number;

  ngOnInit() {
    for (let i = 0; i < this.memorySize; i++) {
      this.memoria.push({
        number: -1,
        count: 0,
        type: "EMPTY",
        time: 0
      });
    }
    this.newPage.number=0;
    this.newPage.count =0; 
    this.entry = 0;
    this.replaceIndex = 0;
    this.time = Date.now();
    this.hitPage = 0;
    this.missPage = 0;
    this.loop = 20;
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
    this.newPage.time = Date.now();
    // console.log(this.newPage)

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

  checkLeastUsed(): void {
    let i:number;
    for ( i = 0; i < this.memoria.length - 1; i++) {
      if( this.memoria[i].number < this.memoria[i+1].number) {
        this.replaceIndex = i; 
        break;
      }
    }
  }

  // adjust? 
  checkLastUsed(): void {
    let i:number;
    let now:number;
    let memoryTime: number;

    for ( i = 0; i < this.memoria.length - 1; i++) {
      now = Date.now();
      let memoryTime = now - this.memoria[i].time;
      let nextTime = now - this.memoria[i+1].time;
      if( memoryTime > nextTime ) {
        this.replaceIndex = i; 
      }
    }
  }


  // function to generate and push new page to memory randomly
  randomMemory(): void {
    this.generateValue();

    let index: number = (this.newPage.number + 5) % this.memorySize;

    if ( this.checkValue() ) {
      this.memoria[this.replaceIndex].count++;
      this.hitPage++;
    }
    else {
      this.memoria[index].number = this.newPage.number;
      this.memoria[index].count = 0;
      this.memoria[index].type = this.newPage.type;
      this.missPage++;
    }
  }
  // function to generate and push new page to memory as first in first out
  fifoMemory(): void {
    this.generateValue();

    if( this.entry == this.memorySize ) {
      this.entry = 0;
      if ( this.checkValue() ) {
        this.memoria[this.replaceIndex].count++;
        this.hitPage++;
      }
      else {
        this.memoria[this.entry].number = this.newPage.number;
        this.memoria[this.entry].count = 0;
        this.memoria[this.entry].type = this.newPage.type;
        this.entry++;
        this.missPage++;
        console.log(this.entry)
      }
    }
    else {
      if ( this.checkValue() ) {
        this.memoria[this.replaceIndex].count++;
        this.hitPage++;
      }
      else {
        this.memoria[this.entry].number = this.newPage.number;
        this.memoria[this.entry].count = 0;
        this.memoria[this.entry].type = this.newPage.type;
        this.entry++;
        this.missPage++;
        console.log(this.entry)
      }
    }

  }
  // function to generate and push new page to memory as first in first out
  lfuMemory(): void {
    this.generateValue();

    if( this.entry != this.memorySize ) {
      if ( this.checkValue() ) {
        this.memoria[this.replaceIndex].count++;
        this.hitPage++;
        console.log(this.memoria);
        console.log("hit");

      }
      else {
        this.memoria[this.entry].number = this.newPage.number;
        this.memoria[this.entry].count = 0;
        this.memoria[this.entry].type = this.newPage.type;
        this.entry++;
        this.missPage++;
        console.log(this.memoria);

      }
    }
    else {

      if ( this.checkValue() ) {
        this.memoria[this.replaceIndex].count++;
        this.hitPage++;
        console.log(this.memoria);
        console.log("hit");

      }
      else {
        this.checkLeastUsed();

        this.memoria[this.replaceIndex].number = this.newPage.number;
        this.memoria[this.replaceIndex].count = 0;
        this.memoria[this.replaceIndex].type = this.newPage.type;
        this.missPage++;
        console.log(this.memoria);

      }
    }

  }
  // function to generate and push new page to memory as first in first out ---- adjust??
  lruMemory(): void {
    this.generateValue();

    if( this.entry != this.memorySize ) {
      if ( this.checkValue() ) {
        this.memoria[this.replaceIndex].count++;
        this.memoria[this.entry].time = this.newPage.time;
        this.hitPage++;
        console.log("hit");

      }
      else {
        this.memoria[this.entry].number = this.newPage.number;
        this.memoria[this.entry].count = 0;
        this.memoria[this.entry].type = this.newPage.type;
        this.memoria[this.entry].time = this.newPage.time;
        this.entry++;
        this.missPage++;

      }
    }
    else {

      if ( this.checkValue() ) {
        this.memoria[this.replaceIndex].count++;
        this.memoria[this.replaceIndex].time = this.newPage.time;
        this.hitPage++;
        console.log("hit");
        // console.log(this.memoria);

      }
      else {
        this.checkLastUsed();

        this.memoria[this.replaceIndex].number = this.newPage.number;
        this.memoria[this.replaceIndex].count = 0;
        this.memoria[this.replaceIndex].type = this.newPage.type;
        this.memoria[this.replaceIndex].time = this.newPage.time;
        this.missPage++;
        console.log(this.replaceIndex);
        // console.log(this.memoria);

      }
    }

  }



  generateRandomMemory(): void {
    this.cleanMemory();
    for (let index = 0; index < this.loop; index++) {
      this.randomMemory();      
    }
    this.showConsole();
  }
  generateFIFOMemory(): void {
    this.cleanMemory();
    for (let index = 0; index < this.loop; index++) {
      this.fifoMemory();  
      // console.log(index)  
    }
    this.showConsole();
  }
  generateLFUMemory(): void {
    this.cleanMemory();
    for (let index = 0; index < this.loop; index++) {
      this.lfuMemory();  
      // console.log(index)  
    }
    this.showConsole();
  }
  generateLRUMemory(): void {
    this.cleanMemory();
    for (let index = 0; index < this.loop; index++) {
      this.lruMemory();  
      // console.log(index)  
    }
    this.showConsole();
  }
  cleanMemory(): void {
    for (let i = 0; i < this.memorySize; i++) {
      this.memoria[i].number = -1;
      this.memoria[i].count = 0;
      this.memoria[i].type = "";
      this.memoria[i].time = 0;
    }
    this.entry = 0;
    this.hitPage = 0;
    this.missPage = 0;
    this.showConsole();
  }

}
