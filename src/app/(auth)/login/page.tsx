import { Metadata } from "next";

import LoginForm from "@/components/form/LoginForm";

import "./style.scss";

export const metadata: Metadata = {
  title: "Vodiy perfume | Login",
  description:
    "Vodiy perfume is an e-commerce site developed by Azamat Abraev, a softwaree engineer based in Tashkent, Uzbekistan",
};

const LoginPage = () => {
  return <div>
    <LoginForm/>
  </div>;
};

export default LoginPage;
