import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Exhibition {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public image: string,
    public total_artwork: number,
    public artworks: []
  ) {}
}

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css']
})



export class ExhibitionsComponent implements OnInit {
	title: string = "Exhibitions"
  loading: boolean = true;
	URL: string = 'https://www.collectionartnb.ca/exhibitions';
	EXHIBITIONS: any = []

  constructor(
  	private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  	this.loading = true;
    console.log("Angular 11 Promises");
    this.getAll().then(() => {
    	console.log(this.EXHIBITIONS);
    });
  }

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
							response.title,
							response.description,
							response.image,
							response.total_artwork,
							response.artworks
						)
        	});
        	resolve();
        }, error => {
          reject(error);
        }
      );
    });
    return promise;
	}
}