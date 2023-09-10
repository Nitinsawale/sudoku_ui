import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule} from '@angular/material/grid-list';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SudokuRoutingModule } from './sudoku-routing.module';
import { SudokuSolverComponent } from './sudoku-solver/sudoku-solver.component';
import { MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    SudokuSolverComponent
  ],
  imports: [
    CommonModule,
    SudokuRoutingModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule

  ]
})
export class SudokuModule { }
