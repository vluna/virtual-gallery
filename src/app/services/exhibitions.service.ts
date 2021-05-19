import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

export interface Exhibitions {
  id: number;
  slug: string;
  name: string;
  desc: string;
  img: string;
  has_donnes: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ExhibitionsService {
	URL: string = 'https://www.collectionartnb.ca/exhibitions';
	httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
  	private http: HttpClient
  ) { }

  // Read
  // showExhibitions() {
  // 	console.log(this.http.get(`${this.URL}`));
  //   return this.http.get(`${this.URL}`);
  // }

  getAll() {
    return this.http
      .get<Exhibitions[]>(this.URL)
      .pipe(map(data => data), catchError(this.handleError));
  }

  // getExhibitions(): Observable<Exhibitions[]> {
  // 	console.log(this.http.get<Exhibitions[]>(this.URL))
  //   // return this.http.get<Exhibitions[]>(this.URL)
  //   //   .pipe(
  //   //     tap(_ => console.log('fetched heroes')),
  //   //     catchError(this.handleError<Exhibitions[]>('getExhibitions', []))
  //   //   );
  // }

    // Handle Errors 
 /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

//   // Create
//   createTask(data): Observable<any> {
//     let API_URL = `${this.apiUrl}/create-task`;
//     return this.http.post(API_URL, data)
//       .pipe(
//         catchError(this.error)
//       )
//   }

//   // Read
//   showTasks() {
//     return this.http.get(`${this.apiUrl}`);
//   }

//   // Update
//   updateTask(id, data): Observable<any> {
//     let API_URL = `${this.apiUrl}/update-task/${id}`;
//     return this.http.put(API_URL, data, { headers: this.headers }).pipe(
//       catchError(this.error)
//     )
//   }

//   // Delete
//   deleteTask(id): Observable<any> {
//     var API_URL = `${this.apiUrl}/delete-task/${id}`;
//     return this.http.delete(API_URL).pipe(
//       catchError(this.error)
//     )
//   }

// }