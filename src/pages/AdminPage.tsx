import { useEffect, useState } from "react";

type User = {
  name: string;
  points: number;
};

export const AdminPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // 仮データ（将来的にSupabaseやFirestoreと連携）
    const dummyUsers: User[] = [
      { name: "太郎", points: 3 },
      { name: "花子", points: 5 },
    ];
    setUsers(dummyUsers);
  }, []);

  const resetPoints = (index: number) => {
    const updated = [...users];
    updated[index].points = 0;
    setUsers(updated);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">管理者画面</h2>
      {users.map((user, i) => (
        <div
          key={i}
          className="border-b py-2 flex justify-between items-center"
        >
          <div>
            {user.name}：{user.points} pt
          </div>
          <button
            onClick={() => resetPoints(i)}
            className="text-sm text-red-500 border border-red-500 px-2 py-1 rounded"
          >
            リセット
          </button>
        </div>
      ))}
    </div>
  );
};
