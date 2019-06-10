import request from '@/utils/request';
import { stringify } from 'qs';

export async function query(params) {
  return request(`/api/v1/user/page?${stringify(params)}`);
}

export async function queryById(params) {
  return request('/api/v1/user/get/' + params);
}

export async function deleteById(params) {
  return request('/api/v1/user/delete/' + params, {
    method: 'DELETE',
  });
}

export async function addUser(params) {
  return request('/api/v1/user/add', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateUser(params) {
  return request('/api/v1/user/update', {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}

export async function disableUser(params) {
  return request('/api/v1/user/disable', {
    method: 'POST',
    data: params,
  });
}

export async function activeUser(params) {
  return request('/api/v1/user/active', {
    method: 'POST',
    data: params,
  });
}

export async function modifyPassword(params) {
  return request(`/api/v1/user/modifyPassword?${stringify(params)}`, {
    method: 'POST',
  });
}

export async function roleAuth(params) {
  return request('/api/v1/user/roleAuth', {
    method: 'POST',
    data: params,
  });
}

export async function queryRolesByUserId(params) {
  return request('/api/v1/user/roleAuth/get/' + params);
}

export async function queryCurrent() {
  return request('/api/v1/auth/currentUser');
}
