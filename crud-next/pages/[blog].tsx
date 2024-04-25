"use client";

import { baseUrl } from "@/app/lib/api";
import axios from "axios";
import * as React from "react";

import { useRouter } from "next/router";

import "../app/globals.css";

type blogListProps = {
  id: number;
  title: string;
  content: string;
};

export default function BlogDetail() {
  const router = useRouter();

  const blogId = router.query.blog as string;

  const [blogs, setBlogs] = React.useState<blogListProps>();

  React.useEffect(() => {
    fetchDataById(blogId);
  }, [blogId]);

  const fetchDataById = async (id: string) => {
    try {
      const response = await axios.get(baseUrl + "/blog" + `/${blogId}`);
      const result = response.data;
      setBlogs(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{blogs?.title}</h2>
          <p>{blogs?.content}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </>
  );
}
