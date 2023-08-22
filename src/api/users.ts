import { standardReq, IBaseAPIReq } from './utils';

export interface IUsers {
  name: string;
  position: string;
  email: string;
}

export const getUsers = async () => {
  const users: IUsers = await standardReq({
    path: `users`,
    method: 'GET',
  });
  return {
    success: Array.isArray(users) ? true : false,
    users,
  };
};

export const createUser = async (user: IUsers) => {
  const userInfo = await standardReq({
    path: 'users/add',
    method: 'POST',
    body: JSON.stringify(user),
  });

  return {
    success: userInfo ? true : false,
    userInfo,
  };
};

export const deleteUser = async (id: string) => {
  const userInfo: IBaseAPIReq = await standardReq({
    path: `users/${id}`,
    method: 'DELETE',
  });
  const { errors } = userInfo;
  return {
    success: typeof errors === 'undefined',
    errors,
  };
};

export const getUserById = async (id: string) => {
  const userInfo: IUsers = await standardReq({
    path: `users/${id}`,
    method: 'GET',
  });
  return {
    success: userInfo ? true : false,
    userInfo,
  };
};

export const updateUser = async ({ id, user }) => {
  const userInfo = await standardReq({
    path: `users/${id}`,
    method: 'PUT',
    body: JSON.stringify(user),
  });
  return {
    success: userInfo ? true : false,
    userInfo,
  };
};
