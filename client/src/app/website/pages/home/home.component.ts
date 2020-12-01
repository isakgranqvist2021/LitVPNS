import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';
import { SocketsService } from '../../services/sockets/sockets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public products: Array<Product>;
  public renderedProducts: Array<Product>;

  constructor(private readService: ReadService, private socketsService: SocketsService) {}

  ngOnInit(): void {
    this.connect();
    this.readProducts();
  }

  connect() {
    this.socketsService.connect("aws");
  }
  
  readProducts() {
    this.readService.readProducts()
    .subscribe((response: HttpResponse) => {
      this.products = response.data;
      this.renderedProducts = this.products;
    });
  }

  childUpdate(filter: string) { 
    // when the user clicks "apply filters" this method gets called
    /*
        all
        free
        discount
        linux
        windows
        iOS
        moneybackguarantee
    */
    this.renderedProducts = this.filter(filter);
  }


  filter(filter): Array<Product> {
    switch(filter) {
      case "all": return this.products;

      case "free": return this.products.filter(element => element.freeOption);
      case "discount": return this.products.filter(element => element.onSaleData.onSale);
      case "recommended": return this.products.filter(element => element.priority);
      case "moneybackguarantee": return this.products.filter(element => element.moneyBack);

      case "windows": return this.products;
      case "ios": return this.products;
      case "android": return this.products;
      case "linux": return this.products;
      case "support": return this.products;

      default: return this.products;
    }
  }

  /*
  filterByKey(filter): Array<Product> {
    let products: Array<Product> = [];

    this.products.forEach(element => {
      element.features.forEach(i =>  { 
        if(i.key === filter) return products.push(element); 
      });
    });

   return products;
  }

  filterByValue(filter: string): Array<Product> {
    let products: Array<Product> = [];

     this.products.forEach(element => {
      element.features.filter(i => {
        if(i.value.includes(filter)) return products.push(element);
      });
    });

    return products;
  }
  */
}