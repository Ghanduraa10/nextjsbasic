import * as React from "react";

import { Modal, Button } from "react-daisyui";

type AddModalFormProps = {
  setBlog: React.Dispatch<React.SetStateAction<any[]>>;
};

const AddModalForm = ({ setBlog }: AddModalFormProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add Blog
      </button>
      <Modal backdrop={false} open={isOpen} className="bg-white">
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>
          <form className="w-full max-w-md rounded-md bg-white p-8 text-gray-900 shadow ">
            <div className="flex justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
              <h3 className="dark:text-dark text-xl font-semibold">
                Edit Product
              </h3>
            </div>
            <div className="mb-2 mt-5 px-5">
              <label className="dark:text-dark mb-2 block text-sm font-medium">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="sm:text-md dark:bg-white-700 dark:text-dark block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
            <div className="mb-2 mt-5 px-5">
              <label className="dark:text-dark mb-2 block text-sm font-medium">
                Content
              </label>
              <input
                type="text"
                name="content"
                className="sm:text-md dark:bg-white-700 dark:text-dark block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Actions>
          <div className="mb-2 mt-5 flex justify-end">
            <Button
              type="button"
              onClick={toggleModal}
              className="mb-2 me-2 rounded-full bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Cancel
            </Button>
            <Button
              type="submit"
              className="mb-2 me-2 flex items-center rounded-full bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Edit Product
            </Button>
          </div>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default AddModalForm;
