import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatPaginatorModule,
         MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { GiphyItemComponent } from './giphy-item/giphy-item.component';



@NgModule({
  declarations: [SearchComponent, GiphyItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatToolbarModule
  ]
})
export class SearchModule { }
