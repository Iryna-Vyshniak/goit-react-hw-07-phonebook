import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

// toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastifyOptions } from 'utils/toastifyOptions';

// redux
import { addContact } from 'redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';

import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { IoMdPersonAdd } from 'react-icons/io';

import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  StyledButton,
  LabelWrapper,
  LabelSpan,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .phone(
      'UA',
      true,
      'Phone number must be a valid phone number for region UA, digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const isDublicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase().trim();
    const normalizedNumber = number.trim();

    const dublicate = contacts.find(
      contact =>
        contact.name.toLowerCase().trim() === normalizedName ||
        contact.number.trim() === normalizedNumber
    );
    return Boolean(dublicate);
  };

  const onAddContact = ({ name, number }) => {
    if (isDublicate({ name, number })) {
      return toast.error(
        `This contact is already in contacts`,
        toastifyOptions
      );
    }
    dispatch(addContact({ name, number }));
    // const action = addContact({ name, number });
    // dispatch(action);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });
        resetForm();
      }}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormField>
          <LabelWrapper>
            <BsPersonFill />
            <LabelSpan>Name</LabelSpan>
          </LabelWrapper>
          <FieldFormik type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          <LabelWrapper>
            <BsFillTelephoneFill />
            <LabelSpan>Number</LabelSpan>
          </LabelWrapper>
          <FieldFormik
            type="tel"
            name="number"
            placeholder="+38-050-123-45-67"
          />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <StyledButton type="submit">
          <IoMdPersonAdd size="16" />
          Add contact
        </StyledButton>
      </Form>
    </Formik>
  );
};
