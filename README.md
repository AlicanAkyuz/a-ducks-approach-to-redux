## Solution


*Place any details about your implementation and usage of your app here.*



## General

### How much time?

3 hours


### Which technologies?

We prepared this scaffold for you. We believe it comes with everything necessary to complete the tasks. You can use other libaries than the pre-installed ones for API requests, data handling etc., but don't use ready-made components. Write your own components.

We suggest to follow the [Ducks](https://github.com/erikras/ducks-modular-redux) file structure.


### Any questions?

Feel free to contact us.


## User Stories/Tasks

### 1. As a user, I want to see an overview of all real devices that Sauce Labs offers

Mock endpoints to retrieve data for two different data centers:
- `http://localhost:3004/eu-devices`
- `http://localhost:3004/us-devices`

An image for each device can be found at:
- `https://d3ty40hendov17.cloudfront.net/device-pictures/{descriptorId}.png`


### 2. As a user, I want to filter devices by operating system.

Allow the user to choose between all operating systems, only Android and only iOS.


### 3. Styling

We want to provide our users with simple, clean and pretty interfaces. We believe libraries are not necessary at this stage. Add your own styling.


### 4. Testing

Write a unit test for at least one component and one container. Make sure to test at least the following:

- Component renders without crashing
- All props
- Callbacks

You may use the pre-installed libraries Chai, Enzyme and Sinon, but feel free to choose what fits your needs.


### Bonus 1. As a user, I want to see a loading indicator whenever data is being fetched from the server

Display an animated indicator.


### Bonus 2. As a user, I want to see which devices are currently available

Auto-refresh the status of each device.

Mock endpoints to retrieve data for two different data centers:

http://localhost:3004/eu-availability
http://localhost:3004/us-availability



## Available Scripts

In the project directory, you can run:


### `npm install`

Installs dependencies.


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run server:start`

Starts the mock server.


### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Available Utilities

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

This utility helps only with super simple api calls

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
