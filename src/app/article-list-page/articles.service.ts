import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private readonly BASE_URL = environment.baseUrl;
  private readonly SPECIFIC_URL = {
    all: '/all',
    getById: '/id',
    article: '/article'
  }
  
  constructor(private httpClient: HttpClient) { }
  
  public getAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.BASE_URL}${this.SPECIFIC_URL.all}`);
  }

  public getArticleById(id: number): Observable<Article> {
    return this.httpClient.get<Article>(`${this.BASE_URL}/${id}`);
  }

  public createArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(`${this.BASE_URL}${this.SPECIFIC_URL.article}`, article);
  }

  public deleteArticle(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}/delete/${id}`);
  }
}
