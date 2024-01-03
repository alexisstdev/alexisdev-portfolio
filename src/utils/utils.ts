import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.PUBLIC_SERVICE_ID;
const templateId = import.meta.env.PUBLIC_TEMPLATE_ID;
const userId = import.meta.env.PUBLIC_USER_ID;
const formId = '#contact-form';

export const handleFormSubmit = () => {
  const form = document.querySelector(formId) as HTMLFormElement;

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form, userId)
      .then(() => {
        alert('Message sent');
      })
      .catch((error: Error) => {
        console.error(error);
        alert('An error occurred, Please try again');
      })
      .finally(() => {
        form.reset();
      });
  });
};
