import fetch from 'node-fetch';

export async function login(username: string, password: string): Promise<string> {
    const res = await fetch(`http://test.com/login?username=${username}&password=${password}`);
    return (await res.text()) as string;
}
