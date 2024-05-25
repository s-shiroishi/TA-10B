import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import StepLabel from "../basis/StepLabel";
import FormTitle from "../basis/FormTitle";
import FormContent from "../basis/FormContent";
import FormField from "../basis/FormField";
import Button from "../basis/Button";

const ConsultationForm = ({ consultation, setConsultation }) => {
  const navigate = useNavigate();

  const handleNavigation = (to) => {
    navigate(to);
  };
  return (
    <Form
      header={
        <>
          <StepLabel text="STEP3" />
          <FormTitle title="ご相談内容をご記入ください" />
        </>
      }
      body={
        <>
          <FormContent>
            <FormField label="-ご相談内容-">
              <textarea
                value={consultation}
                onChange={(e) => setConsultation(e.target.value)}
                className="h-72 w-full border border-gray-300 rounded-sm p-2 outline-none"
              />
            </FormField>
          </FormContent>
        </>
      }
      footer={
        <>
          <Button
            text="前に戻る"
            onClick={() => handleNavigation("/questionnaire")}
          />
          <Button text="次に進む" />
        </>
      }
    />
  );
};

export default ConsultationForm;
