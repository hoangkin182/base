import { SetMetadata } from '@nestjs/common';

export const PERMISSTION = {
  READ: 'read',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  ALL: 'all',
};

export enum PermissionType {
  // Users
  CREATE_USER_LIST = 'list_user_create',
  READ_USER_LIST = 'list_user_read',
  UPDATE_USER_LIST = 'list_user_read',
  DELETE_USER_LIST = 'list_user_delete',
  ALL_USER_LIST = 'list_user_all',
  CREATE_USER_CREATE = 'create_user_create',
  READ_USER_CREATE = 'create_user_read',
  UPDATE_USER_CREATE = 'create_user_read',
  DELETE_USER_CREATE = 'create_user_delete',
  ALL_USER_CREATE = 'create_user_all',

  // Roles
  CREATE_ROLE_LIST = 'list_role_create',
  READ_ROLE_LIST = 'list_role_read',
  UPDATE_ROLE_LIST = 'list_role_read',
  DELETE_ROLE_LIST = 'list_role_delete',
  ALL_ROLE_LIST = 'list_role_all',
  CREATE_ROLE_CREATE = 'create_role_create',
  READ_ROLE_CREATE = 'create_role_read',
  UPDATE_ROLE_CREATE = 'create_role_read',
  DELETE_ROLE_CREATE = 'create_role_delete',
  ALL_ROLE_CREATE = 'create_role_all',
  // Cameras
  CREATE_CAMERA_LIST = 'list_camera_create',
  READ_CAMERA_LIST = 'list_camera_read',
  UPDATE_CAMERA_LIST = 'list_camera_read',
  DELETE_CAMERA_LIST = 'list_camera_delete',
  ALL_CAMERA_LIST = 'list_camera_all',
  CREATE_CAMERA_CREATE = 'create_camera_create',
  READ_CAMERA_CREATE = 'create_camera_read',
  UPDATE_CAMERA_CREATE = 'create_camera_read',
  DELETE_CAMERA_CREATE = 'create_camera_delete',
  ALL_CAMERA_CREATE = 'create_camera_all',

}

export const AUTH_KEY = 'auth';
export const Auth = (...permissions: PermissionType[]) =>
  SetMetadata(AUTH_KEY, permissions);
