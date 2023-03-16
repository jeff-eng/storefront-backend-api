import client from '../database';

export type Product = {
    id?: number,
    name: string,
    price: number
};

export class ProductStore {
    readAllProducts() {
        try {
            
        } catch (err) {
            
        }
    }

    readProduct(id: number) {

    }

    async createProduct(prod: Product): Promise<Product> {
        try {
            const connection = await client.connect();
            const sql = 'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *';
            const result = await connection.query(sql, [prod.name, prod.price]);
            const createdProduct = result.rows[0];
            connection.release();

            return createdProduct;
        } catch (err) {
            throw new Error(`Unable to create new product ${prod.name}`);
        }
    }

    updateProduct(id: number) {

    }

    deleteProduct(id: number) {

    }
};