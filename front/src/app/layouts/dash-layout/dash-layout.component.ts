import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dash-layout.component.html',
  styleUrls: ['./dash-layout.component.scss']
})
export class DashLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {


  }
  ngOnDestroy() {

  }
}
