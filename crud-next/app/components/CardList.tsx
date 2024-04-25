'use client'

import axios from "axios";
import { Pencil,Trash2 } from "lucide-react";
import * as React from 'react'
import { baseUrl } from "../lib/api";
import Swal from "sweetalert2";
import EditModalForm from "./EditModalForm";



type blogListProps = {
  blog: any[];
  setBlog: React.Dispatch<React.SetStateAction<any[]>>;
};


export default function CardList( {blog,setBlog} : blogListProps) {

  console.log(blog);
  

  const handleDelete = async (id : number) => {
    
    try {      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(  baseUrl + '/blog' + `/${id}`);
          setBlog(blog.filter(item => item.id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      })
    } catch (error) {
      console.error('Error deleting product:', error);
    } 
  };


  return (
    <>
       
  <div className="flex flex-wrap justify-start">
  {blog?.map((blog : any) => (
    <div className="card bg-base-100 w-80 mx-4 mb-4" key={blog.id}>
      <div className="card-body">
        <figure>
          <img src="https://plus.unsplash.com/premium_photo-1665329006985-04f95dd59402?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="shoes" className="w-full h-auto" />
        </figure>
        <h2 className="card-title flex justify-between items-center">
          {blog.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-base">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions flex justify-end">
        <button className="rounded-lg bg-base-100 px-2 py-2" onClick={() => handleDelete(blog.id)}><Trash2 /></button>
          <EditModalForm blog={blog} /> 
        </div>
      </div>
    </div>
  ))}
</div>

 
    </>
  );
}
