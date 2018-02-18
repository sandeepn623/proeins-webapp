import { Component, OnInit} from '@angular/core';
import { IShoe } from './shoe';
import { Shoe } from './shoe';
import { ShoeService } from './shoe.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-shoe.component.html',
  styleUrls: ['./create-shoe.component.css']
})

export class CreateShoeComponent implements OnInit {
  pageTitle: string = 'Create Shoe';
  shoe:IShoe = new Shoe(null, '', '', '', '', null, null);
  statusCode: number;

  constructor(private shoeService: ShoeService,
              private _router : Router) { 

  }

  createShoeOnSubmit() {
    let articleNumber = this.shoe.articleNumber.trim();
    let name = this.shoe.name.trim();
    let brand = this.shoe.brand.trim();
    let color = this.shoe.color.trim();
    let size:number = this.shoe.size;
    let stock:number = this.shoe.stock;
    console.log(articleNumber + " " + name + " " + brand + " " + color + " " + size + " " + stock)
    let shoe= new Shoe(null, articleNumber, name, brand, color, size, stock);
    this.shoeService.createShoes(shoe).subscribe(successCode => {
      this.statusCode = successCode;	
      this.onBack();
      },
      errorCode => this.statusCode = errorCode);
  }

  ngOnInit() {
    console.log("create shoe in ngOnInit");
  }

  onBack() : void {
    this._router.navigate(['/shoes']);
  }
}
