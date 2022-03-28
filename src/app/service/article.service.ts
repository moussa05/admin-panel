import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Article } from '../models/article.model';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[];
  articlesSubject: Subject<Article[]>;

  constructor(private http: HttpClient) {
    this.articles = [];
    this.articlesSubject = new Subject<any[]>();
  }
  //emmitArticlesSubject()
  emmitArticlesSubject() {
    this.articlesSubject.next(this.articles.slice());
  }
  public async getAll() {
    try{
      const result = await <any>this.http.get('http://127.0.0.1:8000/api/article/6371/magasin/2/all').toPromise();
      if (result.status == 200) {
        this.articles = <Article[]>result.articles;
        this.emmitArticlesSubject();
      }
    }catch (error) {

    }
  }
}
