export interface LoginData {
    fname: string;
    lname: string;
    email: string;
    phone_number: string;
    role: "Student" | "Teacher" | "Professional" | "Other";
    communication_preference: "Email" | "Phone" | "SMS";
}
export interface AuthState {
    isLoggedIn: boolean;
}