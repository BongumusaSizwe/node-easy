const { getHttpServer } = required('./generalHelper');

describe('HTTPS server tests', () => {
    test('Test to see if the HTTPS server is created', () => {
        const app = require.requireActual('express');
        const server = getHttpServer(app);
        expect(server).not.toBeNull();
        expect(server).not.toBeUndefined();
    });
});
