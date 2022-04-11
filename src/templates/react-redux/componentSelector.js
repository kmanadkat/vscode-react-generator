const getComponentSelectorTemplate = (sliceName) => {
    const SliceName = sliceName[0].toUpperCase() + sliceName.slice(1)
    return `import { createSelector } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect';
import { get } from 'lodash';
import { initialState, name } from './slice';

// Select slice from store
const ${sliceName}Selector = (state) => state[name] || initialState;

// Slice Data
const make${SliceName} = () =>
createSelector([${sliceName}Selector], (state) => get(state, 'data', {}));

// Slice Loading Status
const make${SliceName}Loading = () =>
    createSelector([${sliceName}Selector], (state) => state.loading);

// Slice Loaded Status
const make${SliceName}Loaded = () =>
    createSelector([${sliceName}Selector], (state) => state.loaded);

// Slice Error Status
const make${SliceName}Error = () =>
    createSelector([${sliceName}Selector], (state) => state.error);

const structuredSelector = createStructuredSelector({
    ${sliceName}Data: make${SliceName}(),
    ${sliceName}Loading: make${SliceName}Loading(),
    ${sliceName}Loaded: make${SliceName}Loaded(),
    ${sliceName}Error: make${SliceName}Error()
});

export default structuredSelector;
`
}

module.exports = getComponentSelectorTemplate
