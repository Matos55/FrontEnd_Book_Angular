import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookByIdResponse: any;
  bookByIdMap: any;
  bookByIdMap2: any;

  constructor(
    private data: BooksService,
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activedRoute.paramMap.subscribe((params: ParamMap) => {
      //console.log(params);

      this.data.getBookByID(params.get('matosid')).subscribe(response =>
        {
          this.bookByIdResponse = response;
          console.log(this.bookByIdResponse);
  
          this.bookByIdMap = Array.of(this.bookByIdResponse.details);
          console.log(this.bookByIdMap);
  
          this.bookByIdMap2 = this.bookByIdMap.map( r => {
              return {
                authorName: r.authors? r.authors[0].name : 'There is no Author available',
                //authorKey: r.authors[0].key, // filtrar a key para pesquisar por author?
                cover: r.cover? r.cover : 'There is no Cover available' ,
                description: r.description? r.description : 'There is no Description available',
                // bookKey: r.key, // filtrar a key para pesquisar por livro?
                title: r.title? r.title : 'There is no Title available',
              }
            })
          console.log(this.bookByIdMap2);
        });
    })
  }

}
