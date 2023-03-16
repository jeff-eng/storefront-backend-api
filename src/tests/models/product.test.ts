import { Product, ProductStore } from '../../models/product';

const productStore = new ProductStore();

describe('Product Model', () => {
    describe('CRUD methods', () => {

        // Index method exists
        it('should have readAllProducts method defined', () => {
            expect(productStore.readAllProducts).toBeDefined();
        });
        // Index - returns an array of products
        // test('should return an array of Product objects', async () => {
        //     const indexItems = await productStore.index();
        //     expect(indexItems).toEqual(expect.arrayContaining([{
        //         id: 1, 
        //         name: 'Test product', 
        //         price: 9.99
        //      }]));
        // });

        // Show method exists
        it('should have readProduct method defined', () => {
            expect(productStore.readProduct).toBeDefined();
        });
        // // Show - returns single product
        // test('show method should return a single product', () => {

        // });

        // Create method defined
        it('should have createProduct method defined', async () => {
            expect(productStore.createProduct).toBeDefined();

            // The createProduct method should return a promise
            await expectAsync(productStore.createProduct).toBeResolved();
        });
        // Create - create a product item
        // it('should create object of type Product and return Product object', async () => {
        //     const result = await productStore.createProduct({
        //         name: 'widget',
        //         price: 19.99
        //     });

        //     expect(result).toEqual(jasmine.objectContaining({
        //         id: jasmine.any(Number),
        //         name: 'widget',
        //         price: 19.99
        //     }));

        // });

        // Update method defined
        it('should have updateProduct method defined', () => {
            expect(productStore.updateProduct).toBeDefined();
        });
        // // Update - updates an item
        // test('update method should return the updated product', () => {
        // });

        // Delete method defined
        it('should have deleteProduct method defined', () => {
            expect(productStore.deleteProduct).toBeDefined();
        });
        // // Delete - deletes a product item
        // test('should', () => {
            
        // });

    });         
});