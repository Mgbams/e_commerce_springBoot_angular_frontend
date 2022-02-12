import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListPageComponent } from './article-list-page/article-list-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ArticleFormComponent } from './article-form/article-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ArticleListPageComponent,
    ArticleFormComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule
  ]
})
export class ArticleListPageModule { }
