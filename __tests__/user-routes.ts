import request from 'supertest';
import app from '../server/app';

/**
 * POST user signup test
 */
describe('POST user signup route', () => {
  test('User signup - Respond 201', () => {
    return request(app)
      .post('/api/v1/users/signup')
      .send({
        first_name: 'Sharon',
        last_name: 'Nyorere ',
        email: 'neorusse@gmail.com',
        password: 'topple1',
        confirmPassword: 'topple1',
        street: '15 Lekki-Epe, Lekki',
        city: 'Lagos',
        phone: '08038907852',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        const resKeys = Object.keys(res.body);
        expect(res.status).toBe(201);
        expect(resKeys).toContain('token');
      });
  });

  test('Already existing user - Respond 409', () => {
    return request(app)
      .post('/api/v1/users/signup')
      .send({
        first_name: 'Sharon',
        last_name: 'Nyorere ',
        email: 'neorusse@gmail.com',
        password: 'topple1',
        confirmPassword: 'topple1',
        street: '15 Lekki-Epe, Lekki',
        city: 'Lagos',
        phone: '08038907852',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        const resKeys = Object.keys(res.body);
        expect(res.status).toBe(409);
        expect(resKeys).toContain('status');
        expect(resKeys).toContain('success');
        expect(resKeys).toContain('message');
      });
  });

  test('Incomplete signup details - Respond 422', () => {
    return request(app)
      .post('/api/v1/users/signup')
      .send({
        first_name: '',
        last_name: 'Nyorer',
        email: '',
        password: 'topple1',
        confirmPassword: 'topple1',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        const resKeys = Object.keys(res.body);
        expect(res.status).toBe(422);
        expect(resKeys).toContain('errors');
      });
  });
});

/**
 * POST user login test
 */
describe('POST user login route', () => {
  test('User login - Respond 200', () => {
    return request(app)
      .post('/api/v1/users/login')
      .send({
        email: 'neorusse@gmail.com',
        password: 'topple1',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        const resKeys = Object.keys(res.body);
        expect(res.status).toBe(200);
        expect(resKeys).toContain('token');
      });
  });

  test('Wrong login email/password - Respond 401', () => {
    return request(app)
      .post('/api/v1/users/login')
      .send({
        email: 'nneorusse@gmail.com',
        password: 'topple',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        const resKeys = Object.keys(res.body);
        expect(res.status).toBe(401);
        expect(resKeys).toContain('status');
        expect(resKeys).toContain('success');
        expect(resKeys).toContain('message');
      });
  });

  test('Incomplete login details - Respond 422', () => {
    return request(app)
      .post('/api/v1/users/login')
      .send({
        email: '',
        password: 'topple1',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        const resKeys = Object.keys(res.body);
        expect(res.status).toBe(422);
        expect(resKeys).toContain('errors');
      });
  });
});
