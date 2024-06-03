import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import BasicInfoForm from "./components/Organism/BasicInfoForm";
import QuestionnaireForm from "./components/Organism/QuestionnaireForm";
import ConsultationForm from "./components/Organism/ConsultationForm";
import ConfirmForm from "./components/Organism/ConfirmForm";

function App() {
  const navigate = useNavigate();
  const routePaths = {
    basicInfo: "/",
    questionnaire: "/questionnaire",
    consultation: "/consultation",
    confirm: "/confirm",
  };

  const handleNavigation = (pathKey) => {
    navigate(routePaths[pathKey]);
  };

  const [birthday, setBirthday] = useState({
    year: "2000",
    month: "1",
    day: "1",
  });

  const [gender, setGender] = useState("女性");

  const [viewCount, setViewCount] = useReducer((state) => {
    if (state < 3) {
      return state + 1;
    }
    return state;
  }, 1);

  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");

  const [consultation, setConsultation] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <BasicInfoForm
            handleNavigation={handleNavigation}
            birthday={birthday}
            setBirthday={setBirthday}
            gender={gender}
            setGender={setGender}
          />
        }
      />
      <Route
        path="/questionnaire"
        element={
          <QuestionnaireForm
            handleNavigation={handleNavigation}
            viewCount={viewCount}
            setViewCount={setViewCount}
            question1={question1}
            setQuestion1={setQuestion1}
            question2={question2}
            setQuestion2={setQuestion2}
            question3={question3}
            setQuestion3={setQuestion3}
          />
        }
      />
      <Route
        path="/consultation"
        element={
          <ConsultationForm
            handleNavigation={handleNavigation}
            consultation={consultation}
            setConsultation={setConsultation}
          />
        }
      />
      <Route
        path="/confirm"
        element={
          <ConfirmForm
            handleNavigation={handleNavigation}
            gender={gender}
            birthday={birthday}
            question1={question1}
            question2={question2}
            question3={question3}
            consultation={consultation}
          />
        }
      />
    </Routes>
  );
}

export default App;
