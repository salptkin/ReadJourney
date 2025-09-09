import { Formik } from "formik";
import toast from "react-hot-toast";
import InputField from "../GeneralUse/InputField/InputField";
import Button from "../GeneralUse/Button/Button";
import styles from "./ReadingForm.module.css";

const ReadingForm = ({ handleReading, isReadingStarted }) => {
  return (
    <Formik
      initialValues={{ page: "" }}
      onSubmit={({ page }, { resetForm }) => {
        if (typeof page === "string" && !page.trim()) {
          toast.error("Field page required!");
          return;
        }
        handleReading({ page });
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <p className={styles.helper}>
            {isReadingStarted ? "Stop page:" : "Start page:"}
          </p>

          <InputField
            id="page"
            type="text"
            name="page"
            value={values.page.toString()}
            onChange={handleChange}
            placeholder="0"
            label="Page number:"
            inputStyles={styles.pageInput}
            wrapperStyles={styles.pageWrapper}
          />

          <Button
            type="submit"
            title={isReadingStarted ? "To stop" : "To start"}
            primary={false}
            className={styles.submitBtn}
          />
        </form>
      )}
    </Formik>
  );
};

export default ReadingForm;
