import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "./Layout/layout";
import Title from "./Layout/title";

export default function Notice() {
  const [criteria, setCriteria] = useState(null);

  const fetchCriteria = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_ENDPOINT + "/student/scholarship"
        );
      // const response = await axios.get("http://localhost:3000/student/scholarship");
      // const response = await fetch('/scholarship/'); // Update the API endpoint to match your backend setup
      const data = await response.data;
      setCriteria(data);
    }catch (error) {
      console.error("Error fetching criteria:", error);
    }
  };

  return (
    <>
      <Title page="Notice"> </Title>
      <Layout>
        <br />

        <div className="items-center justify-center ml-[600px]">

        
        <button className="text-4xl mb-4 text-cyan-800 border-8 rounded-lg hover:bg-cyan-400 " onClick={fetchCriteria}> Scholarship Criteria </button>
        </div>
        <div
          style={{
            width: "100%",
            height: "400px", 
            overflowY: "auto", 
            overflowX: "hidden", 
          }}
        >
        
        {criteria && (
          <div>
            <h2 className="text-2xl ml-2 mt-4 mb-4 ">Scholarship Details are given below: </h2>
            <pre>{JSON.stringify(criteria, null, 2)}</pre>
          </div>
        )}
</div>

        <br />
        <br />
        <br />
        
      </Layout>
    </>
  );
}
