import React from 'react';
import { useForm } from 'react-hook-form';

function NetlifyContactForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Fonction de soumission : Netlify gère l’envoi,
  // tu peux néanmoins ajouter ton propre traitement si besoin
  const handleFormSubmit = data => {
    // Par exemple, loguer les données ou déclencher une action
    console.log('Données du formulaire:', data);

    // Si tu veux exécuter une callback personnalisée:
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <form
      id='formulaire'
      name='contact'
      method='POST'
      data-netlify='true'
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      {/* Champ caché exigé pour Netlify */}
      <input type='hidden' name='form-name' value='contact' />

      {/* Champ « bot-field » optionnel pour filtrer le spam */}
      <p style={{ display: 'none' }}>
        <label>
          Ne remplissez pas ce champ si vous êtes humain :
          <input name='bot-field' {...register('bot-field')} />
        </label>
      </p>

      <input
        type='text'
        name='name'
        placeholder='Nom'
        required
        {...register('name')}
      />

      <input
        type='text'
        name='subject'
        placeholder='Object'
        required
        {...register('subject')}
      />

      <input
        type='email'
        name='email'
        placeholder='Email'
        required
        {...register('email')}
      />

      <textarea
        name='message'
        cols='30'
        rows='10'
        placeholder='Votre message'
        required
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

export default NetlifyContactForm;
