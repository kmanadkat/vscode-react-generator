<img src="./images/icon.png" height="128px" />

## VsCode React Boilerplate Code Generator

This extension aims to help developer get pre-backed boiler plate code following best practices and bring consistency into project. It generates opinionated, batteries-included code snippets.

### Features

Since it is just the beginning of this extension, it has only 1 feature at the moment:
1. Generate React Redux Component

Open command pallete `CMD+SHIFT+P` and select `Generate React Redux Component`. You would need to bind the slice inside root reducer after code generation, like below:
```js
import { combineReducers } from 'redux';
import { name as sliceName, reducer as sliceNameReducer } from '../components/Counter/redux/slice';

const createRootReducer = () => {
    return combineReducers({
        ...
        [sliceName]: sliceNameReducer,
    })
}

export default createRootReducer
```

Full generated code example: [Counter Component](https://github.com/kmanadkat/cra-redux-toolkit-reselect-boilerplate/tree/master/src/components)

> I will be adding short animation on how this extension works, shortly. 
### Requirements

This extensions helps best if you are using following packages in your react project:
1. `@reduxjs/toolkit`
2. `reselect`
3. `react-redux`
5. `prop-types`
6. `lodash`
4. React functional components

### Release Notes
#### 1.0.0

Initial release of this extension consisting of `Generate React Redux Component` Template

----------------------------
**Enjoy!**
