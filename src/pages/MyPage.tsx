import { useEffect, useState } from "react";
import liff from "@line/liff";

export const MyPage = () => {
  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    liff.init({ liffId: import.meta.env.VITE_LIFF_ID }).then(async () => {
      if (liff.isLoggedIn()) {
        const profile = await liff.getProfile();
        setName(profile.displayName);
        setPictureUrl(profile.pictureUrl ?? "");

        // 仮ポイント（後でAPIに差し替え）
        const saved = localStorage.getItem("points");
        setPoints(saved ? Number(saved) : 0);
      }
    });
  }, []);

  const handleAddPoint = () => {
    const newPoints = points + 1;
    setPoints(newPoints);
    localStorage.setItem("points", newPoints.toString());
  };

  return (
    <div className="p-4 text-center">
      <img
        src={pictureUrl}
        alt="profile"
        className="rounded-full w-24 h-24 mx-auto mb-2"
      />
      <h1 className="text-xl font-bold">{name} さん</h1>
      <p className="my-2">保有ポイント：{points}pt</p>
      <button
        onClick={handleAddPoint}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        ポイントを貯める
      </button>
    </div>
  );
};
