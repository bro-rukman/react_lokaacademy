import React, { useState, useEffect } from "react";
import "./post.scss";
import { getAllPostData, postData } from "../../services/serviceData";
export const PostData = ({}) => {
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [address, setaddress] = useState("");
  //   const [dataInput, setDataInput] = useState({
  //     name: "",
  //     age: 0,
  //     address: "",
  //   });
  const [dataPost, setDataPost] = useState([]);
  const handlePost = async () => {
    const data = {
      name: name,
      age: age,
      address: address,
    };
    await postData(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllPostData()
      .then((res) => {
        console.log(res);
        setDataPost(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);

  console.log(dataPost);
  return (
    <>
      <div className="post_container">
        <form action="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setname(e.target.value)}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            onChange={(e) => setage(e.target.value)}
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            onChange={(e) => setaddress(e.target.value)}
          />
          <button onClick={() => handlePost()}>submit</button>
        </form>
      </div>
      <div>
        {dataPost?.length > 0 ? (
          dataPost?.map((item, idx) => {
            return (
              <div>
                <p>name : {item.name}</p>
                <p>age : {item.age}</p>
                <p>address : {item.address}</p>
              </div>
            );
          })
        ) : (
          <div>No data</div>
        )}
      </div>
    </>
  );
};
