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
	exhibitions: any = []

  constructor(
  	private httpClient: HttpClient,
  	private exhibitionsService: ExhibitionsService,
  	private snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
  	this.loading = true;
    this.exhibitionsService.getAll().then((res) => {
    	this.exhibitions = res;
    	this.loading = false;
    }, (err) => {
		  this.snackBar.open(err, "", {
    		horizontalPosition: "center",
    		verticalPosition: "top"
		  });
    });
  }
}