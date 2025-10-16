import { connectDB } from "@/lib/mongodb";
import ArticleModel from "@/models/Article";
import Image from "next/image";

export default async function Home() {
  await connectDB();
  const articles = await ArticleModel.find().lean();
  console.log("articles", articles.length);
  return (
    <div>HOme page</div>
  );
}
