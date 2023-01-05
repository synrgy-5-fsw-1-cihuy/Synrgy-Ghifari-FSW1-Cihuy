
const request = require('supertest');
const carModel = require('../app/models').Car
const app = require('../app/index');
let token;

beforeAll(async () => {
    const userData = {
        email: 'fikri@binar.co.id',
        password: '123456'
    }

    const response = await request(app).post('/v1/auth/login').send(userData);

    token = response.body.accessToken;
})

describe('GET /', () => {
    it('should response 200 ok', (done) => {
        request(app)
        .get('/')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    })
})

describe('GET /v1/cars', () => {
    it('should response 200 ok', (done) => {        
        request(app)
        .get('/v1/cars')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })
})


describe('POST /v1/cars', () => {
    it('return 201 created', async () => {
        const payload = {
            name: "Fortuner",
            price: 700000000,
            size: "large",
            image: "fortuner.jpg"
        };
        
        await request(app)
        .post('/v1/cars')
        .set({
            Authorization: `Bearer ${token}`
        })
        .set(payload)
        .expect('Content-Type', 'application/json; charset=utf-8')           
        .expect(201)
    });
})

describe('PUT /v1/cars/:id', () => {
    it('should return 200 ok', async () => {
        const mockCar = {
            name: "Avanza",
            price: 300000,
            size: "medium",
            image: "avanza.png"
        };

        const car = await carModel.create(mockCar);

        const updateMockCar = {
            name: "Avanza 2",
            price: 500000000,
            size: "Large",
            image: "avanza2.png",
        };

        await request(app)
            .put(`/v1/cars/${car.id}`)
            .set({
                Authorization: `Bearer ${token}`
            })
            .send(updateMockCar)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
    })
})

describe('DELETE /v1/cars/:id', () => {
    it('should return 204', async () => {
        const mockCar = {
            name: "Avanza",
            price: 300000,
            size: "medium",
            image: "avanza.png"
        };

        const car = await carModel.create(mockCar);

        await request(app)
        .delete('/v1/cars/' + car.id)
        .set({
            Authorization: `Bearer ${token}`
        })
        .expect(204)
    })
})
