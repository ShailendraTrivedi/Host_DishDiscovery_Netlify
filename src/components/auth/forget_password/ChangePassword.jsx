// SignUp.jsx
import { useFormik } from "formik";
import { passwordSchema } from "../../../schemas/AuthSchema";
import Input from "../../../helpers/Input";
import Button from "../../../helpers/Button";
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      navigate("/signin")
    },
  });
  return (
    <>
      <div className="main_auth_css">
        <div className="contianer_auth_css">
          <div className="emailVerify_box_auth_css">
            <section>
              <div className="flex flex-col text-center p-2">
                <span className="text-lg font-bold">Reset Your Password</span>
                <p className="text-sm">
                  You're almost there! Please enter your new password below to
                  reset it.
                </p>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="w-full flex flex-col justify-around gap-5"
              >
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
                <Button
                  onClick={formik.handleSignIn}
                  className="border-2 border-orange-500 w-[15rem]"
                  buttonName="Recover Password"
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

export default ChangePassword;
