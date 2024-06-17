import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            Navbar: {
                'Home': 'Home',
                'Opened': 'Opened Tickets',
                'Mine': 'My Tickets',
                'New': 'Create Ticket',
                'Login': 'Login'
            },
            Home: {
                'Subtitle': 'Our support ticket management application'
            },
            Opened: {
                'None': 'There is currently no ticket !'
            },
            Owned: {
                'None': 'You have no tickets for now !'
            },
            Create: {
                'Title': 'Create a ticket',
                'Subtitle': 'Title',
                'File': 'Choose a file',
                'Prio': 'Priority',
                'Valid': 'Submit'
            },
            Modify: {
                'Title': 'Modify a ticket',
                'File': 'Current image',
                'Button-Back': 'Back',
                'Button-Mod': 'Modify',
                'Button-Del': 'Delete'
            },
            Login: {
                'Login': 'Login',
                'Mail': 'Mail',
                'Pass': 'Password',
                'Sub': 'Not registered yet ?',
                'Link': 'Register',
                'Button': 'Log in'
            },
            Connect: {
                'Button': 'Log in',
                'Button-Sub': 'Log out'
            },
            Register: {
                'Title': 'Registration',
                'Name': 'Name',
                'Mail': 'Mail',
                'Pass': 'Password',
                'Sub': 'Already registered ?',
                'Link': 'Login',
                'Button': 'Register'
            }
        }
    },
    fr: {
        translation: {
            Navbar: {
                'Home': 'Accueil',
                'Opened': 'Tickets ouverts',
                'Mine': 'Mes tickets',
                'New': 'Créer un ticket',
                'Login': 'Connexion'
            },
            Home: {
                'Subtitle': 'Notre application de gestion de tickets de support'
            },
            Opened: {
                'None': 'Aucun tickets à consulter !'
            },
            Owned: {
                'None': "Vous n'avez aucun tickets !"
            },
            Create: {
                'Title': 'Créer un ticket',
                'Subtitle': 'Titre',
                'File': 'Choisir un fichier',
                'Prio': 'Priorité',
                'Valid': 'Valider'
            },
            Modify: {
                'Title': 'Modifier un ticket',
                'File': 'Image actuelle',
                'Button-Back': 'Retour',
                'Button-Mod': 'Modifier',
                'Button-Del': 'Supprimer'
            },
            Login: {
                'Login': 'Connexion',
                'Mail': 'Adresse Mail',
                'Pass': 'Mot de passe',
                'Sub': 'Pas encore inscrit ?',
                'Link': 'Inscription',
                'Button': 'Se connecter'
            },
            Connect: {
                'Button': 'Connexion',
                'Button-Sub': 'Se déconnecter'
            },
            Register: {
                'Title': 'Inscription',
                'Name': 'Nom',
                'Mail': 'Adresse Mail',
                'Pass': 'Mot de passe',
                'Sub': 'Déjà inscrit ?',
                'Link': 'Connexion',
                'Button': "S'inscrire"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        supportedLngs: ['fr', 'en'],
        resources,
        lng: 'fr',
        keySeparator: '.',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;