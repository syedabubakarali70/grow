import { redirect } from "next/navigation";

export const login = async (data: any) => {
    document.cookie = "isLoggedIn=true; path=/; max-age=86400";
    redirect("/categories");
};
