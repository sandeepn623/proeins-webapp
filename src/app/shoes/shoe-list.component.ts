import { Component, OnInit } from "@angular/core";
import { Shoe } from "./shoe";
import { ShoeService } from "./shoe.service";

@Component({
    templateUrl:'./shoe-list.component.html',
    styleUrls: ['./shoe-list.component.css']
})

export class ShoeListComponent implements OnInit {
    pageTitle:string = "Shoe List";
    errorMessage: string;
    statusCode: number;
    shoes: Shoe[] = [];

    constructor(private _shoeService : ShoeService) {
    }

    deleteShoe(id: string) {
        this._shoeService.deleteShoe(id)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getShoes();	
             },
        errorCode => this.statusCode = errorCode);    
     }
    
    getShoes() {
        this._shoeService.getShoes()
        .subscribe( shoes => {
            this.shoes = shoes;
        },
        error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        console.log('In OnInit');
        this.getShoes();
    }
}