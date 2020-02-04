import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Item } from "./item";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    items: Item [];

    constructor(private http: HttpClient) { }

    getItems(): Observable<Item[]> {
        let url = "https://api.jsonbin.io/b/5e0f707f56e18149ebbebf5f/2";
        let headerOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'secret-key': '$2b$10$Vr2RAD3mpzFZ6o8bPZNlgOOM0LmFLvN24IoxlELo3arTgNszX7otS'
            }
        };

        
        return this.http.get<Item[]>(url, headerOptions);
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
