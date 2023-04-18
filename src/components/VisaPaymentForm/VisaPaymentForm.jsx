import { Formik } from 'formik';
import { Form } from '../VisaPaymentForm/VisaPaymentForm.styled';
import * as Yup from 'yup';
import { FormField } from '../FormFild/FormFild';
import { paymentMethod } from 'constans';
import { paymentSchema } from 'validation';

const initialValues = {
  cardHolder: '',
  cardNumber: '',
  cvv: '',
};

Yup.addMethod(Yup.string, 'numeric', function () {
  return this.matches(/^\d+$/, 'The field should have digits only');
});

const validationSchema = Yup.object({
  cardHolder: Yup.string().required(),
  cardNumber: Yup.string().numeric().length(1).required(),
  cvv: Yup.string().length(3).numeric().required(),
});

export const VisaPaymentForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    setTimeout(() => actions.setSubmitting(false), 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={paymentSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        console.log(isSubmitting);
        return (
          <Form>
            <FormField label="cardHolder" name="cardHolder" />
            <FormField label="cardNumber" name="cardNumber" />
            <FormField label="cvv" name="cvv" />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Attempting to pay...' : 'Pay'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
