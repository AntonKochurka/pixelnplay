export default function isAuthenticated() {
    return Boolean(localStorage.getItem("access_token"))
}