import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>EstateHospitalityHub | Contact</title>
        </Helmet>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxKsIamdHYXpIFYbQaLxahmR7EGLJjGc0wQ&s"
          alt=""
          className="w-full objectFit lg:h-[456px] rounded-xl"
        />
      </div>
      <div className="lg:px-[104px] pb-10 lg:mx-0 mx-6">
        <h1 className="text-3xl font-semibold py-5 text-center">Contact Us</h1>
        <h1 className="text-3xl font-semibold">Name : Naimul Islum Emon</h1>
        <h2 className="text-2xl font-semibold">
          Email : naimulislum39@gmail.com
        </h2>
        <p className="text-xl font-semibold">Call us : 018********</p>
      </div>
    </>
  );
};

export default Contact;
