import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  i:number;j:number;
  list: String[];
  jur : string;
  des : string;
  ngOnInit() {
    let cek = this.route.snapshot.paramMap.get('jur');
    this.jur = cek;
    let cek2 = this.route.snapshot.paramMap.get('des');
    this.des = cek2;
    this.list.push(this.jur);
    this.list.push(this.des);
  }
}