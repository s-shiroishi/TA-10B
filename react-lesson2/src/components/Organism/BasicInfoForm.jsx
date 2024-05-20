import React from "react";
import Form from "./Form";
import FormTitle from "../basis/FormTitle";
import StepLabel from "../basis/StepLabel";
import FormContent from "../basis/FormContent";
import FormField from "../basis/FormField";
import RadioGroup from "../basis/RadioGroup";
import SelectGroup from "../basis/SelectGroup";
import FormButton from "../basis/FormButton";
import {
  generateYearOptions,
  generateMonthOptions,
  generateDayOptions,
} from "../../utils";

const BasicInfoForm = ({ birthday, setBirthday, gender, setGender }) => {
  const selectConditions = [
    {
      label: "年",
      options: generateYearOptions(),
      name: "year",
      value: birthday.year,
    },
    {
      label: "月",
      options: generateMonthOptions(),
      name: "month",
      value: birthday.month,
    },
    {
      label: "日",
      options: generateDayOptions(birthday.year, birthday.month),
      name: "day",
      value: birthday.day,
    },
  ];

  return (
    <Form
      header={
        <>
          <StepLabel text="STEP1" />
          <FormTitle title="お客様の情報を入力してください" />
        </>
      }
      body={
        <>
          <FormContent>
            <FormField label="-性別-">
              <RadioGroup
                value={gender}
                onChange={setGender}
                cond={{
                  name: "gender",
                  values: ["男性", "女性"],
                }}
              />
            </FormField>
            <FormField label="-生年月日-">
              <SelectGroup
                value={birthday}
                onChange={setBirthday}
                cond={selectConditions}
              />
            </FormField>
          </FormContent>
        </>
      }
      footer={<FormButton text="次に進む" to="/questionnaire" />}
    />
  );
};

export default BasicInfoForm;
