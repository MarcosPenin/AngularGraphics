import { Component } from '@angular/core';

interface MenuItem{
  route:string;
  text:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent   {

menu:MenuItem[]=[
  {route:"./graphics/bars", text:"Bars"},
  {route:"./graphics/doublebars", text:"Double bars"},
  {route:"./graphics/dona", text:"Dona"},
  {route:"./graphics/donahttp", text:"Dona http"},
]


}
