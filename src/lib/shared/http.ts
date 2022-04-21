const baseUrl = 'http://localhost:3000'

async function send({ method, path, data, token }:any) {
    const opts:any = { method, headers: {} };

    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }

    if (token) {
        opts.headers['Authorization'] = `Token ${token}`;
    }

    if (!path.startsWith('http')){
        path = `${baseUrl}${path}`
    }
    return fetch(path, opts)
        .then((r) => r.text())
        .then((json) => {
            try {
                return JSON.parse(json);
            } catch (err) {
                return json;
            }
        });
}

export function get(path:string, token:string) {
    return send({ method: 'GET', path, token });
}

export function del(path:string, token:string) {
    return send({ method: 'DELETE', path, token });
}

export function post(path:string, data:any, token:string) {
    return send({ method: 'POST', path, data, token });
}

export function put(path:string, data:string, token:string) {
    return send({ method: 'PUT', path, data, token });
}

export function respond(body:any) {
    if (body.errors) {
        return { status: 401, body };
    }

    const json = JSON.stringify(body.user);
    const value = Buffer.from(json).toString('base64');

    return {
        headers: {
            'set-cookie': `jwt=${value}; Path=/; HttpOnly`
        },
        body
    };
}
