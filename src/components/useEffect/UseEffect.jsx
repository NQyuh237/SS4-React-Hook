import React, { useCallback, useEffect, useState } from "react";

export default function UseEffect() {
  // cach 1: useEffect(callback)
  // + callback se duoc goi khi components duoc mounted
  // + callback duoc goi khi components duoc gan vao DOM
  // + callback se duoc goi khi state thay doi => it dung
  // cach 2: useEffect(callback,[])
  // + call back se duoc goi khi components duoc mounted
  // + callback chi duoc goi trong lan dau tien components duoc render <=> componentsDidMount trong lifecycle
  // cach 3: useEffect(callback, [deps])
  // + callback duoc goi khi components duoc mounted
  // + callback duoc goi khi dependency (co the la state, props hoac du lieu khac) thay doi

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // cach 1
  useEffect(() => {
    // thay doi tieu de tren tab
    document.title = name;
    console.log("useEffect duoc goi ...");
  });

  // cach 2
  useEffect(() => {
    // hop cho viec goi API hien thi thong tin
    console.log("cach thu 2 duoc goi");
  }, []);

  // cach 3
  useEffect(() => {
    console.log("cach 3 name", name);
  }, [name]);
  useEffect(() => {
    console.log("cach 3 email", email);
  }, [email]); //su dung toan tu === de so sanh

  const handleSubmit = (e) => {
    e.preventDefault();
    // lay du lieu tu cac o input va gui len server
    const newUser = {
      name: name,
      email: email,
    };
    
    console.log(newUser);
  };
  return (
    <>
      {console.log("render")}
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
