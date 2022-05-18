import React, { useState, useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import useToken from "../../../Hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [sendPasswordResetEmail, sending, passError] =
    useSendPasswordResetEmail(auth);
  let signInError;
  const [email, setEmail] = useState();
  const [token] = useToken(user || gUser);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const handleResetPass = async (email) => {
    console.log(email);
    if (email) {
      await sendPasswordResetEmail(email);
      alert("Password reset email sent!");
    } else {
      alert("Please Enter Your Mail");
    }
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (loading || gLoading || sending) {
    return <Loading></Loading>;
  }

  if (error || gError || passError) {
    signInError = (
      <p className="text-red-700 text-xl">
        {error?.message || gError?.message}
      </p>
    );
  }

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Find Your Perfect Smile!Get an Expert Medical Opinion from one of
            our world-renowned specialists so you can have the answers and
            confidence to make informed decisions about your health.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:mx-28">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  onFocus={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                      message: "Give a valid email address!",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-700">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-700">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer!",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                </label>

                <label className="label">
                  <button
                    onClick={() => handleResetPass(email)}
                    className="btn btn-link"
                  >
                    Forgot password?
                  </button>
                </label>
              </div>
              {signInError}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary text-white"
                />
              </div>
            </form>
            <p>
              <small>
                New to Doctors's Portal?
                <Link className="text-primary" to="/signup">
                  {" "}
                  Create new account
                </Link>{" "}
              </small>
            </p>
            <div className="divider">OR</div>
            <div className="mt-6 ">
              <button
                className="btn btn-accent text-white w-full"
                onClick={() => signInWithGoogle()}
              >
                Continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
