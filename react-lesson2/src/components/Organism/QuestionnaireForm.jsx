import React from "react";
import Form from "../basis/Form";
import StepLabel from "../basis/StepLabel";
import FormTitle from "../basis/FormTitle";
import FormContent from "../basis/FormContent";
import FormField from "../basis/FormField";
import RadioGroup from "../basis/RadioGroup";
import Button from "../basis/Button";

const QuestionnaireForm = ({
  handleNavigation,
  viewCount,
  setViewCount,
  question1,
  setQuestion1,
  question2,
  setQuestion2,
  question3,
  setQuestion3,
  onClick,
}) => {
  const questions = [
    {
      label: "現在、生命保険に加入されていますか？",
      name: "question1",
      value: question1,
      onChange: setQuestion1,
    },
    {
      label:
        "現在入院中ですか。または、最近3ヶ月以内に医師の診療・検査の結果、入院・手術を勧められたことはありますか？",
      name: "question2",
      value: question2,
      onChange: setQuestion2,
    },
    {
      label:
        "過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？",
      name: "question3",
      value: question3,
      onChange: setQuestion3,
    },
  ];

  return (
    <Form
      header={
        <>
          <StepLabel text="STEP2" />
          <FormTitle title="以下にお答えください" />
        </>
      }
      body={
        <>
          <FormContent>
            {questions.slice(0, viewCount).map((question) => (
              <FormField key={question.name} label={question.label}>
                <RadioGroup
                  value={question.value}
                  onChange={(e) => question.onChange(e.target.value)}
                  onClick={(e) => setViewCount(e.target.value + 1)}
                  cond={{
                    name: question.name,
                    values: ["はい", "いいえ"],
                  }}
                />
              </FormField>
            ))}
          </FormContent>
        </>
      }
      footer={
        <>
          <Button
            text="前に戻る"
            onClick={() => handleNavigation("basicInfo")}
          />
          <Button
            text="次に進む"
            onClick={() => handleNavigation("consultation")}
          />
        </>
      }
    />
  );
};

export default QuestionnaireForm;
