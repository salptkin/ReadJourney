import Preview from "../../components/Preview/Preview";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import SEO from "../../components/SEO/SEO";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <>
      <SEO
        title="Kayıt Ol"
        description="Read Journey'a ücretsiz kayıt olun ve kişiselleştirilmiş okuma deneyimine başlayın. Kitaplarınızı keşfedin, kütüphanenizi oluşturun."
        url="https://read-journey-iota.vercel.app/register"
      />
      <div className={styles.container}>
      <div className={styles.card}>
        <AuthHeader />
        <RegistrationForm />
      </div>

      <Preview />
      </div>
    </>
  );
};

export default RegistrationPage;
