import { Formik } from 'formik';
import { Form } from '../VisaPaymentForm/VisaPaymentForm.styled';
import * as Yup from 'yup';
import { FormField } from '../FormFild/FormFild';
import { paymentSchema } from 'validation';

const initialValues = {
  cardHolder: '',
  cardNumber: '',
  cvv: '',
};

export const MasterCardPaymentForm = () => {
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
