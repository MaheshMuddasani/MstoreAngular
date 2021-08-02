import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.httpClientService.deleteBook(this.product.id).subscribe(
      (book) => {
        this.router.navigate(['admin', 'books']);
      }
    );
  }

}
