import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private router: Router){}

  name = 'Angular';
  list : String[];
  list2 : String[];
  jurusan : string;
  deskripsi: string;
  Input(){
    this.router.navigate(['/list',this.jurusan, this.deskripsi]);
  }
}
