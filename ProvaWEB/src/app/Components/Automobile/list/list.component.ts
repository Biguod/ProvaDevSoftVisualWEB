import { AutomobileService } from 'src/app/Services/Automobile.Service';
import { Component, OnInit } from '@angular/core';
import Automobile from 'src/app/Models/Automobile';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  automobiles!: Automobile[];

  constructor(private service: AutomobileService) { }

  ngOnInit(): void {
    this.service.listAutomobiles().subscribe((automobile) => {
      this.automobiles = automobile;
      console.log(this.automobiles);
    })
  }

}
