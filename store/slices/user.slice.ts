import { create } from "zustand";

type User = {
    isLoggedIn: boolean,
    setIsLoggedIn: (val: boolean) => void
}

const useUserStore = create<User>(set => ({
    isLoggedIn: false,
    setIsLoggedIn: (val) => set({ isLoggedIn: val })
}))


// Initialize Zustand state with cookie value
function initializeStoreFromCookies() {
    // Native function to get a cookie value by name
    function getCookieValue(name: string): string | undefined {
        const cookies = document.cookie.split('; '); // Split cookies into key-value pairs
        const cookie = cookies.find((row) => row.startsWith(`${name}=`));
        return cookie ? cookie.split('=')[1] : undefined; // Extract the value if found
    }

    // Get the value of the 'isLoggedIn' cookie
    if (typeof window !== 'undefined') {

        const isLoggedInCookie = getCookieValue('isLoggedIn') === 'true';

        // Update the Zustand store
        useUserStore.getState().setIsLoggedIn(isLoggedInCookie);
    }
}


// Call this in your app initialization
initializeStoreFromCookies();

export default useUserStore;