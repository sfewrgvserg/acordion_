import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, doc, getDocs, query } from "firebase/firestore";

export default function Question() {
  const [data, setData] = useState([]);
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const mainRef = collection(db, "main-collection");
      const tourRef = doc(mainRef, "question");
      const listRef = collection(tourRef, "list-question");
      const q = query(listRef);
      const querySnapshot = await getDocs(q);
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(result);
    };
    fetchData();
  }, []);

  const handleClick = (itemId) => {
    setAnswer((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="w-[35%]">
        <div className="bg-white shadow-xl mx-auto p-10">
          <h1 className="flex justify-center font-bold text-4xl -text-primary-800">
            Questions
          </h1>
          <div className="">
            {data.map((item) => (
              <div className="" key={item.id}>
                <div className="flex flex-col items-center justify-between shadow-lg p-5 mt-10 rounded-sm">
                  <div className="flex justify-between w-full">
                    <h2 className="-text-primary-800 font-bold text-lg">
                      {item.ask}
                    </h2>
                    <button
                      className="-bg-primary-800 w-10 h-10 rounded-full text-white font-bold"
                      type="button"
                      onClick={() => {
                        handleClick(item.id);
                      }}
                    >
                      {answer[item.id] ? "-" : "+"}
                    </button>
                  </div>
                  {answer[item.id] && (
                    <p className="font-bold text-base text-gray-400">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
