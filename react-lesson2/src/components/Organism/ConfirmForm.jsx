import React from "react";
import Form from "../basis/Form";
import StepLabel from "../basis/StepLabel";
import FormTitle from "../basis/FormTitle";
import FormContent from "../basis/FormContent";
import FormField from "../basis/FormField";
import Button from "../basis/Button";

const ConfirmForm = ({
  handleNavigation,
  gender,
  birthday,
  question1,
  question2,
  question3,
  consultation,
}) => {
  const confirmList = [
    { label: "-性別-", value: gender },
    {
      label: "-生年月日-",
      value: `${birthday.year}年${birthday.month}月${birthday.day}日`,
    },
    { label: "-現在、生命保険に加入されていますか？-", value: question1 },
    {
      label:
        "-現在入院中ですか。または、最近3ヶ月以内に医師の診療・検査の結果、入院・手術を勧められたことはありますか？-",
      value: question2,
    },
    {
      label:
        "-過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-",
      value: question3,
    },
    { label: "-ご相談内容-", value: consultation },
  ];
  return (
    <Form
      header={
        <>
          <StepLabel text="STEP4" />
          <FormTitle title="以下の内容をご確認ください" />
        </>
      }
      body={
        <>
          <FormContent>
            {confirmList.map((confirm) => (
              <FormField key={confirm.label} label={confirm.label}>
                <p className="ml-10 ">{confirm.value}</p>
              </FormField>
            ))}
          </FormContent>
        </>
      }
      footer={
        <>
          <Button
            text="前に戻る"
            onClick={() => handleNavigation("consultation")}
          />
          <Button text="送信" />
        </>
      }
    />
  );
};

export default ConfirmForm;
