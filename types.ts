export interface NavItem {
  label: string;
  href: string;
}

export interface KPI {
  value: string;
  label: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Persona {
  role: string;
  painPoint: string;
}