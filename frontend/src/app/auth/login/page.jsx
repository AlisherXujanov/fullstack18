import Link from "next/link";

function Login() {
    return (
        <div>
            <h1>Login</h1>

            <p>
                <small>
                    Don't have an account? <Link href="/auth/register">Register</Link>
                </small>
            </p>
        </div>
    )
}

export default Login;