import { Component } from '@angular/core';
import { generate } from 'rxjs';

/**
 * Interface to represent a memory
 */
interface Memoria {
  number: number;
  count: number;
  type: string;
  time: number;
  bloco: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'smv-angular';


  // changeble variables to get statistics
  // Choose a file to insert
  file01: Memoria[] = [
    { "number": 0, "count": 0, "type": "W", "time": 1574117426640, "bloco": -1 },
    { "number": 1, "count": 0, "type": "R", "time": 1574117426865, "bloco": -1 },
    { "number": 2, "count": 0, "type": "R", "time": 1574117427071, "bloco": -1 },
    { "number": 2, "count": 0, "type": "R", "time": 1574117427071, "bloco": -1 },
    { "number": 2, "count": 0, "type": "R", "time": 1574117427071, "bloco": -1 },
    { "number": 2, "count": 0, "type": "R", "time": 1574117427071, "bloco": -1 },
    { "number": 13, "count": 0, "type": "R", "time": 1574117427279, "bloco": -1 },
    { "number": 14, "count": 0, "type": "R", "time": 1574117427279, "bloco": -1 },
    { "number": 14, "count": 0, "type": "R", "time": 1574117427279, "bloco": -1 },
    { "number": 56, "count": 0, "type": "W", "time": 1574117427493, "bloco": -1 },
    { "number": 56, "count": 0, "type": "W", "time": 1574117427493, "bloco": -1 },
    { "number": 56, "count": 0, "type": "W", "time": 1574117427493, "bloco": -1 },
    { "number": 41, "count": 0, "type": "R", "time": 1574117427680, "bloco": -1 },
    { "number": 41, "count": 0, "type": "R", "time": 1574117427680, "bloco": -1 },
    { "number": 41, "count": 0, "type": "R", "time": 1574117427680, "bloco": -1 },
    { "number": 41, "count": 0, "type": "R", "time": 1574117427680, "bloco": -1 },
    { "number": 41, "count": 0, "type": "R", "time": 1574117427680, "bloco": -1 },
    { "number": 100, "count": 0, "type": "R", "time": 1574117427913, "bloco": -1 },
    { "number": 66, "count": 0, "type": "R", "time": 1574117428277, "bloco": -1 },
    { "number": 36, "count": 0, "type": "R", "time": 1574117428550, "bloco": -1 },
    { "number": 45, "count": 0, "type": "W", "time": 1574117428977, "bloco": -1 },
    { "number": 43, "count": 0, "type": "R", "time": 1574117427680, "bloco": -1 },
    { "number": 41, "count": 0, "type": "W", "time": 1574117556102, "bloco": -1 },
    { "number": 25, "count": 1, "type": "W", "time": 1574117556291, "bloco": -1 },
    { "number": 12, "count": 0, "type": "W", "time": 1574117556603, "bloco": -1 },
    { "number": 2, "count": 0, "type": "R", "time": 1574117557653, "bloco": -1 },
    { "number": 5, "count": 0, "type": "W", "time": 1574117557793, "bloco": -1 },
    { "number": 89, "count": 0, "type": "W", "time": 1574117557961, "bloco": -1 },
    { "number": 64, "count": 0, "type": "W", "time": 1574117558220, "bloco": -1 },
    { "number": 20, "count": 0, "type": "R", "time": 1574117558351, "bloco": -1 },
    { "number": 95, "count": 0, "type": "R", "time": 1574117558473, "bloco": -1 },
    { "number": 50, "count": 0, "type": "R", "time": 1574117558592, "bloco": -1 },
    { "number": 75, "count": 0, "type": "W", "time": 1574117558714, "bloco": -1 },
    { "number": 4, "count": 0, "type": "W", "time": 1574117558832, "bloco": -1 },
    { "number": 63, "count": 0, "type": "R", "time": 1574117558967, "bloco": -1 },
    { "number": 71, "count": 0, "type": "W", "time": 1574117559081, "bloco": -1 },
    { "number": 31, "count": 0, "type": "W", "time": 1574117559186, "bloco": -1 },
    { "number": 31, "count": 0, "type": "R", "time": 1574117559305, "bloco": -1 },
    { "number": 71, "count": 0, "type": "R", "time": 1574117559573, "bloco": -1 },
    { "number": 97, "count": 0, "type": "W", "time": 1574117559706, "bloco": -1 },
    { "number": 53, "count": 0, "type": "W", "time": 1574117559823, "bloco": -1 },
    { "number": 17, "count": 0, "type": "W", "time": 1574117559953, "bloco": -1 },
    { "number": 13, "count": 0, "type": "W", "time": 1574117560072, "bloco": -1 },
    { "number": 37, "count": 0, "type": "W", "time": 1574117560179, "bloco": -1 },
    { "number": 75, "count": 0, "type": "R", "time": 1574117560310, "bloco": -1 },
    { "number": 97, "count": 0, "type": "R", "time": 1574117560433, "bloco": -1 },
    { "number": 89, "count": 0, "type": "R", "time": 1574117560545, "bloco": -1 },
    { "number": 71, "count": 0, "type": "R", "time": 1574117560791, "bloco": -1 },
    { "number": 32, "count": 0, "type": "W", "time": 1574117561073, "bloco": -1 },
    { "number": 49, "count": 0, "type": "W", "time": 1574117561198, "bloco": -1 },
    { "number": 69, "count": 0, "type": "R", "time": 1574117561341, "bloco": -1 },
    { "number": 86, "count": 0, "type": "R", "time": 1574117561468, "bloco": -1 },
    { "number": 74, "count": 0, "type": "R", "time": 1574117561602, "bloco": -1 },
    { "number": 51, "count": 0, "type": "W", "time": 1574117561732, "bloco": -1 },
    { "number": 36, "count": 0, "type": "W", "time": 1574117561994, "bloco": -1 },
    { "number": 97, "count": 0, "type": "R", "time": 1574117562115, "bloco": -1 },
    { "number": 55, "count": 0, "type": "W", "time": 1574117562246, "bloco": -1 },
    { "number": 37, "count": 0, "type": "R", "time": 1574117562372, "bloco": -1 },
    { "number": 92, "count": 0, "type": "R", "time": 1574117562486, "bloco": -1 },
    { "number": 61, "count": 0, "type": "R", "time": 1574117562622, "bloco": -1 },
    { "number": 85, "count": 0, "type": "R", "time": 1574117562744, "bloco": -1 },
    { "number": 41, "count": 0, "type": "R", "time": 1574117562882, "bloco": -1 },
    { "number": 79, "count": 0, "type": "R", "time": 1574117563295, "bloco": -1 },
    { "number": 28, "count": 0, "type": "W", "time": 1574117563424, "bloco": -1 },
    { "number": 93, "count": 0, "type": "W", "time": 1574117563563, "bloco": -1 },
    { "number": 96, "count": 0, "type": "W", "time": 1574117563701, "bloco": -1 },
    { "number": 76, "count": 0, "type": "W", "time": 1574117563849, "bloco": -1 },
    { "number": 63, "count": 0, "type": "W", "time": 1574117563969, "bloco": -1 },
    { "number": 59, "count": 0, "type": "W", "time": 1574117564102, "bloco": -1 },
    { "number": 69, "count": 0, "type": "W", "time": 1574117564251, "bloco": -1 },
    { "number": 48, "count": 0, "type": "W", "time": 1574117564369, "bloco": -1 },
    { "number": 84, "count": 0, "type": "R", "time": 1574117564645, "bloco": -1 },
    { "number": 44, "count": 0, "type": "R", "time": 1574117606476, "bloco": -1 },
    { "number": 36, "count": 0, "type": "R", "time": 1574117606647, "bloco": -1 },
    { "number": 20, "count": 0, "type": "R", "time": 1574117606837, "bloco": -1 },
    { "number": 42, "count": 0, "type": "R", "time": 1574117606981, "bloco": -1 },
    { "number": 76, "count": 0, "type": "R", "time": 1574117607131, "bloco": -1 },
    { "number": 98, "count": 0, "type": "W", "time": 1574117607234, "bloco": -1 },
    { "number": 89, "count": 0, "type": "W", "time": 1574117607354, "bloco": -1 },
    { "number": 88, "count": 0, "type": "R", "time": 1574117607472, "bloco": -1 },
    { "number": 1, "count": 0, "type": "R", "time": 1574117607587, "bloco": -1 },
    { "number": 99, "count": 0, "type": "W", "time": 1574117607711, "bloco": -1 },
    { "number": 64, "count": 0, "type": "R", "time": 1574117607824, "bloco": -1 },
    { "number": 77, "count": 0, "type": "R", "time": 1574117607957, "bloco": -1 },
    { "number": 8, "count": 0, "type": "W", "time": 1574117608080, "bloco": -1 },
    { "number": 41, "count": 0, "type": "W", "time": 1574117608188, "bloco": -1 },
    { "number": 6, "count": 0, "type": "W", "time": 1574117608292, "bloco": -1 },
    { "number": 79, "count": 0, "type": "W", "time": 1574117608412, "bloco": -1 },
    { "number": 55, "count": 0, "type": "W", "time": 1574117608541, "bloco": -1 },
    { "number": 2, "count": 0, "type": "R", "time": 1574117608674, "bloco": -1 },
    { "number": 54, "count": 0, "type": "R", "time": 1574117608786, "bloco": -1 },
    { "number": 2, "count": 0, "type": "W", "time": 1574117608913, "bloco": -1 },
    { "number": 47, "count": 0, "type": "W", "time": 1574117609169, "bloco": -1 },
    { "number": 86, "count": 0, "type": "W", "time": 1574117609291, "bloco": -1 },
    { "number": 59, "count": 0, "type": "R", "time": 1574117609418, "bloco": -1 }
  ];

  file02: Memoria[] = [
    { "number": 55, "count": 0, "type": "W", "time": 1574117698296, "bloco": -1 },
    { "number": 5, "count": 0, "type": "W", "time": 1574117698461, "bloco": -1 },
    { "number": 80, "count": 0, "type": "R", "time": 1574117698611, "bloco": -1 },
    { "number": 91, "count": 0, "type": "W", "time": 1574117698758, "bloco": -1 },
    { "number": 31, "count": 0, "type": "W", "time": 1574117698899, "bloco": -1 },
    { "number": 30, "count": 0, "type": "R", "time": 1574117699001, "bloco": -1 },
    { "number": 86, "count": 0, "type": "R", "time": 1574117699127, "bloco": -1 },
    { "number": 100, "count": 0, "type": "R", "time": 1574117699262, "bloco": -1 },
    { "number": 71, "count": 0, "type": "W", "time": 1574117699388, "bloco": -1 },
    { "number": 20, "count": 0, "type": "R", "time": 1574117699498, "bloco": -1 },
    { "number": 26, "count": 0, "type": "W", "time": 1574117699626, "bloco": -1 },
    { "number": 8, "count": 0, "type": "R", "time": 1574117699727, "bloco": -1 },
    { "number": 58, "count": 0, "type": "R", "time": 1574117699847, "bloco": -1 },
    { "number": 44, "count": 0, "type": "W", "time": 1574117715719, "bloco": -1 },
    { "number": 12, "count": 0, "type": "R", "time": 1574117700226, "bloco": -1 },
    { "number": 8, "count": 0, "type": "W", "time": 1574117700355, "bloco": -1 },
    { "number": 59, "count": 0, "type": "W", "time": 1574117700472, "bloco": -1 },
    { "number": 9, "count": 0, "type": "W", "time": 1574117700589, "bloco": -1 },
    { "number": 56, "count": 0, "type": "R", "time": 1574117700847, "bloco": -1 },
    { "number": 99, "count": 0, "type": "W", "time": 1574117700977, "bloco": -1 },
    { "number": 52, "count": 0, "type": "W", "time": 1574117701219, "bloco": -1 },
    { "number": 78, "count": 0, "type": "R", "time": 1574117701490, "bloco": -1 },
    { "number": 93, "count": 0, "type": "R", "time": 1574117701621, "bloco": -1 },
    { "number": 60, "count": 0, "type": "R", "time": 1574117701744, "bloco": -1 },
    { "number": 31, "count": 0, "type": "R", "time": 1574117701874, "bloco": -1 },
    { "number": 34, "count": 0, "type": "R", "time": 1574117702005, "bloco": -1 },
    { "number": 10, "count": 0, "type": "R", "time": 1574117702127, "bloco": -1 },
    { "number": 54, "count": 0, "type": "W", "time": 1574117702247, "bloco": -1 },
    { "number": 39, "count": 0, "type": "W", "time": 1574117702378, "bloco": -1 },
    { "number": 37, "count": 0, "type": "W", "time": 1574117702504, "bloco": -1 },
    { "number": 62, "count": 0, "type": "R", "time": 1574117702634, "bloco": -1 },
    { "number": 55, "count": 0, "type": "R", "time": 1574117702757, "bloco": -1 },
    { "number": 72, "count": 0, "type": "W", "time": 1574117702876, "bloco": -1 },
    { "number": 0, "count": 0, "type": "W", "time": 1574117703003, "bloco": -1 },
    { "number": 19, "count": 0, "type": "W", "time": 1574117703145, "bloco": -1 },
    { "number": 66, "count": 0, "type": "W", "time": 1574117703257, "bloco": -1 },
    { "number": 74, "count": 0, "type": "W", "time": 1574117703385, "bloco": -1 },
    { "number": 60, "count": 0, "type": "W", "time": 1574117703493, "bloco": -1 },
    { "number": 67, "count": 0, "type": "W", "time": 1574117703614, "bloco": -1 },
    { "number": 27, "count": 0, "type": "R", "time": 1574117703740, "bloco": -1 },
    { "number": 40, "count": 0, "type": "W", "time": 1574117703847, "bloco": -1 },
    { "number": 85, "count": 0, "type": "W", "time": 1574117703970, "bloco": -1 },
    { "number": 6, "count": 0, "type": "W", "time": 1574117704086, "bloco": -1 },
    { "number": 80, "count": 0, "type": "W", "time": 1574117704447, "bloco": -1 },
    { "number": 7, "count": 0, "type": "R", "time": 1574117704569, "bloco": -1 },
    { "number": 11, "count": 0, "type": "W", "time": 1574117704682, "bloco": -1 },
    { "number": 12, "count": 0, "type": "W", "time": 1574117704800, "bloco": -1 },
    { "number": 79, "count": 0, "type": "R", "time": 1574117704924, "bloco": -1 },
    { "number": 69, "count": 0, "type": "R", "time": 1574117705037, "bloco": -1 },
    { "number": 9, "count": 0, "type": "R", "time": 1574117705158, "bloco": -1 },
    { "number": 84, "count": 0, "type": "W", "time": 1574117705286, "bloco": -1 },
    { "number": 25, "count": 0, "type": "R", "time": 1574117705410, "bloco": -1 },
    { "number": 11, "count": 0, "type": "R", "time": 1574117705554, "bloco": -1 },
    { "number": 28, "count": 0, "type": "W", "time": 1574117705694, "bloco": -1 },
    { "number": 47, "count": 0, "type": "R", "time": 1574117706109, "bloco": -1 },
    { "number": 68, "count": 0, "type": "W", "time": 1574117706254, "bloco": -1 },
    { "number": 11, "count": 0, "type": "R", "time": 1574117706413, "bloco": -1 },
    { "number": 5, "count": 0, "type": "R", "time": 1574117706549, "bloco": -1 },
    { "number": 25, "count": 0, "type": "W", "time": 1574117706695, "bloco": -1 },
    { "number": 88, "count": 0, "type": "W", "time": 1574117706840, "bloco": -1 },
    { "number": 42, "count": 0, "type": "W", "time": 1574117707122, "bloco": -1 },
    { "number": 1, "count": 0, "type": "R", "time": 1574117707249, "bloco": -1 },
    { "number": 78, "count": 0, "type": "W", "time": 1574117707768, "bloco": -1 },
    { "number": 51, "count": 0, "type": "W", "time": 1574117707894, "bloco": -1 },
    { "number": 98, "count": 0, "type": "R", "time": 1574117708021, "bloco": -1 },
    { "number": 48, "count": 0, "type": "R", "time": 1574117708144, "bloco": -1 },
    { "number": 47, "count": 0, "type": "W", "time": 1574117708267, "bloco": -1 },
    { "number": 15, "count": 0, "type": "R", "time": 1574117708394, "bloco": -1 },
    { "number": 74, "count": 0, "type": "R", "time": 1574117708654, "bloco": -1 },
    { "number": 70, "count": 0, "type": "R", "time": 1574117708770, "bloco": -1 },
    { "number": 84, "count": 0, "type": "R", "time": 1574117709031, "bloco": -1 },
    { "number": 7, "count": 0, "type": "W", "time": 1574117709157, "bloco": -1 },
    { "number": 74, "count": 0, "type": "R", "time": 1574117709284, "bloco": -1 },
    { "number": 35, "count": 0, "type": "R", "time": 1574117709679, "bloco": -1 },
    { "number": 48, "count": 0, "type": "W", "time": 1574117709810, "bloco": -1 },
    { "number": 61, "count": 0, "type": "R", "time": 1574117709941, "bloco": -1 },
    { "number": 76, "count": 0, "type": "W", "time": 1574117710063, "bloco": -1 },
    { "number": 57, "count": 0, "type": "W", "time": 1574117710188, "bloco": -1 },
    { "number": 72, "count": 0, "type": "R", "time": 1574117710433, "bloco": -1 },
    { "number": 16, "count": 0, "type": "R", "time": 1574117710555, "bloco": -1 },
    { "number": 3, "count": 0, "type": "W", "time": 1574117710689, "bloco": -1 },
    { "number": 95, "count": 0, "type": "R", "time": 1574117710940, "bloco": -1 },
    { "number": 80, "count": 0, "type": "W", "time": 1574117711079, "bloco": -1 },
    { "number": 79, "count": 0, "type": "W", "time": 1574117711525, "bloco": -1 },
    { "number": 46, "count": 0, "type": "W", "time": 1574117711709, "bloco": -1 },
    { "number": 1, "count": 0, "type": "W", "time": 1574117711961, "bloco": -1 },
    { "number": 3, "count": 0, "type": "R", "time": 1574117712137, "bloco": -1 },
    { "number": 81, "count": 0, "type": "W", "time": 1574117712396, "bloco": -1 },
    { "number": 6, "count": 0, "type": "R", "time": 1574117712651, "bloco": -1 },
    { "number": 18, "count": 0, "type": "R", "time": 1574117713067, "bloco": -1 },
    { "number": 37, "count": 0, "type": "R", "time": 1574117713267, "bloco": -1 },
    { "number": 29, "count": 0, "type": "W", "time": 1574117713451, "bloco": -1 },
    { "number": 78, "count": 0, "type": "W", "time": 1574117713661, "bloco": -1 },
    { "number": 94, "count": 0, "type": "W", "time": 1574117714554, "bloco": -1 },
    { "number": 40, "count": 0, "type": "R", "time": 1574117714739, "bloco": -1 },
    { "number": 63, "count": 0, "type": "R", "time": 1574117714899, "bloco": -1 },
    { "number": 63, "count": 0, "type": "W", "time": 1574117715074, "bloco": -1 },
    { "number": 65, "count": 0, "type": "R", "time": 1574117715241, "bloco": -1 },
    { "number": 54, "count": 0, "type": "R", "time": 1574117715396, "bloco": -1 },
    { "number": 36, "count": 0, "type": "R", "time": 1574117715552, "bloco": -1 },
  ];

  file03: Memoria[] = [
    { "number": 66, "count": 0, "type": "W", "time": 1574117817637, "bloco": -1 },
    { "number": 51, "count": 0, "type": "R", "time": 1574117817815, "bloco": -1 },
    { "number": 83, "count": 0, "type": "R", "time": 1574117817978, "bloco": -1 },
    { "number": 0, "count": 0, "type": "W", "time": 1574117818120, "bloco": -1 },
    { "number": 56, "count": 0, "type": "R", "time": 1574117818366, "bloco": -1 },
    { "number": 92, "count": 0, "type": "W", "time": 1574117818514, "bloco": -1 },
    { "number": 94, "count": 0, "type": "W", "time": 1574117818645, "bloco": -1 },
    { "number": 71, "count": 0, "type": "W", "time": 1574117818785, "bloco": -1 },
    { "number": 72, "count": 0, "type": "R", "time": 1574117819068, "bloco": -1 },
    { "number": 12, "count": 0, "type": "R", "time": 1574117819222, "bloco": -1 },
    { "number": 98, "count": 0, "type": "W", "time": 1574117819356, "bloco": -1 },
    { "number": 84, "count": 0, "type": "W", "time": 1574117819505, "bloco": -1 },
    { "number": 3, "count": 0, "type": "W", "time": 1574117819611, "bloco": -1 },
    { "number": 94, "count": 0, "type": "R", "time": 1574117819758, "bloco": -1 },
    { "number": 23, "count": 0, "type": "W", "time": 1574117819911, "bloco": -1 },
    { "number": 71, "count": 0, "type": "R", "time": 1574117820034, "bloco": -1 },
    { "number": 57, "count": 0, "type": "R", "time": 1574117820294, "bloco": -1 },
    { "number": 47, "count": 0, "type": "R", "time": 1574117820590, "bloco": -1 },
    { "number": 85, "count": 0, "type": "W", "time": 1574117820732, "bloco": -1 },
    { "number": 33, "count": 0, "type": "W", "time": 1574117820889, "bloco": -1 },
    { "number": 36, "count": 0, "type": "R", "time": 1574117821044, "bloco": -1 },
    { "number": 87, "count": 0, "type": "R", "time": 1574117821197, "bloco": -1 },
    { "number": 69, "count": 0, "type": "R", "time": 1574117821348, "bloco": -1 },
    { "number": 28, "count": 0, "type": "W", "time": 1574117821506, "bloco": -1 },
    { "number": 2, "count": 0, "type": "W", "time": 1574117821655, "bloco": -1 },
    { "number": 45, "count": 0, "type": "W", "time": 1574117821794, "bloco": -1 },
    { "number": 9, "count": 0, "type": "R", "time": 1574117821931, "bloco": -1 },
    { "number": 84, "count": 0, "type": "R", "time": 1574117822074, "bloco": -1 },
    { "number": 63, "count": 0, "type": "W", "time": 1574117822222, "bloco": -1 },
    { "number": 71, "count": 0, "type": "R", "time": 1574117822352, "bloco": -1 },
    { "number": 55, "count": 0, "type": "R", "time": 1574117822472, "bloco": -1 },
    { "number": 51, "count": 0, "type": "W", "time": 1574117822755, "bloco": -1 },
    { "number": 86, "count": 0, "type": "R", "time": 1574117822888, "bloco": -1 },
    { "number": 66, "count": 0, "type": "R", "time": 1574117823140, "bloco": -1 },
    { "number": 49, "count": 0, "type": "R", "time": 1574117823522, "bloco": -1 },
    { "number": 78, "count": 0, "type": "R", "time": 1574117823662, "bloco": -1 },
    { "number": 40, "count": 0, "type": "W", "time": 1574117823936, "bloco": -1 },
    { "number": 39, "count": 0, "type": "W", "time": 1574117824063, "bloco": -1 },
    { "number": 30, "count": 0, "type": "R", "time": 1574117824192, "bloco": -1 },
    { "number": 58, "count": 0, "type": "W", "time": 1574117824311, "bloco": -1 },
    { "number": 61, "count": 0, "type": "R", "time": 1574117825012, "bloco": -1 },
    { "number": 4, "count": 0, "type": "R", "time": 1574117825217, "bloco": -1 },
    { "number": 72, "count": 0, "type": "W", "time": 1574117825658, "bloco": -1 },
    { "number": 21, "count": 0, "type": "W", "time": 1574117825959, "bloco": -1 },
    { "number": 90, "count": 0, "type": "R", "time": 1574117826087, "bloco": -1 },
    { "number": 42, "count": 0, "type": "R", "time": 1574117826227, "bloco": -1 },
    { "number": 28, "count": 0, "type": "R", "time": 1574117826356, "bloco": -1 },
    { "number": 27, "count": 0, "type": "R", "time": 1574117826494, "bloco": -1 },
    { "number": 98, "count": 0, "type": "R", "time": 1574117826619, "bloco": -1 },
    { "number": 62, "count": 0, "type": "W", "time": 1574117826746, "bloco": -1 },
    { "number": 1, "count": 0, "type": "R", "time": 1574117827017, "bloco": -1 },
    { "number": 96, "count": 0, "type": "R", "time": 1574117827155, "bloco": -1 },
    { "number": 58, "count": 0, "type": "R", "time": 1574117827661, "bloco": -1 },
    { "number": 64, "count": 0, "type": "W", "time": 1574117827786, "bloco": -1 },
    { "number": 95, "count": 0, "type": "R", "time": 1574117827914, "bloco": -1 },
    { "number": 38, "count": 0, "type": "R", "time": 1574117828039, "bloco": -1 },
    { "number": 1, "count": 0, "type": "W", "time": 1574117828162, "bloco": -1 },
    { "number": 17, "count": 0, "type": "W", "time": 1574117828282, "bloco": -1 },
    { "number": 92, "count": 0, "type": "R", "time": 1574117828912, "bloco": -1 },
    { "number": 93, "count": 0, "type": "W", "time": 1574117829058, "bloco": -1 },
    { "number": 22, "count": 0, "type": "W", "time": 1574117829194, "bloco": -1 },
    { "number": 31, "count": 0, "type": "R", "time": 1574117829500, "bloco": -1 },
    { "number": 24, "count": 0, "type": "W", "time": 1574117829636, "bloco": -1 },
    { "number": 65, "count": 0, "type": "W", "time": 1574117829771, "bloco": -1 },
    { "number": 79, "count": 0, "type": "R", "time": 1574117829899, "bloco": -1 },
    { "number": 3, "count": 0, "type": "R", "time": 1574117830300, "bloco": -1 },
    { "number": 21, "count": 0, "type": "R", "time": 1574117830441, "bloco": -1 },
    { "number": 99, "count": 0, "type": "R", "time": 1574117830853, "bloco": -1 },
    { "number": 6, "count": 0, "type": "R", "time": 1574117830985, "bloco": -1 },
    { "number": 61, "count": 0, "type": "W", "time": 1574117831128, "bloco": -1 },
    { "number": 53, "count": 0, "type": "R", "time": 1574117831547, "bloco": -1 },
    { "number": 88, "count": 0, "type": "W", "time": 1574117831690, "bloco": -1 },
    { "number": 83, "count": 0, "type": "W", "time": 1574117832145, "bloco": -1 },
    { "number": 10, "count": 0, "type": "R", "time": 1574117832295, "bloco": -1 },
    { "number": 30, "count": 0, "type": "W", "time": 1574117832442, "bloco": -1 },
    { "number": 90, "count": 0, "type": "W", "time": 1574117832712, "bloco": -1 },
    { "number": 29, "count": 0, "type": "W", "time": 1574117833127, "bloco": -1 },
    { "number": 60, "count": 0, "type": "R", "time": 1574117833414, "bloco": -1 },
    { "number": 30, "count": 0, "type": "W", "time": 1574117833555, "bloco": -1 },
    { "number": 62, "count": 0, "type": "R", "time": 1574117833831, "bloco": -1 },
    { "number": 31, "count": 0, "type": "W", "time": 1574117833992, "bloco": -1 },
    { "number": 99, "count": 0, "type": "W", "time": 1574117834495, "bloco": -1 },
    { "number": 88, "count": 0, "type": "R", "time": 1574117834669, "bloco": -1 },
    { "number": 43, "count": 0, "type": "R", "time": 1574117834862, "bloco": -1 },
    { "number": 67, "count": 0, "type": "W", "time": 1574117835055, "bloco": -1 },
    { "number": 82, "count": 0, "type": "W", "time": 1574117835404, "bloco": -1 },
    { "number": 37, "count": 0, "type": "R", "time": 1574117835556, "bloco": -1 },
    { "number": 3, "count": 0, "type": "R", "time": 1574117835730, "bloco": -1 },
    { "number": 67, "count": 0, "type": "R", "time": 1574117835920, "bloco": -1 },
    { "number": 1, "count": 0, "type": "W", "time": 1574117836096, "bloco": -1 },
    { "number": 47, "count": 0, "type": "W", "time": 1574117836268, "bloco": -1 },
    { "number": 21, "count": 0, "type": "R", "time": 1574117836618, "bloco": -1 },
    { "number": 50, "count": 0, "type": "W", "time": 1574117836783, "bloco": -1 },
    { "number": 29, "count": 0, "type": "R", "time": 1574117837130, "bloco": -1 },
    { "number": 30, "count": 0, "type": "W", "time": 1574117837316, "bloco": -1 },
    { "number": 19, "count": 0, "type": "W", "time": 1574117837630, "bloco": -1 },
    { "number": 73, "count": 0, "type": "W", "time": 1574117838064, "bloco": -1 },
    { "number": 77, "count": 0, "type": "W", "time": 1574117838235, "bloco": -1 },
    { "number": 89, "count": 0, "type": "W", "time": 1574117838797, "bloco": -1 },
    { "number": 30, "count": 0, "type": "W", "time": 1574117839625, "bloco": -1 },
  ];

  data: Memoria[];
  // choose the block size - number of pages ni each block  
  blockSize:number;
  // Choose the memory size
  memorySize: number = 15;



  blockInt: number;
  memoria: Memoria[] = [];
  replaceIndex: number;
  entry: number;
  newPage = { 'number': 0, 'count': 0, 'type': "", "time": 0 };
  time: number;
  loop: number;
  write: number;
  read: number;
  pageSize: number;
  file: Memoria[] = [];
  hitPage: number;
  missPage: number;
  indice: number;


  /**
   * Initialize some variables and an empty memory
   */
  ngOnInit() {
    for (let i = 0; i < this.memorySize; i++) {
      this.memoria.push({
        number: -1,
        count: 0,
        type: "EMPTY",
        time: 0,
        bloco: -1
      });
    }
    this.newPage.number=0;
    this.newPage.count =0; 
    this.entry = 0;
    this.replaceIndex = 0;
    this.time = Date.now();
    this.hitPage = 0;
    this.missPage = 0;
    this.loop = 200;
    this.pageSize = 4;
    this.read = 0;
    this.write = 0;
    this.indice = 0;
    for (let i = 0; i < this.loop; i++) {
      this.file.push({
        number: -1,
        count: 0,
        type: "EMPTY",
        time: 0,
        bloco: -1
      });
    }
  }
  
  /**
  * Function to display and if a space in memory is empty set EMPTY as it`s type
  */
  showConsole(): void {
    for (let i = 0; i < this.memorySize; i++) {
      if( this.memoria[i].number == -1 )
        this.memoria[i].type = "EMPTY";
    }
    console.log( this.memoria );
  }

  /**
   * Generate a new page to insert in memory
   */
  generateValue(): void {
    
    // this.newPage.number = (Math.floor(Math.random() * (100 - 0 + 1)) + 0);
    // this.newPage.count = 0;
    // this.newPage.type = (Math.floor(Math.random() * (1 - 0 + 1)) + 0) ? "R" : "W";
    // this.newPage.time = Date.now();
    // this.newPage.type == "R" ? this.read++ : this.write++;

  }

  checkValue(data: Memoria, index: number): boolean {
    let i:number;
   
    if( this.blockInt == Math.trunc( this.memoria[index].number/this.blockSize ) && this.memoria[index].number!=-1)
      return true

    return false;
  }
  randomMemory(): void {
    let index: number;

    if( this.replaceIndex < this.data.length ){

      this.blockInt = Math.trunc(this.data[this.replaceIndex].number/this.blockSize);

      index = this.blockInt % this.memorySize;

      this.data[this.replaceIndex].type == "R" ? this.read++ : this.write++;
      
      if ( this.checkValue(this.data[this.replaceIndex], index) ) {
        
        this.memoria[index].count++
        this.hitPage++;

      } else {

        this.memoria[index].number = this.data[this.replaceIndex].number;
        this.memoria[index].bloco = this.blockInt;
        this.memoria[index].count = 0;
        this.memoria[index].type = this.data[this.replaceIndex].type;
        this.memoria[index].time = this.data[this.replaceIndex].time;

        this.missPage++;

      } 
      this.replaceIndex++;
    }
    else {
      this.replaceIndex = 0;

      this.blockInt = Math.trunc(this.data[this.replaceIndex].number/this.blockSize);

      index = this.blockInt % this.memorySize;

      this.data[this.replaceIndex].type == "R" ? this.read++ : this.write++;
      
      if ( this.checkValue(this.data[this.replaceIndex], index) ) {
        
        this.memoria[index].count++
        this.hitPage++;

      } else {

        this.memoria[index].number = this.data[this.replaceIndex].number;
        this.memoria[index].bloco = this.blockInt;
        this.memoria[index].count = 0;
        this.memoria[index].type = this.data[this.replaceIndex].type;
        this.memoria[index].time = this.data[this.replaceIndex].time;

        this.missPage++;

      } 
    }

  }
  insertRandom(): void {
    this.cleanMemory();
    this.data = this.file01;
    this.blockSize = 2;
    for (let index = 0; index < this.loop; index++) {
      this.randomMemory();
    }
  }



  checkValueFIFO(data: Memoria, index: number): boolean {
    let i:number;
    for ( i = 0; i < this.memoria.length; i++) {
      let integer: number = Math.trunc(this.memoria[i].number/this.blockSize)%this.memorySize;

      if ( integer === index && this.memoria[i].type === data.type && Math.abs( this.memoria[i].number - data.number ) < 4 ) {
        this.replaceIndex = i;
        return true;
      } 
    }
    return false;
  }
  fifoMemory(): void {
    let index: number;

    this.data[this.indice].type == "R" ? this.read++ : this.write++;
    
    if( this.entry == this.memorySize ) {
      this.entry = 0;
    }
    else {
      this.blockInt = Math.trunc(this.data[this.indice].number/this.blockSize);

      index = this.blockInt % this.memorySize;

      if ( this.checkValueFIFO(this.data[this.indice], index) ) {
        this.memoria[this.replaceIndex].count++;
        this.hitPage++;
      }
      else {
        this.memoria[this.entry].number = this.data[this.indice].number;
        this.memoria[this.entry].bloco = this.blockInt;
        this.memoria[this.entry].count = 0;
        this.memoria[this.entry].type = this.data[this.indice].type;
        this.entry++;
        this.missPage++;
      }
    }
    
    if(this.indice < this.data.length - 1) {
      this.indice++;
    }
    else {
      this.indice = 0;
    }
  }
  insertMemory(): void {
    this.data = this.file03;
    this.blockSize = 8;
    for (let index = 0; index < this.loop; index++) {
      this.fifoMemory();
    }
  }


  checkLeastUsed(): void {
    let i:number;
    let minor: number;
    let storedMinor: number = 99999999999;

    for ( i = 0; i < this.memoria.length; i++) {
      if( this.memoria[i].count < storedMinor ){
        storedMinor = this.memoria[i].count;
      } 
    }

    for ( i = 0; i < this.memoria.length; i++) {
      if( this.memoria[i].count == storedMinor) {
        this.replaceIndex = i; 
      }
    }
  }
  lfuMemory(): void {

    let index: number;

    this.data[this.indice].type == "R" ? this.read++ : this.write++;
    
    this.blockInt = Math.trunc(this.data[this.indice].number/this.blockSize);

    index = this.blockInt % this.memorySize;
    
    if( this.entry == this.memorySize ) {
      this.checkLeastUsed();

      if ( this.checkValueFIFO(this.data[this.indice], index) ) {
        this.memoria[this.replaceIndex].count++;
        this.hitPage++;
      }
      else {
        this.memoria[this.replaceIndex].number = this.data[this.indice].number;
        this.memoria[this.replaceIndex].bloco = this.blockInt;
        this.memoria[this.replaceIndex].count = 0;
        this.memoria[this.replaceIndex].type = this.data[this.indice].type;
        this.missPage++;
      }

    }
    else {
      
      if ( this.checkValueFIFO(this.data[this.indice], index) ) {
        this.memoria[this.replaceIndex].count++;
        this.hitPage++;
      }
      else {
        this.memoria[this.entry].number = this.data[this.indice].number;
        this.memoria[this.entry].bloco = this.blockInt;
        this.memoria[this.entry].count = 0;
        this.memoria[this.entry].type = this.data[this.indice].type;
        this.entry++;
        this.missPage++;
      }
    }
    
    if(this.indice < this.data.length - 1) {
      this.indice++;
    }
    else {
      this.indice = 0;
    }

  }
  insertMemoryLFU(): void {
    this.data = this.file03;
    this.blockSize = 8;
    for (let index = 0; index < this.loop; index++) {
      this.lfuMemory();
    }
  }



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
  lruMemory(): void {
    let index: number;

    this.data[this.indice].type == "R" ? this.read++ : this.write++;
    
    this.blockInt = Math.trunc(this.data[this.indice].number/this.blockSize);

    index = this.blockInt % this.memorySize;
    
    if( this.entry == this.memorySize ) {
      this.checkLastUsed();

      if ( this.checkValueFIFO(this.data[this.indice], index) ) {
        this.memoria[this.replaceIndex].count++;
        this.memoria[this.replaceIndex].time = this.data[this.indice].time;

        this.hitPage++;
      }
      else {
        this.memoria[this.replaceIndex].number = this.data[this.indice].number;
        this.memoria[this.replaceIndex].bloco = this.blockInt;
        this.memoria[this.replaceIndex].count = 0;
        this.memoria[this.replaceIndex].type = this.data[this.indice].type;
        this.memoria[this.replaceIndex].time = this.data[this.indice].time;

        this.missPage++;
      }

    }
    else {
      
      if ( this.checkValueFIFO(this.data[this.indice], index) ) {
        this.memoria[this.replaceIndex].count++;
        this.memoria[this.replaceIndex].time = this.data[this.indice].time;

        this.hitPage++;
      }
      else {
        this.memoria[this.entry].number = this.data[this.indice].number;
        this.memoria[this.entry].bloco = this.blockInt;
        this.memoria[this.entry].count = 0;
        this.memoria[this.entry].type = this.data[this.indice].type;
        this.memoria[this.replaceIndex].time = this.data[this.indice].time;

        this.entry++;
        this.missPage++;
      }
    }
    
    if(this.indice < this.data.length - 1) {
      this.indice++;
    }
    else {
      this.indice = 0;
    }

  }
  insertMemoryLRU(): void {
    this.cleanMemory();
    this.data = this.file03;
    this.blockSize = 8;
    for (let index = 0; index < this.loop; index++) {
      this.lruMemory();
    }
  }


  /**
   * Function to get all low used pages and change one randomly
   */
  // checkZeroCount(): void {
  //   let i:number;
  //   let minor: number;
  //   let storedMinor: number = 99999999999;

  //   for ( i = 0; i < this.memoria.length; i++) {
  //     if( this.memoria[i].count < storedMinor ){
  //       storedMinor = this.memoria[i].count;
  //     } 
  //   }

  //   for ( i = 0; i < this.memoria.length; i++) {
  //     if( this.memoria[i].count == storedMinor) {
  //       this.replaceIndex = i; 
  //     }
  //   }
  // }

  
  /**
   * function to generate and push one new page to memory as not recently used 
   */
  // nruMemory(): void {
  //   this.generateValue(); 

  //   if( this.entry != this.memorySize ) {
  //     if ( this.checkValue() ) {
  //       this.memoria[this.replaceIndex].count++;
  //       this.memoria[this.entry].time = this.newPage.time;
  //       this.hitPage++;
  //       console.log("hit");

  //     }
  //     else {
  //       this.memoria[this.entry].number = this.newPage.number;
  //       this.memoria[this.entry].count = 0;
  //       this.memoria[this.entry].type = this.newPage.type;
  //       this.memoria[this.entry].time = this.newPage.time;
  //       this.entry++;
  //       this.missPage++;

  //     }
  //   }
  //   else {
  //     this.checkZeroCount()

  //     if ( this.checkValue() ) {
  //       this.memoria[this.replaceIndex].count++;
  //       this.memoria[this.replaceIndex].time = this.newPage.time;
  //       this.hitPage++;
  //       console.log("hit");

  //     }
  //     else {
  //       // this.checkZeroCount();

  //       this.memoria[this.replaceIndex].number = this.newPage.number;
  //       this.memoria[this.replaceIndex].count = 0;
  //       this.memoria[this.replaceIndex].type = this.newPage.type;
  //       this.memoria[this.replaceIndex].time = this.newPage.time;
  //       this.missPage++;

  //     }
  //   }

    
  // }


  /**
   * Call n times the NRU function to push a single page into memory
   * 
   * Clear memory before start pushing new pages into memory
   * 
   * Display the results on table
   */
  // generateNRUMemory(): void {
  //   this.cleanMemory();
  //   for (let index = 0; index < this.loop; index++) {
  //     this.nruMemory();   
  //   }
  //   this.showConsole();
  // }

  /**
   * Clear memory
   */
  cleanMemory(): void {
    for (let i = 0; i < this.memorySize; i++) {
      this.memoria[i].number = -1;
      this.memoria[i].count = 0;
      this.memoria[i].type = "EMPTY";
      this.memoria[i].time = 0;
      this.memoria[i].bloco = -1;
    }
    this.entry = 0;
    this.hitPage = 0;
    this.missPage = 0;
    this.read = 0;
    this.write = 0;
    this.blockInt = 0;
    this.replaceIndex = 0;
  }

}
