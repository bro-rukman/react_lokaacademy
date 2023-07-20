import React, { useState, useEffect } from "react";
import "./post.scss";
import {
  deletePostData,
  getAllPostData,
  getPostDataById,
  postData,
  putPostData,
} from "../../services/serviceData";
import { useHistory } from "react-router-dom";
export const PostData = ({}) => {
  const [dataInput, setDataInput] = useState({
    name: "",
    age: 0,
    address: "",
  });
  const [dataPost, setDataPost] = useState([]);
  const handlePost = async () => {
    await postData(dataInput)
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

  const history = useHistory();
  const [dataUpdated, setDataUpdated] = useState({});
  const handleUpdateData = async (id) => {
    const dataUpdate = await getPostDataById(id);
    setDataUpdated(dataUpdate);
  };
  const handlePutData = async () => {
    await putPostData(dataUpdated?.id, dataUpdated)
      .then((res) => {
        console.log(res);
        reload();
        // history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = async (id) => {
    await deletePostData(id)
      .then((res) => {
        console.log(res);
        reload();
        // history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const reload = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="post_container">
        <form action="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              setDataInput({
                ...dataInput,
                name: e.target.value,
              })
            }
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            onChange={(e) =>
              setDataInput({
                ...dataInput,
                age: e.target.value,
              })
            }
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            onChange={(e) =>
              setDataInput({
                ...dataInput,
                address: e.target.value,
              })
            }
          />
          <button onClick={() => handlePost()}>submit</button>
        </form>
      </div>
      <div className="post_grid">
        {dataPost?.length > 0 ? (
          dataPost?.map((item, idx) => {
            return (
              <div className="card_post">
                <p>name : {item.name}</p>
                <p>age : {item.age}</p>
                <p>address : {item.address}</p>
                <div className="flex_button">
                  <button onClick={() => handleUpdateData(item.id)}>
                    Update
                  </button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </div>
            );
          })
        ) : (
          <div>No data</div>
        )}
      </div>
      <div>
        <form action="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={dataUpdated.name}
            onChange={(e) =>
              setDataUpdated({
                ...dataUpdated,
                name: e.target.value,
              })
            }
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={dataUpdated.age}
            onChange={(e) =>
              setDataUpdated({
                ...dataUpdated,
                age: e.target.value,
              })
            }
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={dataUpdated.address}
            onChange={(e) =>
              setDataUpdated({
                ...dataUpdated,
                address: e.target.value,
              })
            }
          />
          <button onClick={() => handlePutData()}>Update data</button>
        </form>
      </div>
    </>
  );
};
