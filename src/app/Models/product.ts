import { Category } from "./category";

export class Product {
    public id: number;
    public name: string;
    public sku?: string | null;
    public price: number;
    public salePrice?: number | null;
    public tnc?: string | null;
    public longDescription: string;
    public shortDescription: string;
    public categoryId: number;
    public quantity: number;
    public category: any
    constructor(
        id: number =0,
        name: string ="",
        price: number =0,
        longDescription: string ="",
        shortDescription: string = "",
        categoryId: number = 0,
        quantity: number = 0,
        sku: string | null = null,
        salePrice: number | null = null,
        tnc: string | null = null
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.longDescription = longDescription;
        this.shortDescription = shortDescription;
        this.categoryId = categoryId;
        this.quantity = quantity;
        this.sku = sku || null;
        this.salePrice = salePrice || null;
        this.tnc = tnc || null;
    }
}
