import Preview from "../../components/Preview/Preview";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <AuthHeader />
        <LoginForm />
      </div>

      <Preview />
    </div>
  );
};

export default LoginPage;
