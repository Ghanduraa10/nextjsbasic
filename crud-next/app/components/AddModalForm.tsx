import * as React from 'react';

type AddModalFormProps = {
    setBlog: React.Dispatch<React.SetStateAction<any[]>>;
  };

const AddModalForm = ({ setBlog }: AddModalFormProps) => {
    
    const [isOpen, setIsOpen] = React.useState(false);
  
    const openModal = () => {
        console.log('open');
        
      setIsOpen(true);
    };
  
    const closeModal = () => {
        console.log('msk');
        
      setIsOpen(false);
    };


    return (
        <div>
        <button
          onClick={openModal}
          className='rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Add Blog
        </button>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className='absolute inset-0 bg-black opacity-50' onClick={closeModal}></div>
            <div className='bg-white rounded-md w-full max-w-md mx-auto z-50'>
              <div className='flex justify-between p-4 border-b dark:border-gray-600'>
                <div className="bg-white rounded-lg p-8">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click the button below to close</p>
                  <div className="modal-action">
                    {/* Close button */}
                    <button className="btn" onClick={closeModal}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default AddModalForm;
