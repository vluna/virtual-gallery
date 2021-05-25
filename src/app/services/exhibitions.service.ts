import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

class Exhibition {
  constructor(
    public id: number,
    public slug: string,
    public title: string,
    public description: string,
    public image: string,
    public total: number,
    public artworks: []
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class ExhibitionsService {
	URL: string = 'https://www.collectionartnb.ca/exhibitions';
	EXHIBITIONS: any = [];
	EXHIBITION: any;

  constructor(
  	private httpClient: HttpClient,
  ) { }

	getAll() {
		const promise = new Promise<void>((resolve, reject) => {
      let endPoint = this.URL;
      this.httpClient
        .get<Exhibition[]>(endPoint)
        .toPromise()
        .then((res: any) => {
        	this.EXHIBITIONS = res.map((response: any) => {
        		return new Exhibition(
							response.id,
							response.slug,
							response.title,
							response.description,
							response.image,
							response.total,
							response.artworks
						)
        	});
        	resolve(this.EXHIBITIONS);
        }, error => {

          reject("Error: Unable to load exhibitions.");
        }
      );
    });
    return promise;
	}

	getById(slug) {
		const promise = new Promise<void>((resolve, reject) => {
      let endPoint = `${this.URL}/${slug}`;
      this.httpClient
        .get<Exhibition[]>(endPoint)
        .toPromise()
        .then((res: any) => {
      		this.EXHIBITION = new Exhibition(
						res.id,
						res.slug,
						res.title,
						res.description,
						res.image,
						res.total,
						res.artworks
					)
        	resolve(this.EXHIBITION);
        }, error => {
          reject("Error: Unable to load exhibition.");
        }
      );
    });
    return promise;
	}
}