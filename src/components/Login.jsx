import React, { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
  const [users, SetUser] = useState([]);
  const [record, setRecord] = useState([]);

  const filter = (event) => {
    setRecord(
     record.filter((f) => f.fname.toLowerCase().includes(event.target.value))
    );
  };

  const [FormData, SetformData] = useState({
    fname: "",
    address: "",
    gender: "",
    mobile: "",
    username: "",
    password: "",
  });
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    SetformData((from) => {
      return { ...from, [name]: value };
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const responce = await fetch("http://localhost:3000/demo", {
      method: "POST",
      body: JSON.stringify(FormData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await responce.json();
    console.log(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:3000/demo")
        .then((res) =>{
         SetUser(res.data)
      setRecord(res.data)
    })
      .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="Login">
        <div className="container  flex justify-center mt-6">
          <div className="w-96 h-[30rem] bg-gray-50 mx-auto flex rounded drop-shadow-2xl shadow-gray-200 ">
            <form onSubmit={handlesubmit}>
              <h1 className="text-2xl text-center">Register</h1>
              <input
                type="text"
                className="w-72 h-12  mt-2 mb-2 mx-8 rounded"
                placeholder="FullName"
                required
                name="fname"
                value={FormData.fname}
                onChange={handleInput}
              />
              <input
                type="text"
                className="w-72 h-12 mt-2 mb-2 mx-8 rounded"
                placeholder="Addess"
                required
                name="address"
                value={FormData.address}
                onChange={handleInput}
              />

              <input
                type="text"
                required
                name="gender"
                value={FormData.gender}
                onChange={handleInput}
                className="w-72 h-12 mt-2 mb-2 mx-8 rounded"
                placeholder="Gender"
              />

              <input
                type="text"
                className="w-72 h-12  mt-2 mb-2 mx-8 rounded"
                required
                placeholder="Mobile"
                name="mobile"
                value={FormData.mobile}
                onChange={handleInput}
              ></input>
              <input
                type="text"
                className="w-72 h-12  mt-2 mb-2 mx-8 rounded"
                required
                placeholder="UserName"
                name="username"
                value={FormData.username}
                onChange={handleInput}
              ></input>
              <input
                type="password"
                className="w-72 h-12  mt-2 mb-2 mx-8 rounded"
                required
                placeholder="PassWord"
                name="password"
                value={FormData.password}
                onChange={handleInput}
              ></input>
              <button
                type="submit"
                className="font-serif w-20 h-12 bg-green-500 mt-2 mb-2 mx-16 rounded"
              >
                Submit
              </button>
              <button
                type="reset"
                className="font-serif w-20 h-12 bg-green-500 mt-2 mb-2 rounded"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
        

        <div className="w-96 h-96 mx-52 mt-12">
        <input
          type="text"
          className="mb-2 w-96"
          onChange={filter}
          placeholder="search"
        />
          <table className="border-separate border-spacing-6 border">
            <thead>
              <tr>
                <th>id</th>
                <th>Minadmin Master</th>
                <th>Master</th>
                <th>SuperAgent Master</th>
                <th>Agent Master</th>
                <th>ClientMaster</th>
              </tr>
            </thead>
            <tbody>
              {
                record.map((record)=>{
                  return (
                    <tr>
                      <td>{record._id}</td>
                      <td>{record.fname}</td>
                      <td>{record.address}</td>
                      <td>{record.gender}</td>
                      <td>{record.mobile}</td>
                      <td>{record.username}</td>
                    </tr>
                  )
                })
              },
                {
                users.map((users) => {
                  return (
                    <tr>
                      <td>{users._id}</td>
                      <td>{users.fname}</td>
                      <td>{users.address}</td>
                      <td>{users.gender}</td>
                      <td>{users.mobile}</td>
                      <td>{users.username}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Login;
