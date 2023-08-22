export const endpoint = 'http://localhost:5000/api';

export interface IAPIErrors {
  [key: string]: string[];
}

export interface IBaseAPIReq {
  errors?: IAPIErrors;
}

export interface IStandardReq {
  path: string;
  method: 'GET' | 'PUT' | 'POST' | 'DELETE';
  body?: string;
}

export const standardReq = async ({ path, method, body }: IStandardReq) => {
  const reqPath = `${endpoint}/${path}`;
  try {
    const req = await fetch(reqPath, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body,
      mode: 'cors',
    });
    const data = await req.json();
    return data;
  } catch (errors) {
    console.error(errors);
    return { errors };
  }
};
