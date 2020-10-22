import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-contable',
  templateUrl: './estado-contable.component.html',
  styleUrls: ['./estado-contable.component.css']
})
export class EstadoContableComponent implements OnInit {
  public breadcrumb: any;
  rows= [
    { "name": "Marban", "position": "Otto", "office": "@mdo", "age": "34", "salary": "16000", "startdate": "16/05/2017"},
    { "name": "Jacob", "position": "Thornton", "office": "@fat", "age": "36", "salary": "12000", "startdate": "16/05/2017"},
    { "name": "Albart", "position": "the Bird", "office": "@twitter", "age": "38", "salary": "12000", "startdate": "16/05/2017"},
    { "name": "Marken", "position": "Otto", "office": "@mdo", "age": "32", "salary": "12000", "startdate": "26/05/2017"},
    { "name": "Jacob", "position": "Thornton", "office": "@fat", "age": "34", "salary": "67000", "startdate": "16/05/2017"},
    { "name": "Larry", "position": "the Bird", "office": "@twitter", "age": "39", "salary": "22000", "startdate": "16/05/2017"},
    { "name": "Margi", "position": "Otto", "office": "@mdo", "age": "31", "salary": "42000", "startdate": "16/05/2017"},
    { "name": "Jhon", "position": "Thornton", "office": "@fat", "age": "40", "salary": "52000", "startdate": "16/05/2017"},
    { "name": "Larry", "position": "the Bird", "office": "@twitter", "age": "48", "salary": "20000", "startdate": "16/05/2018"},
    { "name": "Mark", "position": "Otto", "office": "@mdo", "age": "36", "salary": "12000", "startdate": "16/05/2017"},
    { "name": "Jacob", "position": "Thornton", "office": "@fat", "age": "33", "salary": "12000", "startdate": "16/05/2017"},
    { "name": "Larry", "position": "the Bird", "office": "@twitter", "age": "34", "salary": "19000", "startdate": "16/05/2017"}
  ]
  constructor() { }
 
  
  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Estado contable',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
        {
          'name': 'Facturación',
          'isLink': true,
          'link': '/news-feed/news-feed'
        },
        {
          'name': 'Estado contable',
          'isLink': false
        }
      ]
    };

  }

}
