import { useAuth } from "./useAuth";
import { login } from "../api/auth.api";

export const useLogin = () => {
    const { setIsLoggedIn } = useAuth();

    const handleLogin = (data: any) => {
        setIsLoggedIn(true);
        login(data);
    };

    return { handleLogin };
};
