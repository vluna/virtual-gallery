import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExhibitionsService } from '../services/exhibitions.service';


@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css']
})

export class ExhibitionsComponent implements OnInit {
  loading: boolean = true;
	URL: string = 'https://www.collectionartnb.ca/exhibitions';
	exhibitions: any = []

  constructor(
  	private httpClient: HttpClient,
  	private exhibitionsService: ExhibitionsService,
  	private snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
  	this.loading = false;
  	this.exhibitionsService.getAll().subscribe(exhibitions => this.exhibitions = exhibitions);
    // this.getAll().then(() => {
    // 	this.loading = false;
    // });
  }

	// getAll() {
	// 	const promise = new Promise<void>((resolve, reject) => {
 //      let endPoint = this.URL;
 //      this.httpClient
 //        .get<Exhibition[]>(endPoint)
 //        .toPromise()
 //        .then((res: any) => {
 //        	this.EXHIBITIONS = res.map((response: any) => {
 //        		return new Exhibition(
	// 						response.id,
	// 						response.title,
	// 						response.description,
	// 						response.image,
	// 						response.total,
	// 						response.artworks
	// 					)
 //        	});
 //        	resolve();
 //        }, error => {
	// 			  this.snackBar.open("Error: Unable to load exhibitions", "", {
	//       		horizontalPosition: "center",
	//       		verticalPosition: "top"
	// 			  });

 //          reject();
 //        }
 //      );
 //    });
 //    return promise;
	// }
}