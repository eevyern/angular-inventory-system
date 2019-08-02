import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { items } from '@core/mocks/items';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item;
  itemID;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item = items[+params.get('itemID')];
      this.itemID = +params.get('itemID');
    });
  }

}
