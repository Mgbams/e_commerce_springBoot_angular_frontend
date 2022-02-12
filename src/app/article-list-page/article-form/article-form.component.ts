import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticlesService } from '../articles.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  articleForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private articlesService: ArticlesService, 
    private _snackBar: MatSnackBar, private route: Router) { }

  ngOnInit(): void {
    this.articleForm = this.fb.group({
      name: [''],
      description: [''],
      price: [],
      quantity: []
    })
  }

  submitForm() {
    const formContents = this.articleForm.value;
    this.articlesService.createArticle(formContents).subscribe({
      next: () => this.successfulSubmit(),
      error: () => this.errorDuringSubmission()
    })
  }

  successfulSubmit() {
    this._snackBar.open(`Article successfully created`, undefined, {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      duration: 2500,
      panelClass: 'custom-style'
    });

   // this.articlesService.getAllArticles()

    this.articleForm.reset();
    this.route.navigate(['article-lists']).then(() => {
      window.location.reload();
    });
  }

  errorDuringSubmission() {
    this._snackBar.open("Article couldn't be created",  undefined, {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      duration: 2500,
      panelClass: 'custom-style'
    });
  }

}
