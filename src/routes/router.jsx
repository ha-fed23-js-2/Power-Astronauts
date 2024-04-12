import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import LandingPage from './LandingPage.jsx';
import OrderPage from './OrderPage.jsx';
import ConfirmPage from './ConfirmPage.jsx';
import LoginPage from './LoginPage.jsx';
import EditPage from './EditPage.jsx';

const router = createHashRouter([
	{
		// Om URL i adressfältet matchar denna route '/'
		path: "/",

		// Så ska Root-komponenten renderas
		element: <Root />,

		// Lägg till ett element om du vill hantera felaktiga länkar
		// errorElement: <ErrorPage />,

		// Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
		children: [
			{
                path: '/',
                element: <LandingPage />
            },
			{
				path: '/Beställ',
				element: <OrderPage />
			},
			{
				path: '/bekräfta',
				element: <ConfirmPage />
			},
			{
				path: '/Logga-in',
				element: <LoginPage />
			},
            {
                path: '/Menyportal',
                element: <EditPage />
            }
		]
	},
	
]);

export { router }