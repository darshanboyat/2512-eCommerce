import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoArrowForward } from "react-icons/io5";
import { GrAdd } from "react-icons/gr";

const ProductForm = () => {
  const initialValues = {
    name: "",
    breadcrumb: "",
    images: [],
    actualPrice: "",
    price: 0,
    offPercentage: "30%",
    rating: 0,
    numberOfRatings: 149,
    color: "",
    category: "T-Shirt",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(<RiErrorWarningFill />),
    breadcrumb: Yup.string().required(<RiErrorWarningFill />),
    images: Yup.array().required(<RiErrorWarningFill />),
    actualPrice: Yup.string().required(<RiErrorWarningFill />),
    price: Yup.number().required(<RiErrorWarningFill />),
    offPercentage: Yup.string().required(<RiErrorWarningFill />),
    rating: Yup.number().required(<RiErrorWarningFill />),
    numberOfRatings: Yup.number().required(<RiErrorWarningFill />),
    color: Yup.string().required(<RiErrorWarningFill />),
    category: Yup.string().required(<RiErrorWarningFill />),
  });

  const handleSubmit = (values) => {
    // Handle form submission, you can call your API to save the product data
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="my-2 flex flex-col">
          <label htmlFor="name">Name</label>
          <div className="relative">
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full border-b-2 border-black focus:outline-none active:outline-none"
            />
            <ErrorMessage
              className="absolute right-0 top-2"
              name="name"
              component="div"
            />
          </div>
        </div>

        <div className="my-2  flex flex-col">
          <label htmlFor="breadcrumb">Breadcrumb</label>
          <div className="relative">
            <Field
              type="text"
              id="breadcrumb"
              name="breadcrumb"
              className="w-full border-b-2 border-black focus:outline-none active:outline-none"
            />
            <ErrorMessage
              className="absolute right-0 top-2"
              name="breadcrumb"
              component="div"
            />
          </div>
        </div>
        <div className="my-2 flex flex-col">
          <label htmlFor="images">Images</label>
          <div className="flex flex-row flex-wrap gap-2 justify-between lg:max-w-[50vw] py-1 lg:py-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="relative">
                <label htmlFor={`imageInput${index}`}>
                  <GrAdd className="border-2 border-black w-12 h-12 p-3 cursor-pointer" />
                </label>
                <Field
                  type="file"
                  accept="image/*"
                  id={`imageInput${index}`}
                  name={`images[${index}]`}
                  className="sr-only"
                />

                <ErrorMessage
                  className="absolute right-0 top-2"
                  name={`images[${index}]`}
                  component="div"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="my-2  flex flex-col">
          <label htmlFor="actualPrice">Actual Price</label>
          <div className="relative">
            <Field
              type="text"
              id="actualPrice"
              name="actualPrice"
              className="w-full border-b-2 border-black focus:outline-none active:outline-none"
            />
            <ErrorMessage
              className="absolute right-0 top-2"
              name="actualPrice"
              component="div"
            />
          </div>
        </div>
        <div className="my-2  flex flex-col">
          <label htmlFor="price">Price</label>
          <div className="relative">
            <Field
              type="number"
              id="price"
              name="price"
              className="w-full border-b-2 border-black focus:outline-none active:outline-none"
            />
            <ErrorMessage
              className="absolute right-0 top-2"
              name="price"
              component="div"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="my-2 lg:mr-2 flex flex-col">
            <label htmlFor="offPercentage">Off Percentage</label>
            <div className="relative">
              <Field
                type="text"
                id="offPercentage"
                name="offPercentage"
                className="w-full border-b-2 border-black focus:outline-none active:outline-none"
              />
              <ErrorMessage
                className="absolute right-0 top-2"
                name="offPercentage"
                component="div"
              />
            </div>
          </div>
          <div className="my-2 lg:mx-2 flex flex-col">
            <label htmlFor="rating">Rating</label>
            <div className="relative">
              <Field
                type="number"
                id="rating"
                name="rating"
                className="w-full border-b-2 border-black focus:outline-none active:outline-none"
              />
              <ErrorMessage
                className="absolute right-0 top-2"
                name="rating"
                component="div"
              />
            </div>
          </div>
          <div className="my-2 lg:ml-2 flex flex-col">
            <label htmlFor="numberOfRatings">Total Ratings</label>
            <div className="relative">
              <Field
                type="number"
                id="numberOfRatings"
                name="numberOfRatings"
                className="w-full border-b-2 border-black focus:outline-none active:outline-none"
              />
              <ErrorMessage
                className="absolute right-0 top-2"
                name="numberOfRatings"
                component="div"
              />
            </div>
          </div>
        </div>
        <div className="my-2  flex flex-col">
          <label htmlFor="color">Color</label>
          <div className="relative">
            <Field
              type="text"
              id="color"
              name="color"
              className="w-full border-b-2 border-black focus:outline-none active:outline-none"
            />
            <ErrorMessage
              className="absolute right-0 top-2"
              name="color"
              component="div"
            />
          </div>
        </div>
        <div className="my-2 flex flex-col">
          <div className="relative">
            <label htmlFor="category">Category</label>
            <Field
              type="text"
              id="category"
              name="category"
              className="w-full border-b-2 border-black focus:outline-none active:outline-none"
            />
            <ErrorMessage
              className="absolute right-0 top-4"
              name="category"
              component="div"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#A86549] px-8 py-1 text-white rounded-lg flex items-center font-bold mt-6"
        >
          Submit &nbsp; <IoArrowForward />
        </button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
