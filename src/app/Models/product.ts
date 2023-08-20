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

    constructor(
        id: number,
        name: string,
        price: number,
        longDescription: string,
        shortDescription: string,
        categoryId: number,
        quantity: number,
        sku?: string | null,
        salePrice?: number | null,
        tnc?: string | null
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
