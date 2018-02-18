import { Component, OnInit } from '@angular/core';
import { ShoeService } from './shoe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IShoe, Shoe } from './shoe';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './edit-shoe.component.html',
  styleUrls: ['./edit-shoe.component.css']
})

export class EditShoeComponent implements OnInit {
  pageTitle: string = 'Edit Shoe';
  errorMessage: string;
  shoe: IShoe = new Shoe(null, '', '', '', '', null, null);
  statusCode: number;
  shoeForm = new FormGroup({
    articleNumber: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required)
  });

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _shoeService: ShoeService) { }

    ngOnInit() {
      const param = this._route.snapshot.paramMap.get('id');
      if (param) {
        const id = +param;
        this.getShoe(id);
      }
    }
  
    getShoe(id: number) {
      this._shoeService.getShoe(id).subscribe(
        shoe => {
          this.shoe = shoe;
          this.shoeForm.setValue({articleNumber:shoe.articleNumber, name:shoe.name, brand:shoe.brand,
          color:shoe.color, size:shoe.size, stock:shoe.stock});
        },
        error => this.errorMessage = <any>error);
    }
  
    updateShoeOnSubmit() {
      let name = this.shoe.name.trim();
      let brand = this.shoe.brand.trim();
      let color = this.shoe.color.trim();
      let size:number = this.shoe.size;
      let stock:number = this.shoe.stock;
      let shoe= new Shoe(null, null, name, brand, color, size, stock);
      this._shoeService.updateShoe(shoe, this.shoe.id).subscribe(successCode => {
        this.statusCode = successCode;
        this.onBack();
      },
      errorCode => this.statusCode = errorCode);
    }
    onBack(): void {
      this._router.navigate(['/shoes']);
    }

    resetValidation() {
      this.shoeForm.reset();
    }
}
