import { Link } from "react-router-dom";

const FirstPhase = ({ nextPhase, handleInput, userInfo }) => {
  return (
    <form className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white focus:outline-none">Name</span>
        </label>
        <input
          value={userInfo.name}
          onChange={handleInput}
          name="name"
          type="text"
          className="py-2 rounded px-2 border border-white text-white bg-transparent"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white focus:outline-none">
            Email
          </span>
        </label>
        <input
          value={userInfo.email}
          onChange={handleInput}
          name="email"
          type="email"
          className="py-2 rounded px-2 border border-white text-white bg-transparent"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white focus:outline-none">
            Phone
          </span>
        </label>
        <input
          value={userInfo.phone}
          onChange={handleInput}
          name="phone"
          type="tel"
          className="py-2 rounded px-2 border border-white text-white bg-transparent"
          required
        />
      </div>

      <div className="form-control mt-6">
        <Link to={`/home/secondPhase`}>
          <button
            onClick={nextPhase}
            className="btn w-full bg-[#fff] border-0 text-black uppercase hover:bg-blue-900 hover:text-white"
          >
            Next
          </button>
        </Link>
      </div>
    </form>
  );
};

export default FirstPhase;
