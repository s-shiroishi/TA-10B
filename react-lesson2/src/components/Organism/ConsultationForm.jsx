import React from "react";
import Form from "./Form";
import StepLabel from "../basis/StepLabel";
import FormTitle from "../basis/FormTitle";
import FormContent from "../basis/FormContent";
import FormField from "../basis/FormField";
import FormButton from "../basis/FormButton";

const ConsultationForm = ({ consultation, setConsultation }) => {
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
          <FormButton text="前に戻る" to="/questionnaire" />
          <FormButton text="次に進む" />
        </>
      }
    />
  );
};

export default ConsultationForm;
