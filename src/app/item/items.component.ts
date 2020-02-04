import { Component, OnInit } from "@angular/core";
import { Item } from "./item";
import { ItemService } from "./item.service";


@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Item[];
    displayMap:Item[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        let cleanArray : Item [];
        this.itemService.getItems().subscribe(response => {
            this.items = response;

            //Clean the data from all falsy names
            cleanArray = this.items.filter((item) => { 
                return item.name;
            });

            cleanArray.sort( (item1, item2) => {
               // Sort by listID
            // If the first item has a higher number, move it down
            // If the first item has a lower number, move it up
            if (item1.listId > item2.listId) return 1;
            if (item1.listId < item2.listId) return -1;

            // If the listId number is the same between both items, sort alphabetically
            // If the first item comes first in the alphabet, move it up
            // Otherwise move it down
            // The result would be pure alphabetically
            if (item1.name > item2.name) return 1;
            if (item1.name < item2.name) return -1;


            // if we want to have a correct name order which order names like item 1, item 5, item 100, item 2 ...etc uncomment the below section
            // if (item1.id > item2.id) return 1;
            // if (item1.id < item2.id) return -1;
            });

            this.displayMap = cleanArray;
        });    
    }

    myGroupingFunc(item){
        return "Group of " + item.listId;
    }
}
