const API_URL = import.meta.env.VITE_API_URL_DEV;

export async function requireAuth(): Promise<string> {
    const token = localStorage.getItem('token');
    if (!token) {
       throw new Response("Unauthorized access: No token found", {status: 401});
    }

    // Check if the token is valid by making a request to the backend
    const response = await fetch(`${API_URL}/check`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    // If the response is not ok, throw an error
    if (!response.ok) {
        throw new Response("Unauthorized access: Invalid token", {status: 401});
    }

    // If the response is ok, parse the JSON and return the user data
    const data = await response.json();

    // Check if the token is valid
    if (!data.user) {
        throw new Response("Unauthorized access: Token is not valid", {status: 401});
    }
    console.log("✅ Accès autorisé");
    return data.user; // Return user data if needed
}