export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
  }
  
export interface Review {
    id: number;
    author: string;
    avatar: string;
    rating: number;
    text: string;
  }
  
  export interface MenuItem {
    icon: string;
    label: string;
    active?: boolean;
  }
  
  export interface StatItem {
    value: string;
    label: string;
  }
  
  export interface NavItem {
    icon: string;
    label: string;
    active?: boolean;
  }
  