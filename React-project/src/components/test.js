import React, { useState, useEffect } from "react";
import EmpTable from "./empTable";
import EmpContextProvider from "../contexts/employeeContext";

const Test = () => {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => setMessage("data.message"));
  }, []);
  return (
    <EmpContextProvider>
      <EmpTable />
    </EmpContextProvider>
  );
};

export default Test;
