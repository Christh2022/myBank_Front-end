// src/pages/Register.jsx
import React from 'react';
import { Form, useActionData, useNavigation } from 'react-router';

export function Register() {
    const error = useActionData();
    const navigation = useNavigation();

    return (
        <div>
            <h1>Inscription</h1>
            <Form method="post">
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="lastname" placeholder="Lastname" required />
                <input type="text" name="surname" placeholder="Surname" required />
                <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    required
                />
                <input type="text" name="address" placeholder="Address" required />
                <input type="text" name="phone" placeholder="Phone" required />
                <button type="submit" disabled={navigation.state === 'submitting'}>
                    {navigation.state === 'submitting' ? 'Inscription...' : "S'inscrire"}
                </button>
            </Form>
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </div>
    );
}
