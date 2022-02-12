import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Article } from '../article.model';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  articleId!: number;
  articleDetail!: Article;
  constructor(private activatedRoute: ActivatedRoute, private articlesService: ArticlesService, private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      
      if (params.get('id') == null) {
        this.route.navigate(['article-lists']);
      } else {
        this.articleId = Number(params.get('id'));
        this.fillUserDetails(this.articleId);
      }
    })
  }

  fillUserDetails(id: number) {
    this.articlesService.getArticleById(this.articleId).subscribe(data => {
      this.articleDetail = data;
    },
    error => console.log("Error " + error.message)
    )
  }

}
