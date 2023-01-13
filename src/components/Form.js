import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  
  // Event Handlers
  // function handleFirstNameChange(event) {
  //   // formData is an object, so we need to copy all the property pairs
  //   setFormData({
  //     ...formData,
  //     // To change the lastName into the value we've written, overwrite the key with a new value
  //     firstName: event.target.value,
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value,
  //   });
  // }

  function handleChange(event) {
    // event.target.name === key in formData object we are trying to update
    const name = event.target.name;
    let value = event.target.value;

    if(event.target.type === "checkbox"){
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  console.log(formData)

  // Component Return
  return (
    <form>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        value={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
