import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public items: any = [];

  constructor() {
    this.items = [
      { title: 'First List', body: 'Item in the first list', expanded: false },
      { title: 'Second List', body: 'Item in the second list', expanded: false },
      { title: 'Third List', body: 'Item in the third list', expanded: false },
      { title: 'Fourth List', body: 'Item in the fourth list', expanded: false },
      { title: 'Fifth List', body: 'Item in the fifth list', expanded: false },
      { title: 'Sixth List', body: 'Item in the sixth list', expanded: false },
      { title: 'Seventh List', body: 'Item in the seventh list', expanded: false },
      { title: 'Eighth List', body: 'Item in the eighth list', expanded: false },
      { title: 'Ninth List', body: 'Item in the ninth list', expanded: false },
    ];
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}