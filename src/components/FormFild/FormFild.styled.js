import styled from 'styled-components';
import {
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${p => p.theme.colors.error};
`;

export const Field = styled(FormikField)`
  padding: 4px;
`;
