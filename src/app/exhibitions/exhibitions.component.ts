import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

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
	URL: string = 'https://www.collectionartnb.ca/exhibitios';
	EXHIBITIONS: any = []

  constructor(
  	private httpClient: HttpClient,
  	private _snackBar: MatSnackBar
  ) { }



  openSnackBar() {
  }


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
							response.total_artwork,
							response.artworks
						)
        	});
        	resolve();
        }, error => {
				  this._snackBar.open("Error: Unable to load exhibitions", "", {
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