import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-list-page/article-details/article-details.component';
import { ArticleListPageComponent } from './article-list-page/article-list-page/article-list-page.component';

const routes: Routes = [
  {path: "article-lists", component: ArticleListPageComponent},
  {path: "articleDetails/:id", component: ArticleDetailsComponent},
  {path: "", redirectTo: "article-lists", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
