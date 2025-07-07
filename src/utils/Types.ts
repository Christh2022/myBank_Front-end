import type { IconType } from "react-icons";

export type User = {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    addresse: string;
    telephone: string;
    role: string;
    profile?: string
    expenses?: Expenses[]
  };
  
export type TransactionCategory = {
    key: string;
    icon: IconType;
    label: string;
};
  
export type Category = {
    id: number;
    title: string;
    icon_name: string;
    description?: string | null
}

export type Expenses = {
    id: number;
    date: Date;
    amout: string;
    label: string;
    category: Category
}