// SignUp.jsx
import { useFormik } from "formik";

/** Styling */
import "./auth.css";
import { registerSchema } from "../../schemas/AuthSchema";
import Input from "../../helpers/Input";
import { useDispatch } from "react-redux";
import { registerAction } from "../../redux/actions/authAction";

const SignUp = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(registerAction(values));
    },
  });
  return (
    <>
      <div className="main_auth_css">
        <div className="contianer_auth_css">
          <div className="signup_box_auth_css">
            <section>
              <div className="text-[20px] text-center font-bold p-5">
                Login to your account or create a new one to get started.
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
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.password}
                  touched={formik.touched.password}
                />
                <Input
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.confirmPassword}
                  touched={formik.touched.confirmPassword}
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    onClick={formik.handleSignIn}
                    className="p-2 w-[10rem] rounded-3xl border-2 border-orange-500"
                  >
                    Register
                  </button>
                </div>
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

export default SignUp;
