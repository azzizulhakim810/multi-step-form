const Modal = ({ userInfo, setUserInfo, setFormPhase, formPhase }) => {
  const resetForm = () => {
    setUserInfo({
      name: "",
      email: "",
      phone: "",
      cardNumber: "",
      exp: "",
      cvc: "",
      nid: "",
      presentAddress: "",
      permanentAddress: "",
    });
    setFormPhase(formPhase - 2);
  };
  const {
    name,
    email,
    phone,
    cardNumber,
    exp,
    cvc,
    nid,
    presentAddress,
    permanentAddress,
  } = userInfo || {};
  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle mx-auto "
      >
        <div className="w-full py-8 shadow h-screen flex justify-center items-center customBG text-center text-white">
          <div>
            <h1 className="text-5xl font-bold uppercase pb-3 mb-5 border-dashed border-b-2">
              All the Info
            </h1>
            <div className="text-left">
              <p className="font-normal text-lg">
                Name: <span>{name}</span>
              </p>
              <p className="font-normal text-lg">
                Email: <span>{email}</span>
              </p>
              <p className="font-normal text-lg">
                Phone: <span>{phone}</span>
              </p>
              <p className="font-normal text-lg">
                Card Number: <span>{cardNumber}</span>
              </p>
              <p className="font-normal text-lg">
                Expired: <span>{exp}</span>
              </p>
              <p className="font-normal text-lg">
                CVC: <span>{cvc}</span>
              </p>
              <p className="font-normal text-lg">
                NID: <span>{nid}</span>
              </p>
              <p className="font-normal text-lg">
                Present Address: <span>{presentAddress}</span>
              </p>
              <p className="font-normal text-lg">
                Permanent Address: <span>{permanentAddress}</span>
              </p>
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button
                  onClick={resetForm}
                  className="btn bg-slate-200 text-black border-none hover:bg-black hover:text-white"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
