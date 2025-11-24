import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  icon: LucideIcon;
  description?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}