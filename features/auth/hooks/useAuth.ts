import { useUserStore } from "@/store";

export const useAuth = () => {
    const { setIsLoggedIn } = useUserStore();
    return { setIsLoggedIn };
};