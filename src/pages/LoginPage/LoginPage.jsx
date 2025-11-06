import Preview from "../../components/Preview/Preview";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import LoginForm from "../../components/LoginForm/LoginForm";
import SEO from "../../components/SEO/SEO";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <>
      <SEO
        title="Giriş Yap"
        description="Read Journey hesabınıza giriş yapın ve kişiselleştirilmiş okuma deneyiminize devam edin."
        url="https://read-journey-iota.vercel.app/login"
      />
      <div className={styles.container}>
      <div className={styles.card}>
        <AuthHeader />
        <LoginForm />
      </div>

      <Preview />
      </div>
    </>
  );
};

export default LoginPage;
