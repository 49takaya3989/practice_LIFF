import { useEffect } from "react";
import liff from "@line/liff";

export const LoginPage = () => {
  useEffect(() => {
    liff.init({ liffId: import.meta.env.VITE_LIFF_ID }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        window.location.href = "/mypage";
      }
    });
  }, []);

  return <p>ログイン中...</p>;
};
