import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SudokuSolverComponent } from './sudoku/sudoku-solver/sudoku-solver.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"sudoku",
    pathMatch:"full"
  },
  {
    path:'sudoku',
    loadChildren: () => import("./sudoku/sudoku.module").then(m => m.SudokuModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
