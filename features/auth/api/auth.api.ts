
export const login = async (data: any) => {
    document.cookie = "isLoggedIn=true; path=/; max-age=86400";
    console.log(document.cookie);
    console.log('before redirect');
    window.location.href = '/categories'
};

