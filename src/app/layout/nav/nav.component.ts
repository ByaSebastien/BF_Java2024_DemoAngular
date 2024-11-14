// Importing the Component decorator from Angular core to define the class as a component.
import { Component } from '@angular/core';
// Importing the Link interface/model to define the structure of navigation links.
import { Link } from '../../shared/models/link';

@Component({
  selector: 'app-nav',
  /* Defines the custom HTML tag used to represent this component: <app-nav>. */

  templateUrl: './nav.component.html',
  /* Points to the external HTML file containing the component's template. */

  styleUrl: './nav.component.scss'
  /* Points to the external SCSS file containing styles specific to this component. */
})
export class NavComponent {
  /* Defining the NavComponent class, which contains the logic and data for the navigation menu. */

  // Array of links for the navigation menu, with each link defined by the Link interface.
  links: Link[] = [
    {
      title: 'Home', // Text displayed for the link.
      url: '/home' // URL path the link navigates to.
    },
    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'Demo',
      isChildrenVisible: false, // Indicates whether child links are visible.
      children: [ // Array of child links for this menu item.
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

  // Method to toggle the visibility of child links for a given link.
  toggleIsVisible(link: Link) {
    if (!link.children) {
      // If the link has no children, do nothing and exit the method.
      return;
    }

    // Collapse all other links' children except the one being toggled.
    for (let l of this.links) {
      if (l !== link) {
        l.isChildrenVisible = false;
      }
    }

    // Toggle the visibility of the children for the selected link.
    link.isChildrenVisible = !link.isChildrenVisible;
  }
}
