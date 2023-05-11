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

export const App = () => {
  return (
    <>
      <Layout>
        <Section title="PhoneBook">
          <ContactForm />
          <Title title="Contacts" />
          <Filter />
          <ContactList />
        </Section>
        <ToastContainer />
      </Layout>
      <GlobalStyle />
    </>
  );
};
