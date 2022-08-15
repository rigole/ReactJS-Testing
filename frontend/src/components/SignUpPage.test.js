import SignUpPage from "./SignUpPage";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
const sign = require("./SignUpPage")


   /*test("add header", () => {
       expect(sign).toMatchSnapshot("<h1>")
   })*/

describe('Sign Up Page', () => {
    describe('Layout', () => {
        /*it('should have input',  () => {
            //expect(sign).toMatchSnapshot("<input/>")
            const { container  } = render(<SignUpPage/>)
            const input = container.querySelector('input');
            expect(input).toBeInTheDocument();
        });*/
        /*it('has email input', () => {
            const { container } = render(<SignUpPage/>);
            const inputs = container.querySelectorAll('input');
            expect(inputs.length).toBe(2);
        });
        it('has username label', () => {
            render(<SignUpPage/>);
            const input = screen.getByLabelText('username');
            expect(input).toBeInTheDocument();
        });
        it('has email input', () => {
            render(<SignUpPage/>);
            const input = screen.getByPlaceholderText('email');
            expect(input).toBeInTheDocument();
        });*/
    });
     describe("Testing interactions" , () => {
         it("enables the button when password have same savuel" , ()=> {
             render(<SignUpPage/>);
             const passwordInput = screen.getByLabelText('password');
             const passwordRepeat = screen.getByLabelText("Password Repeat")
             userEvent.type(passwordInput, "Password");
             userEvent.type(passwordRepeat, "Password");
             const button = screen.queryByRole('button', { name: 'Sign Up' });
             expect(button).toBeDisabled();
         })
     })
})

