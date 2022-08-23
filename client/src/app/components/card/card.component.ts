import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product: Product | null = null;

  constructor() {}

  getProductLink(product: Product | null) {
    if (!product) return;

    return `/visit?id=${product._id}`;
  }

  cutString(str: string) {
    if(str.length > 80) {
      return `${str.substring(0, 77)}...` 
    }

    return str;
  }
}