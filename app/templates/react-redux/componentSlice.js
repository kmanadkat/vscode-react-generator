const getComponentSliceTemplate = (sliceName) => {
    const SliceName = sliceName[0].toUpperCase() + sliceName.slice(1)
    return `import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    data: null,
    loading: false,
    loaded: false,
    error: null
};

const ${sliceName}Slice = createSlice({
    name: '${sliceName}',
    initialState,
    reducers: {
    load${SliceName}(state) {
        return {
        ...state,
        loading: true,
        loaded: false,
        error: null
        };
    },
    loaded${SliceName}(_, action) {
        return {
        data: action.payload,
        loading: false,
        loaded: true,
        error: null
        };
    },
    error${SliceName}(state, action) {
        return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload
        };
    },
    reset${SliceName}() {
        return {...initialState}
    }
    }
});

export const {
    load${SliceName},
    loaded${SliceName},
    error${SliceName},
    reset${SliceName},
} = ${sliceName}Slice.actions;

export const { name, reducer } = ${sliceName}Slice;
`
}

module.exports = getComponentSliceTemplate
