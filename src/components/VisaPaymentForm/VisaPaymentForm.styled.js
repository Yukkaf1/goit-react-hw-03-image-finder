import {
  Field,
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;
