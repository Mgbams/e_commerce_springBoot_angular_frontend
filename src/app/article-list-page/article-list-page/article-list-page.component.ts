import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article.model';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-list-page',
  templateUrl: './article-list-page.component.html',
  styleUrls: ['./article-list-page.component.css']
})
export class ArticleListPageComponent implements OnInit {

  listOfArticles: Article[] = [];
  displayedColumns: string[] = ['name', 'description', 'price', 'quantity', 'actions'];

  constructor(private articleService: ArticlesService, private route: Router) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((response: Article[]) => this.listOfArticles = response);
  }

  removeArticle(id: number): void {
    const updateId = Number(id);
    this.articleService.deleteArticle(updateId).subscribe(data => console.log('deleted'));
    this.route.navigate(['article-lists']).then(() => {
      window.location.reload();
    });
  }

}
