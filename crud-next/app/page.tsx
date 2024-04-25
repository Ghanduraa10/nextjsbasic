"use client"


import * as React from 'react'
import CardList from "./components/CardList";
import Navbar from "./components/Navbar";
import axios from 'axios';
import { baseUrl } from './lib/api';


type blogListProps = {
  blog: [];
};

export default function Home() {

  
  const [blogs, setBlogs] = React.useState<blogListProps[]>([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get( baseUrl + '/blog');
      const result = await response.data;
      setBlogs(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar setBlog={setBlogs} />
      <div className="mt-10 pl-2">
        <CardList blog={blogs} setBlog={setBlogs}/>
      </div>
    </>
  );
}
