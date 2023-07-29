import { useRouteError } from "react-router-dom";
import Root from "./routes/root";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <>
            <Root />
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occured.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    )
}