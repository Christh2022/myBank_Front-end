// src/pages/Login.jsx
import { Form, useActionData, useNavigation } from "react-router"; // ✅ "react-router-dom"
import React from "react";

export function Login() {
  const error = useActionData();
  const navigation = useNavigation();

  return (
    <div>
      <h1>Connexions</h1>
      <Form method="post">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Mot de passe" required />
        <button type="submit" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Connexion..." : "Se connecter"}
        </button>
      </Form>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
}
