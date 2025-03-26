import React from 'react';
import { useForm } from 'react-hook-form';

// Petite fonction utilitaire pour encoder les données en application/x-www-form-urlencoded
function encodeFormData(data) {
  // data est un objet { name: "...", email: "...", ... }
  // On le transforme en "name=...&email=...&..."
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function NetlifyContactForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async formData => {
    try {
      // On ajoute form-name: 'contact' pour que Netlify identifie le formulaire
      const dataWithFormName = {
        'form-name': 'contact',
        ...formData,
      };

      // Envoi via fetch sur "/" (l’URL de la page) avec le body encodé
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeFormData(dataWithFormName),
      });

      if (response.ok) {
        // Si tout va bien, on affiche le message de succès
        if (onSubmit) {
          onSubmit(formData);
        }
      } else {
        console.error(
          'Erreur lors de l’envoi du formulaire sur Netlify:',
          response
        );
      }
    } catch (error) {
      console.error('Erreur inattendue:', error);
    }
  };

  // onSubmit={handleSubmit(handleFormSubmit)} bloque la soumission native
  // et déclenche handleFormSubmit() en JS, sans reload
  return (
    <form
      id='formulaire'
      name='contact'
      method='POST'
      data-netlify='true'
      // IMPORTANT : on supprime l'action pour ne pas rediriger automatiquement
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      {/* Même si on utilise fetch, on conserve ceci pour l’identification du form */}
      <input type='hidden' name='form-name' value='contact' />

      {/* Champ honeypot anti-spam (optionnel) */}
      <p style={{ display: 'none' }}>
        <label>
          Ne remplissez pas ce champ si vous êtes humain :
          <input name='bot-field' {...register('bot-field')} />
        </label>
      </p>

      {/* Champs visibles */}
      <input
        type='text'
        name='name'
        placeholder='Nom'
        required
        {...register('name', { required: true })}
      />

      <input
        type='text'
        name='subject'
        placeholder='Object'
        required
        {...register('subject', { required: true })}
      />

      <input
        type='email'
        name='email'
        placeholder='Email'
        required
        {...register('email', { required: true })}
      />

      <textarea
        name='message'
        cols='30'
        rows='10'
        placeholder='Votre message'
        required
        {...register('message', { required: true })}
      ></textarea>

      <input
        type='submit'
        value='envoi'
        className='btn-grad'
        id='submit-form'
      />

      <p className='mentions'>
        Les données ne sont pas enregistrées, mais seulement envoyées sur ma
        boîte mail via Netlify.
      </p>
    </form>
  );
}

export default NetlifyContactForm;
