import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer {...otherProps} />
    {label ? (
      <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
