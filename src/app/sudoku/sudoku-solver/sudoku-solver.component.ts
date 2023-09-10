import { Component } from '@angular/core';
import { ConstantsServiceService } from 'src/app/services/constants-service.service';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-sudoku-solver',
  templateUrl: './sudoku-solver.component.html',
  styleUrls: ['./sudoku-solver.component.css']
})
export class SudokuSolverComponent {

  puzzle:any = {}
  solution:any = {}
  time:number=0;
  interval!:any;
  display_timer:any = ""
  constructor(private appService:HttpServiceService)
  {

  }


  ngOnInit()
  {
    this.getNewPuzzle()
    this.startTimer();
  }


  startTimer()
  {
    this.interval = setInterval(() =>{
      this.time++;
      this.display_timer = this.transform(this.time)

    }, 1000)
  }


  transform(value:number)
  {
    const minutes:number= Math.floor(value / 60);
    return minutes + ':'  + (value - minutes * 60)
  }


  async getNewPuzzle()
  {
    let puzzle_data:any = await this.appService.get(ConstantsServiceService.get_url() + "new-puzzle")
    this.puzzle = puzzle_data['puzzle']
    this.solution = puzzle_data['solution']
  }


  getCellValue(cell_index:number)
  {
    if(Object.keys(this.puzzle).length != 0)
    {
    let row:number = Math.floor(cell_index / 9);
    let col:number = cell_index % 9;
    return this.puzzle[row.toString()][col.toString()]
    }

  }

}
