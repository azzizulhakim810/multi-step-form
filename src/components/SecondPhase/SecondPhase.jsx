import { Link } from "react-router-dom";

const SecondPhase = ({ prevPhase, nextPhase, handleInput, userInfo }) => {
  return (
    <form className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white focus:outline-none">
            Card Number
          </span>
        </label>
        <input
          value={userInfo.cardNumber}
          onChange={handleInput}
          name="cardNumber"
          type="number"
          className="py-2 rounded px-2 border border-white text-white bg-transparent"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white focus:outline-none">
            Expire Date
          </span>
        </label>
        <input
          value={userInfo.exp}
          onChange={handleInput}
          name="exp"
          type="date"
          className="py-2 rounded px-2 border border-white text-white bg-transparent"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white focus:outline-none">CVC</span>
        </label>
        <input
          value={userInfo.cvc}
          onChange={handleInput}
          name="cvc"
          type="number"
          className="py-2 rounded px-2 border border-white text-white bg-transparent"
          required
        />
      </div>

      <div className="form-control mt-6">
        <div className="flex justify-center gap-2">
          <Link className="w-1/2" to="/home/firstPhase">
            <button
              onClick={prevPhase}
              className="btn w-full bg-[#fff] border-0 text-black uppercase hover:bg-black hover:text-white"
            >
              Previous
            </button>
          </Link>
          <Link className="w-1/2" to="/home/finalPhase">
            <button
              onClick={nextPhase}
              className="btn  w-full bg-[#fff] border-0 text-black uppercase hover:bg-blue-900 hover:text-white"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SecondPhase;
