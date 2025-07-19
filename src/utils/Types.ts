import type { IconType } from "react-icons";

export type User = {
    id: number;
    lastName: string;
    firstName: string;
    email: string;
    address: string;
    city: string;
    country: string;
    zip: string;
    phone: string;
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

export type RowData = {
    id: number;
    date: string;
    amount: string;
    payement_name: string;
    method: string;
    category: string;
    status: string;
};