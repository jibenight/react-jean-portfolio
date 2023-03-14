import { useForm } from 'react-hook-form';

function ContactForm(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    props.onSubmit();
  };

  return (
    <form method='POST' id='formulaire' onSubmit={handleSubmit(onSubmit)}>
      <input type='text' name='name' placeholder='Nom' {...register('name')} />
      <input
        type='text'
        name='subject'
        placeholder='Object'
        {...register('subject')}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        {...register('email')}
      />
      <textarea
        name='message'
        cols='30'
        rows='10'
        placeholder='Votre message'
        {...register('message')}
      ></textarea>
      <input
        type='submit'
        value='envoi'
        className='btn-grad'
        id='submit-form'
      />
      <p className='mentions'>
        Les données ne sont pas enregistrées, mais seulement envoyées sur ma
        boite mail.
      </p>
    </form>
  );
}

export default ContactForm;
