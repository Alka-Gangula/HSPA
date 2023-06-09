import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';
import { Property } from '../model/property';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllProperties(SellRent:number):Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=>{
        const propertiesArray:Array<IProperty>=[];
        for(const id in data){
          if(data.hasOwnProperty(id)  && data[id].SellRent===SellRent){
            propertiesArray.push(data[id] );
          }
        }
        return propertiesArray;
      })
    )
    return this.http.get<IProperty[]>('data/properties/json');
  }
  addProperty(property:Property){
    localStorage.setItem('newProp',JSON.stringify(property));
  }
}
