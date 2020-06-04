import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-layout',
  templateUrl: './stock-layout.component.html',
  styleUrls: ['./stock-layout.component.scss']
})
export class StockLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {


  }
  ngOnDestroy() {

  }
}
