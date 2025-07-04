import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter = () => {
    return (
        <div>
            <Routes>
                {routes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element/>}
                    />
                ))}
            </Routes>
        </div>
    )
}