import { ingredients } from "./ingredients"

export interface Recipe{
    id: number;
    menuName: string;
    ingredients: ingredients[];
}