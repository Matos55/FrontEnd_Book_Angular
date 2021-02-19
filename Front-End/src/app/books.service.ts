import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 /************ interfaces ************/
interface BookList {
  id: string,
  title: string
}

interface BookById {
  authorName: string[]
  cover: string
  description: string
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  /************ variaveis ************/
  
  _url = `http://localhost:3000/books?id=OL24369555M&format=json&jscmd=details`
  _url2 = 'http://localhost:3000/search?author=tolkien' 
  

  
  constructor(private http: HttpClient) { }



  /************ formulas ************/

  // 'tolkien' ==> Exemplo
  getAllBooksByAuthor(term: string): Observable<BookList[]> {
    return this.http.get<BookList[]>(`http://localhost:3000/search?author=${term}`);
  }
  
  // 'OL10682512M' ==> Exemplo
  getBookByID(id: string): Observable<BookById[]> {
    return this.http.get<BookById[]>(`http://localhost:3000/books?id=${id}&format=json&jscmd=details`)
  }


}
