import { Suspense } from "react";
import styles from "../styles/Auth.module.css";
import RegistrationFormSkeleton from "@/components/Skeletons/RegistrationFormSkeleton";
import RegistrationForm from "@/components/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div className="h-full flex justify-center items-center my-20">
      <div className="authCard">
        <h2 className={styles.authTitle}>Sign Up</h2>
        <h5 className={styles.authSubTitle}>Create your account to get started</h5>
        <Suspense fallback={<RegistrationFormSkeleton />}>
          <RegistrationForm />
        </Suspense>
      </div>
    </div>
  );
}
