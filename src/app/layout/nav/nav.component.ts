import { Component } from '@angular/core';
import {Link} from '../../shared/models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  links: Link[] = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'Demo',
      isChildrenVisible: false,
      children: [
        {
          title: 'Bindings',
          url: '/demo/demo01'
        },
        {
          title: 'Pipes',
          url: '/demo/demo02'
        },
        {
          title: 'Directives',
          url: '/demo/demo03'
        },
        {
          title: 'Input / Output',
          url: '/demo/demo04'
        },
        {
          title: 'Formulaire',
          url: '/demo/demo05'
        },
      ],
    },
    {
      title: 'Exo',
      isChildrenVisible: false,
      children: [
        {
          title: 'Timer',
          url: 'exo/exo01'
        },
        {
          title: 'Shopping list',
          url: 'exo/exo02'
        },
      ],
    },
  ];

  toggleIsVisible(link: Link) {
    if(!link.children){
      return;
    }
    for(let l of this.links){
      if(l !== link){
        l.isChildrenVisible = false;
      }
    }
    link.isChildrenVisible = !link.isChildrenVisible;
  }
}
