const request = require ('supertest');
const app = require ('./app');

describe('API systemInformation tests',()=>{
    test ('GET /api/v1/systemInformation should return system information', async()=>{
        const response = await request (app).get('/api/v1/systemInformation');
        expect (response.statusCode).toBe(200);
        expect (response.type).toBe('application/json');
        expect(response.body).toHaveProperty('cpu');
        expect(response.body).toHaveProperty('system');
        expect(response.body).toHaveProperty('mem');
        expect(response.body).toHaveProperty('os');
        expect(response.body).toHaveProperty('currentLoad');
        expect(response.body).toHaveProperty('processes');
        expect(response.body).toHaveProperty('diskLayout');
        expect(response.body).toHaveProperty('networkInterfaces');
    });
    //test ('GET /api/v1/unknown should 404 error', async()=>{
    //    const response = await request(server).get ('/api/v1/unknown');
    //    expect(response.statusCode).toBe(404);
    //});
});