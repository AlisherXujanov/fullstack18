import Link from "next/link";

function Register() {
    return (
        <div>
            <h1>Register</h1>

            <p>
                <small>
                    Already have an account? <Link href="/auth/login">Login</Link>
                </small>
            </p>
        </div>
    )
}

export default Register;