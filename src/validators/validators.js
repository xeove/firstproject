import React from 'react';

export const fieldIsRequired = (value) => {
    if (value) return undefined;

    return "the field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `the max length is ${maxLength}`;
    return undefined
}
