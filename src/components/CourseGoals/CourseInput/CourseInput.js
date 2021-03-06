import React, { useState } from "react";
// Styled Components library
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
// CSS Modules 
// Specific signature import + rename file "xxx.module.xxx"
import styles from "./CourseInput.module.css";

// Styled Components library
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color : ${props => (props.invalid ? 'red': 'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  // Validation
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // Styled Components library
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     {/* CSS Dynamic Classes using backticks */}
  //     <FormControl invalid={!isValid}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  // CSS Modules
  return (
    <form onSubmit={formSubmitHandler}>
      {/* CSS Dynamic Classes using backticks */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     {/* CSS Dynamic Classes using backticks */}
  //     <FormControl className={!isValid && 'invalid'}>
  //       <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
  //       <input
  //         style={{
  //           borderColor: !isValid ? "red" : "#ccc",
  //           backgroundColor: !isValid ? "salmon" : "transparent",
  //         }}
  //         type="text"
  //         onChange={goalInputChangeHandler}
  //       />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );
};

export default CourseInput;
