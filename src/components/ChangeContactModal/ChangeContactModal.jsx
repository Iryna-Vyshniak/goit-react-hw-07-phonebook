import { useState } from 'react';
import { Formik } from 'formik';
import 'yup-phone';

// redux
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { IoMdPersonAdd } from 'react-icons/io';
import { schema } from 'shared/schemaYup';
import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  StyledButton,
  LabelWrapper,
  LabelSpan,
} from './ChangeContactModal.styled';

import Modal from 'react-modal';

import { MdOutlineClose } from 'react-icons/md';
import { CloseBtn } from 'components/Modal/Modal.styled';
import { useDispatch } from 'react-redux';
import { changeContact } from 'redux/contacts/contacts-operations';

import { customStylesInsideModal } from 'styles/modalStyles';

Modal.setAppElement('#root');

export const ChangeContactModal = ({
  isOpen,
  data,
  onClose,
  setModalIsOpen,
}) => {
  const [formValues, setFormValues] = useState(data || {});

  const initialValues = { avatar: '', name: '', phone: '' };
  const savedValues = {
    avatar: data?.avatar || '',
    name: data?.name || '',
    phone: data?.phone || '',
  };

  const dispatch = useDispatch();

  const closeModal = () => {
    onClose();
    setModalIsOpen(false);
  };

  const onSubmitHandler = (values, { resetForm }) => {
    const newFormValues = { ...formValues, ...values };
    setFormValues(newFormValues);
    dispatch(changeContact(newFormValues));
    resetForm();
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Inline Styles Modal Example"
        style={customStylesInsideModal}
      >
        <CloseBtn onClick={onClose}>
          <MdOutlineClose />
        </CloseBtn>
        <Formik
          initialValues={savedValues || initialValues}
          onSubmit={onSubmitHandler}
          enableReinitialize
          validationSchema={schema}
        >
          {formik => {
            // console.log('Formik props', formik);
            return (
              <Form autoComplete="off">
                <FormField>
                  <LabelWrapper>
                    <BsPersonFill />
                    <LabelSpan>Avatar</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik name="avatar" placeholder="Add link to avatar" />
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
                <StyledButton
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  <IoMdPersonAdd size="16" />
                  Edit contact
                </StyledButton>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};
