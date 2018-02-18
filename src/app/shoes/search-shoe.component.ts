import { Component, OnInit } from '@angular/core';
import { IShoe, Shoe } from './shoe';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShoeService } from './shoe.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './search-shoe.component.html',
  styleUrls: ['./search-shoe.component.css']
})
export class SearchShoeComponent implements OnInit {

  pageTitle: string = 'Search Shoe';
  shoe:IShoe;
  statusCode: number;
  shoes: IShoe[] = [];
  shoeForm = new FormGroup({
    id: new FormControl(''),
    articleNumber: new FormControl(''),
    name: new FormControl(''),
    brand: new FormControl(''),
    color: new FormControl(''),
    size: new FormControl(''),
    stock: new FormControl('')
  });
  
  constructor(private shoeService: ShoeService,
  private _router : Router) { }

  ngOnInit() {
  }

  searchShoeOnSubmit() {
    let id = this.shoeForm.get("id").value.trim();
    let articleNumber = this.shoeForm.get("articleNumber").value.trim();
    let name = this.shoeForm.get("name").value.trim();
    let brand = this.shoeForm.get("brand").value.trim();
    let color = this.shoeForm.get("color").value.trim();
    let size:number = this.shoeForm.get("size").value.trim();
    let stock:number = this.shoeForm.get("stock").value.trim();
    let shoe= new Shoe(id, articleNumber, name, brand, color, size, stock);
    this.shoeService.searchShoe(shoe).subscribe(shoes => {
      this.shoes = shoes;	
    },
    errorCode => this.statusCode = errorCode);
  }

  onBack() : void {
    this._router.navigate(['/shoes']);
  }
}
