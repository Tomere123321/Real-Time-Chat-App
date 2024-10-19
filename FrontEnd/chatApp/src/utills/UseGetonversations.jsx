import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UseGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzBlN2JiNmFjZTkwMzc1NTIyNTAyMDAiLCJpYXQiOjE3MjkzNTkwOTF9.7FbsUnM4mDGuKm72A6rE8KTYgv_DRItUfrOz-6EmGQc"
;
       
        const response = await axios.get("http://localhost:8000/users", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        const data = response.data; 
        
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
};

export default UseGetConversations;

