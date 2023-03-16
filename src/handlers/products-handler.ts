import { Request, Response, Application } from 'express';
import { Product, ProductStore } from '../models/product';

const productStore = new ProductStore();

const readAll = async (reg: Request, res: Response) => {
    try {
        const allProducts = await productStore.readAllProducts();
        
        res.json(allProducts);
    } catch (err) {
        
    }
};

const create = async (req: Request, res: Response) => {
    try {
        // Parse the request body
        const name: string = req.body.name as string;
        const price: number = req.body.price as number;
        
        // Filter out malformed request body
        if (name === undefined || price === undefined) {
            throw new Error('Request body has missing or incorrect parameters.');
        }

        const product: Product = {
            name: name,
            price: price
        };
        
        const newProduct = await productStore.createProduct(product);

        res.json(newProduct);
        
    } catch (err) {
        res.status(400).json({ message: `${err}` });
    }
    
};


const productRoutes = (app: Application) => {
    // GET /products
    app.get('/products', (req: Request, res: Response) => {
        res.sendStatus(400);
    });

    app.post('/products', create);
};



 export default productRoutes;