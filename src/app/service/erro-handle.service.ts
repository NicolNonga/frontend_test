import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Ng2IzitoastService } from 'ng2-izitoast'

@Injectable({
  providedIn: 'root'
})
export class ErroHandleService {

  constructor(private notifyService: Ng2IzitoastService) { }

  public  herrorHanlde(error: HttpErrorResponse){

     this.handleError(error)

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      this.notifyService.error({title: 'info', message: error.error, position:'bottomLeft'})
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
     // this.notifyService.error({title: 'info', message: error.error, position:'bottomLeft'})
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
