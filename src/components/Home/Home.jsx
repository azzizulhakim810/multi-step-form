import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FinalPhase from "../FinalPhase/FinalPhase";
import FirstPhase from "../FirstPhase/FirstPhase";
import Modal from "../Modal/Modal";
import SecondPhase from "../SecondPhase/SecondPhase";

const Home = () => {
  const navigate = useNavigate();
  const phaseNo = [1, 2, 3];
  const [formPhase, setFormPhase] = useState(phaseNo[0]);
  const [userInfo, setUserInfo] = useState({
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

  const handleInput = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(userInfo);
  // Previous Phase
  const prevPhase = () => {
    setFormPhase(formPhase - 1);
  };
  // Next Phase
  const nextPhase = () => {
    if (formPhase === 1 && userInfo.name && userInfo.email && userInfo.phone) {
      setFormPhase(formPhase + 1);
    } else if (
      formPhase === 2 &&
      userInfo.cardNumber &&
      userInfo.exp &&
      userInfo.cvc
    ) {
      setFormPhase(formPhase + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill those up!",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userInfo);
    document.getElementById("my_modal_5").showModal();
  };
  return (
    <>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: "url(/src/assets/background.svg)",
        }}
      >
        <div className="hero-overlay bg-blue-800 bg-opacity-70 relative">
          <div className="w-24 h-24 bg-blue-800 rounded-full absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 animate-[bounce_6s_ease-in-out_infinite] blur-sm delay-800"></div>

          <div className="w-24 h-24 bg-blue-800 rounded-full absolute bottom-28 right-1/3 -translate-x-1/2 -translate-y-1/2 animate-[bounce_6s_ease-in-out_infinite] blur-sm"></div>
        </div>

        <div className="hero-content customBG text-center text-neutral-content">
          <Modal
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setFormPhase={setFormPhase}
            formPhase={formPhase}
          />
          <div className="card w-[50vw] bg-transparent pt-5">
            <h1 className="text-white text-5xl font-bold uppercase pb-3 mb-5 ">
              Complete the servey
            </h1>
            {/* Phase Counter  */}
            <ul className="steps">
              {phaseNo.map((n, i) => (
                <li
                  key={i}
                  className={`step text-white ${
                    formPhase - 1 === i ||
                    formPhase - 1 === i + 1 ||
                    formPhase === phaseNo.length
                      ? "step-primary"
                      : ""
                  }`}
                ></li>
              ))}
            </ul>
            {/* First Phase  */}
            {formPhase === 1 && (
              <FirstPhase
                userInfo={userInfo}
                handleInput={handleInput}
                nextPhase={nextPhase}
              />
            )}

            {/* Second Phase  */}
            {formPhase === 2 && (
              <SecondPhase
                userInfo={userInfo}
                handleInput={handleInput}
                prevPhase={prevPhase}
                nextPhase={nextPhase}
              />
            )}

            {/* Final Phase  */}

            {formPhase === 3 && (
              <FinalPhase
                userInfo={userInfo}
                handleInput={handleInput}
                prevPhase={prevPhase}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
