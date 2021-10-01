import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import Automobile from "src/app/Models/Automobile";
import { AutomobileService } from "src/app/Services/Automobile.Service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  type!: string;
  chassi!: string;
  brand!: string;
  model!: string;
  modelYear!: number;
  factoryYear!: number;
  
  constructor(private automobileService: AutomobileService, private router: Router) { }

  ngOnInit(): void {
  }

  createAutomobile(): void {
    let automobileCreate: Automobile = {
      type: this.type,
      chassi: this.chassi,
      brand: this.brand,
      model: this.model,
      modelYear: this.modelYear,
      factoryYear: this.factoryYear
    }
    this.automobileService.createAutomobile(automobileCreate).subscribe(() => {
      this.router.navigate([""]);
    });
  }

}
