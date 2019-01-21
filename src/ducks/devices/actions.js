import * as utils from '../../utils/action';
import * as types from './types';
import * as api from './api';

export const onOsSelection = utils.createAction(types.OP_SELECT);
export const getDevices = utils.createApiAction(types.DEVICES_GET, () => api.getDevices());
export const getAvailability = utils.createApiAction(types.AVAILABILITY_GET, () => api.getAvailability());
