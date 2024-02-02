import { Link } from "react-router-dom";

const FinalPhase = ({ handleSubmit, prevPhase, handleInput, userInfo }) => {
  return (
    <form onSubmit={handleSubmit} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white focus:outline-none">
            NID Number
          </span>
        </label>
        <input
          value={userInfo.nid}
          onChange={handleInput}
          name="nid"
          type="number"
          className="py-2 rounded px-2 border border-white text-white bg-transparent"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white focus:outline-none">
            Present Address
          </span>
        </label>
        {/* <input
          name="presentAddress"
          type="text"
          className=" textarea-lg row-4 py-2 rounded px-2 border border-white text-white bg-transparent"
          required
        /> */}
        <textarea
          value={userInfo.presentAddress}
          onChange={handleInput}
          name="presentAddress"
          className="textarea bg-transparent px-2 border border-white text-white textarea-sm w-full"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white focus:outline-none">
            Permanent Address
          </span>
        </label>
        {/* <input
          name=""
          type="text"
          className="py-2 rounded px-2 border border-white text-white bg-transparent"
          required
        /> */}
        <textarea
          value={userInfo.permanentAddress}
          onChange={handleInput}
          name="permanentAddress"
          className="textarea bg-transparent px-2 border border-white text-white textarea-sm w-full"
          required
        />
      </div>

      <div className="form-control mt-6">
        <div className="flex justify-center gap-2">
          <Link className="w-1/2" to={`/home/secondPhase`}>
            <button
              onClick={prevPhase}
              className="btn w-full bg-[#fff] border-0 text-black uppercase hover:bg-black hover:text-white"
            >
              Previous
            </button>
          </Link>
          <button className="btn w-1/2 bg-[#fff] border-0 text-black uppercase hover:bg-blue-900 hover:text-white">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default FinalPhase;
