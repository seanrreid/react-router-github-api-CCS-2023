import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id='error-page'>
            <h1>D&apos;oh!</h1>
            <p>Something is busted!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
