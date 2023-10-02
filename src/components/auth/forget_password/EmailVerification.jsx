// SignUp.jsx
import { useFormik } from "formik";
import { emailSchema } from "../../../schemas/AuthSchema";
import Input from "../../../helpers/Input";
import Button from "../../../helpers/Button";
import { useNavigate } from "react-router-dom";
const EmailVerification = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      navigate("/otpVerification")
    },
  });
  return (
    <>
      <div className="main_auth_css">
        <div className="contianer_auth_css">
          <div className="emailVerify_box_auth_css">
            <section>
              <div className="flex flex-col text-center p-2">
                <span className="text-lg font-bold">Forgot Your Password?</span>
                <p className="text-sm">
                  No worries! We'll help you reset it. Please enter your
                  registered email address, and we'll send you a link to reset
                  your password.
                </p>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="w-full flex flex-col justify-around gap-5"
              >
                <Input
                  id="email"
                  type="text"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.email}
                  touched={formik.touched.email}
                />
                <Button
                  onClick={formik.handleSignIn}
                  className="border-2 border-orange-500"
                  buttonName="Send OTP"
                />
              </form>
            </section>
            <footer className="col-span-2 flex gap-2 justify-center text-[12px]">
              Need assistance? Contact our support team at
              <span className="font-bold">support@dishdiscovery.com</span>.
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerification;
