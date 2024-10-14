import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  toAddtext: any;
  showListData:any;
  listData:any[]=[];
  storedList: any[]=[]; 
  ngOnInit(): void {
    this.showList();
  }
  title = 'to-do-list';

  add(){
    this.storedList.push(this.toAddtext);
    localStorage.setItem('list',JSON.stringify(this.storedList));
    this.showList();

  }

  showList(){
  this.showListData = localStorage.getItem('list')
  this.listData = JSON.parse(this.showListData);
  }
    removeItem(index: number) {
      this.listData.splice(index, 1);
      localStorage.setItem('list', JSON.stringify(this.listData));
    }
}
