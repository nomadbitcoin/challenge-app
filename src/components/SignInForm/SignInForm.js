import React from 'react';

function SignInForm() {
  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label>
          Nome:
          <input type="text" name="name" />
        </label>
        <label>
          Whatsapp:
          <input type="text" name="whatsapp" />
        </label>
        <label>
          Valor:
          <input type="number" name="valor" step="0.01" min="0" />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default SignInForm;
