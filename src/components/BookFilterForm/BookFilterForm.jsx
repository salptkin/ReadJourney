import { Formik } from "formik";
import InputField from "../GeneralUse/InputField/InputField";
import Button from "../GeneralUse/Button/Button";
import styles from "./BookFilterForm.module.css";

const BookFilterForm = ({ handleFilter }) => {
  return (
    <Formik
      initialValues={{ title: "", author: "" }}
      onSubmit={({ title, author }) => {
        handleFilter({ title: title.trim(), author: author.trim() });
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <p className={styles.helper}>Filters:</p>

          <InputField
            id="title"
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Enter text"
            label="Book title:"
            inputStyles={styles.titleInput}
            wrapperStyles={styles.titleWrapper}
          />

          <InputField
            id="author"
            type="text"
            name="author"
            value={values.author}
            onChange={handleChange}
            placeholder="Enter text"
            label="The author:"
            inputStyles={styles.authorInput}
            wrapperStyles={styles.authorWrapper}
          />

          <Button
            type="submit"
            title="To apply"
            primary={false}
            className={styles.submitBtn}
          />
        </form>
      )}
    </Formik>
  );
};

export default BookFilterForm;
