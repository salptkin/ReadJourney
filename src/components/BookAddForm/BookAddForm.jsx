import { Formik } from "formik";
import toast from "react-hot-toast";
import InputField from "../GeneralUse/InputField/InputField";
import Button from "../GeneralUse/Button/Button";
import styles from "./BookAddForm.module.css";

const BookAddForm = ({ handleAddBook }) => {
  return (
    <Formik
      initialValues={{ title: "", author: "", totalPages: "" }}
      onSubmit={({ title, author, totalPages }, { resetForm }) => {
        if (
          !title.trim() ||
          !author.trim() ||
          (typeof totalPages === "string" && !totalPages.trim())
        ) {
          toast.error("All fields required!");
          return;
        }
        handleAddBook({ title, author, totalPages });
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <p className={styles.helper}>Create your library:</p>

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

          <InputField
            id="page"
            type="text"
            name="totalPages"
            value={values.totalPages.toString()}
            onChange={handleChange}
            placeholder="0"
            label="Number of pages:"
            inputStyles={styles.pagesInput}
            wrapperStyles={styles.pagesWrapper}
          />

          <Button
            type="submit"
            title="Add book"
            primary={false}
            className={styles.submitBtn}
          />
        </form>
      )}
    </Formik>
  );
};

export default BookAddForm;
