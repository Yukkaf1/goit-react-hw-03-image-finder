import { Container, Button } from './PaymentMethods.styled';
import { FaCcMastercard, FaCcVisa, FaCcApplePay } from 'react-icons/fa';
import { paymentMethod } from 'constans';

export const PaymentMethods = ({ selected, onSelect }) => {
  return (
    <Container>
      <Button
        selected={selected === paymentMethod.mastercard}
        onClick={() => onSelect(paymentMethod.mastercard)}
      >
        <FaCcMastercard /> Mastercard
      </Button>

      <Button
        selected={selected === paymentMethod.visa}
        onClick={() => onSelect(paymentMethod.visa)}
      >
        <FaCcVisa /> Visa
      </Button>

      <Button
        selected={selected === paymentMethod.applepay}
        onClick={() => onSelect(paymentMethod.applepay)}
      >
        <FaCcApplePay /> Apple Pay
      </Button>
    </Container>
  );
};
