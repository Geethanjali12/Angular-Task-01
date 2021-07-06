import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

export interface PersonDetails {
  firstname: string;
  number: number;
  lastname: string;
  age: number;
}

const ELEMENT_DATA: PersonDetails[] = [
  {number: 1, firstname: 'Abi', lastname: 'Abi', age: 21},
  {number: 2, firstname: 'Durga', lastname: 'Durga', age: 20},
  {number: 3, firstname: 'Ram', lastname: 'Ram', age: 24},
  {number: 4, firstname: 'Sita', lastname: 'Sita', age: 25},
  {number: 5, firstname: 'Anitha', lastname: 'Anitha', age: 20},
  {number: 6, firstname: 'Sathish', lastname: 'Sathish', age: 18},
  {number: 7, firstname: 'Sam', lastname: 'Sam', age: 28},
  {number: 8, firstname: 'Saju', lastname: 'Saju', age: 26},
  {number: 9, firstname: 'Vimala', lastname: 'Vimala', age: 22},
  {number: 10, firstname: 'Anu', lastname: 'Anu', age: 21},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

  
    displayedColumns: string[] = ['number', 'firstname', 'lastname', 'age'];
    dataSource = ELEMENT_DATA;
    @ViewChild(MatTable)
  table!: MatTable<PersonDetails>;
 
  

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}

  
  

