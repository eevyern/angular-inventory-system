import { Component } from '@angular/core';

import { items } from '@core/mocks/items';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  items = items;
}
