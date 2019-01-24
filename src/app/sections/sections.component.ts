import { Component, OnInit } from '@angular/core';
import * as data from '../data'
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  sections;
  constructor() { 
    this.sections = data.sections;
  }

  ngOnInit() {
  }

}
