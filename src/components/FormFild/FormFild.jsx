import { Wrapper, ErrorMessage } from './FormFild.styled';
import { Field } from 'formik';

export const FormField = ({ label, name }) => {
  return (
    <Wrapper>
      {label && <span>{label}</span>}
      <Field name={name} />
      <ErrorMessage name={name} component="span" />
    </Wrapper>
  );
};
