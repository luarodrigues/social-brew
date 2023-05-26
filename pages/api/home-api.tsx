import { NextApiRequest, NextApiResponse } from "next";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebaseConfig/firebaseConfig";

interface Recipe {
  beans: string;
  brewMethod: string;
  roaster: string;
  comments: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Recipe | string>
) {
  initializeApp(firebaseConfig);
  const db = getFirestore();

  const fetchData = async () => {
    try {
      const firestore = getFirestore();
      const documentRef = doc(firestore, "recipes", "C7Z6fIVl1yUWSgdwLkx0");
      onSnapshot(documentRef, (doc) => {
        if (doc.exists()) {
          const data: any = doc.data();
          res.status(200).json(data);
        }
      });
    } catch (error) {
      res.status(500).json("Internal server error");
    }
  };

  if (req.method === "GET") {
    await fetchData();
  }
}
