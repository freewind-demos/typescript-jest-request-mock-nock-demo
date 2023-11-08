import { login } from './login';
import nock from 'nock';

test('nock mock response', async () => {
    nock('http://test.com').get('/login?username=abc&password=123')
        .reply(200, "session-token")
    expect(await login('abc', '123')).toMatchInlineSnapshot(`"session-token"`)
})
