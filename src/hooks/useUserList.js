import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue, get } from "firebase/database";

export default function useUserList() {
  const db = getDatabase();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dataRef = ref(db, "users/");
  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError(false);
        onValue(dataRef, (snapshot) => {
          const arr = [];
          if (snapshot.exists()) {
            snapshot.forEach((item) => {
              arr.push({ ...item.val(), key: item.key });
            });
          }
          setData(arr);
        });
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
    fetchUsers();
  }, []);

  return { data, loading, error };
}
