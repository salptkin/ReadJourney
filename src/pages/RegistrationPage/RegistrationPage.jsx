import Preview from "../../components/Preview/Preview";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <AuthHeader />
        <RegistrationForm />
      </div>

      <Preview />
    </div>
  );
};

export default RegistrationPage;
