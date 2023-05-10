import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

// redux
import { addContact } from 'redux/contacts/contacts-operations';

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
  avatar: yup.string(),
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  phone: yup
    .string()
    .phone(
      'UA',
      true,
      'Phone number must be a valid phone number for region UA, digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = { avatar: '', name: '', phone: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = data => {
    dispatch(addContact(data));
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
            <LabelSpan>Avatar</LabelSpan>
          </LabelWrapper>
          <FieldFormik name="avatar" placeholder="Add avatar" />
          <ErrorMessage name="avatar" component="span" />
        </FormField>
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
            name="phone"
            placeholder="+38-050-123-45-67"
          />
          <ErrorMessage name="phone" component="span" />
        </FormField>
        <StyledButton type="submit">
          <IoMdPersonAdd size="16" />
          Add contact
        </StyledButton>
      </Form>
    </Formik>
  );
};
