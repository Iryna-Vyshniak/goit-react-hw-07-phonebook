import { useSelector } from 'react-redux';
// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import { GlobalStyle } from 'styles/GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

// redux
import { getContacts } from 'redux/contacts/contacts-selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Layout>
      <Section title="PhoneBook">
        <ContactForm />
        {contacts.length > 0 && (
          <>
            <Title title="Contacts" />
            <Filter />
            <ContactList />
          </>
        )}
      </Section>
      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
};
