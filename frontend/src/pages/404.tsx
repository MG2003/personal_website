import {useRouteError} from "react-router-dom"

export default function BadURL(){
    const error = useRouteError();
    console.error(error)
    return(
        <div>
            <p>Oopsie poopsie you did a woopsie</p>
            <p>
            <i>
                {(error as Error)?.message ||
                    (error as { statusText?: string })?.statusText}
                </i>
            </p>
        </div>
    );
}