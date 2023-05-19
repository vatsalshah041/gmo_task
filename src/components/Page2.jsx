import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import New from "./New";
export default function Page2() {
  const [data, setData] = useState();
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://jsonplaceholder.typicode.com/posts/",
      headers: {},
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(response.data);
        setData(response.data);
        // for (let i = 0; i < 100; i++) {
        //   rows.push((response.data)[i].userId,(response.data)[i].id,(response.data)[i].title,(response.data)[i].body);
        // }
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
  }, []);
  const columns = [
    { field: "userId", headerName: "UserId", width: 70 },
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 500 },
    { field: "body", headerName: "Body", width: 800 },
    // Add more columns as needed
  ];
  // const rows = [
  //   {
  //     userid: 1,
  //     id: 1,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro!",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro!",
  //   },

  //   // Add more rows as needed
  // ];
  const rows = data
  ? data.map((item) => ({
      id: item.id,
      userId: item.userId,
      title: item.title,
      body: item.body,
    }))
  : [];

  console.log(rows);

  return (
    <>
      {data ? (
        <>
          <div style={{ height: 1000, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
          <hr></hr>
          <hr></hr>
          <New></New>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
