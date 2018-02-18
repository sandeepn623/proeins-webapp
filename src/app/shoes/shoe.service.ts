import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IShoe } from './shoe'
@Injectable()
export class ShoeService {

    private _shoeUrl = "https://0540ebe6.eu.ngrok.io/shoe";
    constructor(private _http: HttpClient) {
        
    } 

    //Create Shoe
    createShoes(shoe: IShoe):Observable<number> {
        let cpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(this._shoeUrl, shoe, { headers: cpHeaders })
                   .catch(this.handleError);
        }

    //get all shoes
    getShoes() : Observable<IShoe[]> {
        return this._http.get<IShoe[]>(this._shoeUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    //delete shoe by Id
    deleteShoe(id: string) {
	    return this._http.delete(this._shoeUrl + "/" + id)
	       .catch(this.handleError);
    }

    //get shoe by Id
    getShoe(id: number): Observable<IShoe> {
        return this.getShoes()
            .map((shoes: IShoe[]) => shoes.find(shoe => shoe.id === id));
    }

    //Update shoe
    updateShoe(shoe: IShoe, id: number):Observable<number> {
        console.log(shoe + "id: " + id);
        let cpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
            return this._http.put(this._shoeUrl + "/" + id, shoe, { headers: cpHeaders })
                   .catch(this.handleError);
    }

    searchShoe(shoe: IShoe):Observable<IShoe[]> {
        let cpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
        const params = new HttpParams().set('search', 'id:'+ shoe.id.toString() + ',' + 'articleNumber:'  + shoe.articleNumber + ',' 
        + 'name:' + shoe.name + ',' + 'brand:' + shoe.brand + ',' + 'color:' + shoe.color + ',' + 'size:' + shoe.size.toString() + ',' + 'stock:' + shoe.stock.toString());
        console.log(params);
        return this._http.get<IShoe[]>(this._shoeUrl, { params })
        .do(console.log)
        .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse) {
        console.log(err.status);
        console.log(err.message);
        return Observable.throw(err.message);
    }
}