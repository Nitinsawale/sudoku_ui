import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SudokuSolverComponent } from './sudoku-solver/sudoku-solver.component';

const routes: Routes = [{
  "path":"",
  component:SudokuSolverComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SudokuRoutingModule { }
