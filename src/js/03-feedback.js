import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const onPageLoad = () => {
  if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    formEl.email.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).email;
    formEl.message.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).message;
  }
};

const inputForm = throttle(e => {
  const email = formEl.email.value;
  const message = formEl.message.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email, message })
  );
}, 500);

const submitForm = e => {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  console.log({ email: email.value, message: message.value });
  formEl.email.value = '';
  formEl.message.value = '';
  localStorage.clear();
};

onPageLoad();
formEl.addEventListener('input', inputForm);
formEl.addEventListener('submit', submitForm);