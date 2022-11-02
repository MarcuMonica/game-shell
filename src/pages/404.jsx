import { Link } from "react-router-dom"
import { FullscreenLayout } from "../layouts"

export const FourOhFour = () => {
    return <FullscreenLayout>
        <div className="w-screen h-screen flex justify-center items-center bg-pink-300">
            <div className="text-white text-center">
            <span className="text-7xl animate-pulse block">404</span>

<Link to="/" title="Home" className="font-bold">
    Go back home
</Link>
            </div>

        </div>
    </FullscreenLayout>
}