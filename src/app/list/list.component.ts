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
  ngOnInit() {
    let cek = this.route.snapshot.paramMap.get('jur');
    let cek2 = this.route.snapshot.paramMap.get('des');
    this.list.push(cek);
    this.list.push(cek2);
  }
}