import RegistrationForm from "../components/RegistrationForm";

function Registration() {
  return (
    <div className="flex justify-center pb-10">
      <div className="md:w-2/4 ">
        <h1 className="font-bold text-2xl text-gray-600">Create Account</h1>
        <RegistrationForm />
        <div className="mt-10">
          <span className="text-xl text-gray-600 font-semibold">
            Already have an account?{" "}
            <button type="button" className="text-red-600">
              Log In
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Registration;
