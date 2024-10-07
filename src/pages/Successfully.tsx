const Successfully = () => {
  return (
    <div className="flex justify-center pb-10 ">
      <div className="md:w-2/6">
        <div>
          <h1 className="font-bold text-center text-2xl text-green-600">
            Successfully Submitted!
          </h1>
          <div className="mt-5 flex justify-center">
            <img className="w-2/3" src="../../assets/images/successfully.png" />
          </div>

          <div>
            <p className="text-gray-600 font-semibold text-center">
              Our representative will get in touch with you shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Successfully;
