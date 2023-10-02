import { useFormik } from "formik";
import Button from "../../../helpers/Button";
import Input from "../../../helpers/Input";
import { otpSchema } from "../../../schemas/AuthSchema";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: otpSchema,
    onSubmit: (values) => {
      navigate("/changePassword")
    },
  });
  return (
    <>
      <div className="main_auth_css">
        <div className="contianer_auth_css">
          <div className="emailVerify_box_auth_css">
            <section>
              <div className="flex flex-col text-center p-2">
                <span className="text-lg font-bold">OTP Verification</span>
                <p className="text-sm">
                  To ensure the security of your account, we've sent a one-time
                  verification code to your email address. Please enter the code
                  below to proceed.
                </p>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="w-full flex flex-col justify-around gap-5"
              >
                <Input
                  id="otp"
                  type="text"
                  label="OTP"
                  value={formik.values.otp}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.otp}
                  touched={formik.touched.otp}
                />
                <Button
                  onClick={formik.handleSignIn}
                  className="border-2 border-orange-500"
                  buttonName="Verify OTP"
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

export default OtpVerification;
