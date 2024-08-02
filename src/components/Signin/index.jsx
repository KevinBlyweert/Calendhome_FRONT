import { FormWrapper } from "../Wrapper";

export default function Signin() {
    function handleSignin() { }
    return (
        <FormWrapper log={false}>
            <input type="radio" name="accordion" id="radio2" />
            <label htmlFor="radio2">Nouvel utilisateur</label>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <label>
                    <p>Confirm password</p>
                    <input type="confirmpassword" />
                </label>
                <div>
                    <button type="submit" onClick={handleSignin}>Submit</button>
                </div>
            </form>
        </FormWrapper>
    )
}