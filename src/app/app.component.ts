import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Test } from '../models/test.entity';
import { TestService } from './services/test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  tests: Test[];

  constructor(private testService: TestService) {}


  ngOnInit() {
      this.loadData();
  }

  loadData() {
     this.testService.findall()
      .subscribe(
        data => console.log(data),
        error => console.error(error),
      );

    }

}
