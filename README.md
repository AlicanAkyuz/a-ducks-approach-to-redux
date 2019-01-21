# A Ducks Approach to Redux

Ducks: Redux Reducer Bundles, originally suggested here: https://github.com/erikras/ducks-modular-redux

As we find that when a redux app is being built, we keep needing to add {actionTypes, actions, reducer} tuples for each use case. We have been keeping these in separate files and even separate folders, however 95% of the time, it's only one reducer/actions pair that ever needs their associated actions.

To us, it makes more sense for these pieces to be bundled together in an isolated module that is self contained, and can even be packaged easily into a library. 


# Code Sample

This repository is an example of how ducks (as in the last syllable of "redux") structure works. 

1- We retrieve data from mock endpoints of Sauce Labs:
- `http://localhost:3004/eu-devices`
- `http://localhost:3004/us-devices`

2- See which devices are currently available through comparing all devices to available devices from mock endpoints:
- `http://localhost:3004/eu-devices`
- `http://localhost:3004/us-devices`

3- Get an image for each device with its descriptorID:
- `https://d3ty40hendov17.cloudfront.net/device-pictures/{descriptorId}.png`

4- Allow the user to choose between all operating systems, only Android and only iOS.

5- Write Enzyme unit tests for our function componens.



# Available Scripts

In the project directory, you can run:

`npm install`
Installs dependencies.

`npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run server:start`
Starts the mock server.

`npm test`
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


# Available Utilities

### createConstants
```js
import { createConstants } from '@saucelabs/sl-util-redux';

// Common approach
export const NAMESPACE = 'manual';
export const STACKTAB_TOGGLE = `${NAMESPACE}/STACKTAB_TOGGLE`;
export const STACKTAB_OPEN = `${NAMESPACE}/STACKTAB_OPEN`;
export const STACKTAB_CLOSE = `${NAMESPACE}/STACKTAB_CLOSE`;

// Usage of this utility
export const NAMESPACE = 'manual';
export const STACKTAB = createConstants(NAMESPACE, 'stacktab')(
  'TOGGLE',
  'OPEN',
  'CLOSE',
);

// which will generate:
// {
//   TOGGLE: 'manual/STACKTAB_TOGGLE',
//   OPEN: 'manual/STACKTAB_OPEN',
//   CLOSE: 'manual/STACKTAB_CLOSE',
// }
```

### createApiConstants
```js
import { createApiConstants } from '@saucelabs/sl-util-redux';

// Common approach
export const NAMESPACE = 'manual';
export const SESSION_GET_REQUEST = `${NAMESPACE}/SESSION_GET_REQUEST`;
export const SESSION_GET_SUCCESS = `${NAMESPACE}/SESSION_GET_SUCCESS`;
export const SESSION_GET_FAILURE = `${NAMESPACE}/SESSION_GET_FAILURE`;

// Usage of this utility
export const NAMESPACE = 'manual';
export const SESSION_GET = createApiConstants(NAMESPACE, 'session_get');

// which will generate:
// {
//   REQUEST: 'manual/SESSION_GET_REQUEST',
//   SUCCESS: 'manual/SESSION_GET_SUCCESS',
//   FAILURE: 'manual/SESSION_GET_FAILURE',
// }
```

### createAction
For more info regarding action structure check [flux standard action](https://github.com/acdlite/flux-standard-action).

```js
import { createAction } from '@saucelabs/sl-util-redux';

// Common approach
const openStacktab = (payload) => ({
  type: constants.STACKTAB_OPEN,
  payload,
});

// Usage of this utility
const openStacktab = createAction(constants.STACKTAB_OPEN);
```

### createErrorAction
```js
import { createErrorAction } from '@saucelabs/sl-util-redux';

// Common approach
const removeSessionFailure = (payload) => ({
  type: constants.SESSION_REMOVE_FAILURE,
  payload,
  error: true,
});

// Usage of this utility
const removeSessionFailure = createErrorAction(constants.SESSION_REMOVE_FAILURE);
```

### createApiAction
```js
import { createApiAction, createApiConstants } from '@saucelabs/sl-util-redux';

// Common approach
const getSessionRequest = () => ({
  type: constants.SESSION_GET_REQUEST,
});

const getSessionSuccess = (payload, record) => ({
  type: constants.SESSION_GET_SUCCESS,
  payload,
  record,
});

const getSessionFailure = (payload, record) => ({
  type: constants.SESSION_GET_FAILURE,
  payload,
  record,
});

const getSession = (payload) => (dispatch) => {
  dispatch(getSessionRequest());

  return api.getSession(payload).then(
    ({ data }) => dispatch(getSessionSuccess(data)),
    (error) => {
      dispatch(getSessionFailure(error));
      throw error;
    },
  );
};

// Usage of this utility
const constants = createApiConstants('session_get', 'manual') // <- this should be imported from constants file
const getSession = createApiAction(constants, () => api.getSession(payload));
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
