import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
   public title: string;
   public listProduct: Product[];

  constructor() { }

  ngOnInit(): void {
  this.title= 'First Angular App';
  this.listProduct= [
    {
      picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-LS-GWaPDyRG1e2_t0z32CvGOyI0-V6R3IVghFlZtOtX1CSWdTXm7DnzxbmpcNPecQE&usqp=CAU',
      id: 1,
      title: 'T-shirt 1',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price :120,
      quantity:0,
      like: 12
    },
    {
      id: 2,
      title: 'T-shirt 2',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price :100,
      quantity:10,
      picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5lxWaLVr5pM0NxHVypIyBoX-ldcrqwu247qojnx2DLbPWZoCi4yJo6hjXVOvrFcS1C58&usqp=CAU',
      like: 15
    },
    {
      id: 3,
      title: 'T-shirt 3',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price :50,
      quantity:15,
      picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMWH8cThakZtoNLv5BMwuGqnmu3zCA98GslDTXCEw0cB-nonmX5vvf_XgbejVSh--WSI&usqp=CAU',
      like: 50
    },
    {
      id: 4,
      title: 'T-shirt 4',
      description:'Nullam sed libero elit. Nunc non ex accumsan ipsum tincidunt iaculis.',
      price :20,
      quantity:6,
      picture:'https://webplus.tn/wp-content/uploads/2021/07/tshirt-2.jpg',
      like: 25
    },
    {
      id: 5,
      title: 'T-shirt 5',
      description:'Ut pharetra nisl ac felis blandit, id accumsan turpis tristique',
      price :150,
      quantity:50,
      picture:'https://megamondeprint.com/pharsuzu/2018/07/long-sleeve-tee-2.jpg',
      like: 50
    }
  ]
  }

}
