import supertest from 'supertest';
import app from '../../server';
import { Product } from '../../models/product';
import { before } from 'node:test';

const request = supertest(app);

describe('Products handler', () => {

    beforeAll( async () => {
        //  Populate the db with data
        try {
            const dummyProduct: Product = {
                name: 'dummy product',
                price: 123
            };
            const result = await request.post('/products').send(dummyProduct);
            console.log(result);
        } catch (err) {
            throw new Error;
        }
    });

    describe('Endpoint tests - products routes', () => {
        describe('GET /products unit tests', () => {
            it('GET /products - should return 200', async () => {
                const response = await request.get('/products');
    
                expect(response.statusCode).toEqual(200);
            });

            it('GET /products - returns a JSON array', async () => {
                const response = await request.get('/products');


            });
        });

        describe('POST /products unit tests', () => {
            it('should return created product when sending JSON with proper parameters', async () => {
                const testProduct: Product = {
                    name: 'keyboard',
                    price: 50
                };

                const response = await request.post('/products').send(testProduct);
    
                expect(response.body).toEqual(jasmine.objectContaining(
                    {   
                        id: jasmine.any(Number),
                        name: testProduct.name,
                        price: testProduct.price
                    }
                ))
            });

            it('should return 400 error when request sent with incorrect syntax', async () => {
                const malformedProduct = {
                    productName: 'evil keyboard',
                    productPrice: 999
                };

                const response = await request.post('/products').send(malformedProduct);

                expect(response.statusCode).toEqual(400);
            })

            it('should return error when sending request without JWT', async () => {
                expect(true).toEqual(false);
            });
        })
    });


});
