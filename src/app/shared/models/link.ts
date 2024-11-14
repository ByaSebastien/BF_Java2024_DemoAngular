/*
 * Defining an interface named Link.
 * This interface represents the structure of a navigation link in your application.
 * It includes properties for the link's title, URL, visibility of child links, and nested child links.
 */
export interface Link {
  /*
   * The 'title' property represents the display text for the link.
   * It is of type 'string' and is required, meaning every Link object must have a title.
   */
  title: string;

  /*
   * The 'url' property specifies the URL or path the link points to.
   * It is of type 'string' and is optional, indicated by the '?'.
   * If not provided, the link might be a parent link without direct navigation.
   */
  url?: string;

  /*
   * The 'isChildrenVisible' property determines if the children of this link are currently visible.
   * It is of type 'boolean' and is optional.
   * This is typically used for dropdown or collapsible menus.
   */
  isChildrenVisible?: boolean;

  /*
   * The 'children' property contains an array of child links, each conforming to the Link interface.
   * It is optional and allows for nesting links to create hierarchical navigation structures.
   */
  children?: Link[];
}
