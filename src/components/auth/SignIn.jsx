// SignIn.jsx
import { useFormik } from "formik";

/** Styling */
import "./auth.css";
import { loginSchema } from "../../schemas/AuthSchema";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../helpers/Input";
import Button from "../../helpers/Button";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/authAction";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginAction(values,navigate));
    },
  });

  return (
    <>
      <div className="main_auth_css">
        <div className="contianer_auth_css">
          <div className="box_auth_css">
            <header className="flex flex-col items-center gap-10 py-10 px-5">
              <div className="text-[24px] font-bold text-orange-500">
                Welcome to DishDicovery !
              </div>
              <div className="text-[20px] text-gray-500 px-5 text-center">
                Login to explore a world of delicious recipes and dishes.
                Discover, cook, and share your culinary creations with food
                enthusiasts from around the globe.
              </div>
            </header>
            <section>
              <div className="text-[14px] text-center font-bold py-10 px-5">
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
                <div className="flex justify-end">
                  <Link
                    to="/emailVerification"
                    className="text-[12px] text-orange-500"
                  >
                    Forget Password ?
                  </Link>
                </div>
                <Button
                  onClick={formik.handleSignIn}
                  className="border-2 border-orange-500"
                  buttonName="Login"
                />
                <div className="flex gap-2 justify-center">
                  <span className="">New to DishDiscovery?</span>
                  <Link to="/signup" className="text-orange-500 cursor-pointer">
                    Sign up here!
                  </Link>
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

export default SignIn;
