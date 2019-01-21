import * as constants from '../../utils/constant';
import { NAMESPACE } from './constants';

export const DEVICES_GET = constants.createApiConstants(NAMESPACE, 'devices_get');
export const AVAILABILITY_GET = constants.createApiConstants(NAMESPACE, 'availability_get');
export const OP_SELECT = `${NAMESPACE}/OP_SELECT`;
