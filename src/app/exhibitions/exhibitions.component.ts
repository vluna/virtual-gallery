import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

class Exhibition {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public image: string,
    public total: number,
    public artworks: []
  ) {}
}

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css']
})



export class ExhibitionsComponent implements OnInit {
  loading: boolean = true;
	URL: string = 'https://www.collectionartnb.ca/exhibitions';
	EXHIBITIONS: any = []

  constructor(
  	private httpClient: HttpClient,
  	private snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
  	this.loading = true;
    this.getAll().then(() => {
    	this.loading = false;
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
							response.total,
							response.artworks
						)
        	});
        	resolve();
        }, error => {
				  this.snackBar.open("Error: Unable to load exhibitions", "", {
	      		horizontalPosition: "center",
	      		verticalPosition: "top"
				  });

          reject();
        }
      );
    });
    return promise;
	}
}