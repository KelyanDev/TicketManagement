const API_URL = 'http://192.168.0.110:3000/api';

export const fetchTickets = async () => {
    const res = await fetch(`${API_URL}/ticket` , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res.json();
};

export const fetchTicketById = async (id) => {
    const res = await fetch(`${API_URL}/ticket/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res.json()
};

export const fetchOwnedTicket = async (userId) => {
    const res = await fetch(`${API_URL}/ticket/user/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return res.json()
};

export const createTicket = async (formData) => {
    try {
        const req = await fetch(`${API_URL}/ticket` , {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
        });

        if (!req.ok) {
            const error = await req.json();
            throw new Error(error.error);
        }

        return req.json();
    } catch (error) {
        throw new Error('Erreur lors de la création du ticket: ' + error.message);
    }
};

export const deleteTicket = async (id) => {
    try {
        const req = await fetch(`${API_URL}/ticket/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        });

        if (!req.ok) {
            const error = await req.json();
            throw new Error(error.error);
        }

    } catch (error) {
        throw new Error('Erreur lors de la suppression du ticket: ' + error.message)
    }
};

export const updateTicket = async (id, formData) => {
    try {
        const req = await fetch(`${API_URL}/ticket/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
        });

        if (!req.ok) {
            const error = await req.json();
            throw new Error(error.error);
        }

        return req.json();
    } catch (error) {
        throw new Error('Erreur lors de la modification du ticket: ' + error.message);
    }
};
 


/* === API Users === */

export const signup = async (userData) => {
    try {
        const req = await fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!req.ok) {
            const errorData = await req.json();
            throw new Error(errorData.error);
        }

        return req.json();
    } catch (error) {
        throw new Error("Erreur lors de l'inscription " + error.message);
    }
};

export const login = async (userData) => {
    try {
        const req = await fetch(`${API_URL}/auth/login` , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!req.ok) {
            const errorData = await req.json();
            throw new Error(errorData.error);
        }

        return req.json();

    } catch (error) {
        throw new Error(error.message);
    }
}






export const fetchServiceLog = async (service) => {
    try {
        const res = await fetch(`${API_URL}/service/${service}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error);
        }

        return res.json();
    } catch (error) {
        throw new Error('Erreur lors de la récupération des logs :' + error.message)
    }
};