import { Component, OnInit,  Output, EventEmitter  } from '@angular/core';
import { BooksService } from '../books.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-aside-book-list',
  templateUrl: './aside-book-list.component.html',
  styleUrls: ['./aside-book-list.component.css']
})
export class AsideBookListComponent implements OnInit {

  private bookListResponse;   // lista de todos os livros 
  public bookListMap = new Map(); // usar interfaces
  public terms$ = new Subject<string>();
  @Output() clickHome = new EventEmitter<void>();
  matos

  constructor( private data: BooksService ) { }

  ngOnInit() {

        /***************************************** getbooks by Author ***********************/
    
    // sugestão parao futuro: falta criar um filtro para nao estar sempre a chamar resultados em branco

    this.terms$.pipe(     // receber o input do keyup
      debounceTime(1000), // discard emitted values that take less than the specified time between output
      distinctUntilChanged() // only emit when value has changed
    ).subscribe(term => {

      this.data.getAllBooksByAuthor(term).subscribe(  // função get
        response => { 
          
          this.bookListResponse = response;
          console.log(this.bookListResponse.docs);
          
          /* filtrar para aquilo que nos queremos ===> criar uma formula para tornar o codigo mais legivel? */
          this.bookListMap = this.bookListResponse.docs.map( r => {
            return {
              id: r.id,
              title: r.title,
            };
          })

          if(response) {
            hideloader('none');    /* toggle, então ativar a formula para remover o loading */
          };

          console.log(this.bookListMap);
        });

      function hideloader(term: any) {
        document.getElementById('loading').style.display = term;    // .style só existe em getElementById  e não em querySelector.
      };

    });

  }

  onHome() {
    console.log('goHome link was clicked');
    this.clickHome.emit();
  }
}
