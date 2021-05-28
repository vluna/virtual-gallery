import { Component, OnInit, Input, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExhibitionsService } from '../services/exhibitions.service';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css']
})

export class ExhibitionsComponent implements OnInit, AfterViewChecked {
  loading: boolean = true;
	exhibitions: any = [];
  currentYear: number = new Date().getFullYear();
  filterText: string;
  filterMetadata: any = {};

  constructor(
  	private httpClient: HttpClient,
  	private exhibitionsService: ExhibitionsService,
  	private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
  	this.loading = true;
    this.exhibitionsService.getAll().then((res) => {
    	this.exhibitions = res;
    	this.loading = false;
      this.filterMetadata = {
        count: this.exhibitions.length
      };
    }, (err) => {
		  this.snackBar.open(err, "", {
    		horizontalPosition: "center",
    		verticalPosition: "top"
		  });
    });
  }

  ngAfterViewChecked() : void {
    this.cdr.detectChanges();
  }
}