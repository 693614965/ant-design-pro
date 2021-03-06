import request from '@/utils/request';
import { stringify } from 'qs';

export async function query(params) {
  return request(`/api/v1/role/page?${stringify(params)}`);
}

export async function queryById(params) {
  return request('/api/v1/role/get/' + params);
}

export async function deleteById(params) {
  return request('/api/v1/role/delete/' + params, {
    method: 'DELETE',
  });
}

export async function addRole(params) {
  return request('/api/v1/role/add', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateRole(params) {
  return request('/api/v1/role/update', {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}

export async function menuAuth(params) {
  return request('/api/v1/role/menuAuth', {
    method: 'POST',
    data: params,
  });
}

export async function menuAuthGet(params) {
  return request('/api/v1/role/menuAuth/get/'+params);
}

export async function permissionAuth(params) {
  return request('/api/v1/role/permissionAuth', {
    method: 'POST',
    data: params,
  });
}

export async function permissionAuthGet(params) {
  return request('/api/v1/role/permissionAuth/get/'+params);
}
