import {useRouteError, Link} from "react-router-dom"

export default function BadURL(){
    const error = useRouteError();
    console.error(error)
    return(
        <div className = "text-center">
            <h1>Oopsie poopsie you did a woopsie</h1>
            <p>
            <i>
                {(error as Error)?.message ||
                    (error as { statusText?: string })?.statusText}
                </i>
            </p>
            <Link to = "..">Go back!</Link>
        </div>
    );
}