import assert from 'node:assert/strict';
import { after, before, describe, test } from 'node:test';
import { once } from 'node:events';
import { createApp } from '../src/server.js';

describe('security pipeline sample service', () => {
  let server;
  let baseUrl;

  before(async () => {
    server = createApp().listen(0);
    await once(server, 'listening');
    const address = server.address();
    baseUrl = `http://127.0.0.1:${address.port}`;
  });

  after(async () => {
    if (server) {
      server.close();
      await once(server, 'close');
    }
  });

  test('serves health checks', async () => {
    const response = await fetch(`${baseUrl}/healthz`);

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: 'ok' });
  });

  test('sets defensive headers', async () => {
    const response = await fetch(`${baseUrl}/healthz`);

    assert.equal(response.headers.get('x-powered-by'), null);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
    assert.ok(response.headers.get('x-request-id'));
  });

  test('rejects invalid search input', async () => {
    const response = await fetch(`${baseUrl}/api/search?q=`);
    const body = await response.json();

    assert.equal(response.status, 400);
    assert.equal(body.error, 'invalid_query');
  });

  test('accepts valid search input', async () => {
    const response = await fetch(`${baseUrl}/api/search?q=appsec%20security`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.results[0].matched, true);
  });

  test('validates feedback body', async () => {
    const response = await fetch(`${baseUrl}/api/feedback`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: 'tom@example.com',
        message: 'This pipeline is useful for recruiters.'
      })
    });
    const body = await response.json();

    assert.equal(response.status, 202);
    assert.equal(body.status, 'accepted');
  });
});
