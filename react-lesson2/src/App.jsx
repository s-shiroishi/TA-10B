import { useState, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicInfoForm from "./components/Organism/BasicInfoForm";
import QuestionnaireForm from "./components/Organism/QuestionnaireForm";
import ConsultationForm from "./components/Organism/ConsultationForm";

function App() {
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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <BasicInfoForm
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
              consultation={consultation}
              setConsultation={setConsultation}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
