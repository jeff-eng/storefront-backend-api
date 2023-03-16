import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Server tests', () => {
    it('should return a status 200 if server successfully created', async () => {
       const response = await request.get('/');

       expect(response.statusCode).toEqual(200);
    });

});