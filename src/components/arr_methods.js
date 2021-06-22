import React, { useEffect, useState } from "react";
import Button from "../reusables/Button";
import ArrBtns from "../dynamic/arr_btn_design";
import Table from "../reusables/Table";

const Arr = () => {
  const [arr, setArr] = useState([]);
  const [set, setEle] = useState(true);
  const [str, setStr] = useState("");
  let tmp = [];
  const handleSetStr = () => {
    let arrToStr = arr.join();
    setStr(arrToStr);
  };

  const handleSetArr = () => {
    let strng = prompt(
      "Enter string\n\nSeparate with , and give a space if multiple\n\nFor example, test, test1",
      ""
    );
    let strToArr = arr.slice();
    if (strng && strng !== "") {
      strng = strng.trimEnd();
      let ind = strng.indexOf(strng.match(/[\,]/g));
      if (ind === strng.length - 1) {
        strng = strng.slice(0, -1);
      }
      if (strng.search(/[\,]/g) !== -1) {
        strToArr.concat(strng.split(", "));
      } else {
        strToArr = strToArr.concat(strng.split(""));
      }
      setArr(strToArr);
    } else {
      alert("You haven't provide any message");
    }
  };

  const handleAdd = () => {
    let ele = prompt("Enter element");
    tmp = arr.slice();

    if (ele && ele !== "") {
      if (window.confirm("Do you want to add at first position?")) {
        tmp.unshift(ele);
      } else if (window.confirm("Do you want to add at specific position?")) {
        let pos = +prompt("Enter position", 0);
        tmp.splice(pos - 1, 0, ele);
      } else {
        alert("By default add element at last");
        tmp.push(ele);
      }
      setArr(tmp);
    }
  };

  const handleSort = () => {
    tmp = arr.slice();

    if (window.confirm("Want to sort in Ascending order?")) {
      tmp.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    } else if (window.confirm("Want to sort in Descending order?")) {
      tmp.sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
    }
    setArr(tmp);
  };

  const handleReverse = () => {
    tmp = arr.slice();

    tmp.reverse();

    setArr(tmp);
  };

  const handleRemove = () => {
    tmp = arr.slice();

    if (window.confirm("Remove from the first?")) {
      tmp.shift();
    } else if (window.confirm("Remove from the position?")) {
      let pos = prompt("Enter position");
      tmp.splice(pos - 1, 1);
    } else {
      alert("By default remove element from the last");
      tmp.pop();
    }

    setArr(tmp);
  };

  const handleReduce = () => {
    // Here you can see the clear difference of reduce() and reduceRight method

    // Skipping the first element of array.
    alert(
      `reduce() left -> right\n\nConcat array elements -- ` +
        [
          [1, 2],
          [3, 4],
          [5, 6],
        ].reduce((prev, curr) => prev.concat(curr)) // This method start concat from the left -> right.
    );

    // Accept the first letter of array.
    alert(
      `reduceRight() right -> left\n\nConcat array elements -- ` +
        [
          [1, 2],
          [3, 4],
          [5, 6],
        ].reduceRight((prev, curr) => prev.concat(curr)) // This method start concat from the left <- right.
    );
  };

  const handleInclude = () => {
    tmp = arr.slice();

    let ele = prompt("Element that include or not");
    let ind = prompt("From which index?");

    if (ele && ele !== "") {
      if (ind === "" || !ind) ind = 0;
      if (tmp.includes(ele, ind)) {
        alert("Element is in array");
      } else {
        alert("Element is not in array");
      }
    } else {
      alert("You are not check element in array");
    }
  };

  const handleLastIndex = () => {
    let ele = prompt("Last index of ");
    let ind = prompt("From index");
    if (!ind || ind === "") {
      ind = 0;
    }
    let lastInd = tmp.lastIndexOf(ele, ind);
    alert("Last Index of " + ele + " is " + (lastInd + 1));
  };

  const handleClicks = (name) => {
    switch (name) {
      case "string":
        return handleSetStr;

      case "array":
        return handleSetArr;

      case "add":
        return handleAdd;

      case "sort":
        return handleSort;

      case "reverse":
        return handleReverse;

      case "remove":
        return handleRemove;

      case "reduce":
        return handleReduce;

      case "include":
        return handleInclude;

      case "lastIndex":
        return handleLastIndex;

      default:
        break;
    }
  };

  useEffect(() => {
    while (set) {
      let res = prompt(
        "\nClick on cancel for terminate\n\nPlease enter value for array"
      );

      if (res !== "" && res) {
        tmp.push(res);
        setArr(tmp);
      } else {
        setEle(false);
        alert("You haven't provide elements");
        break;
      }
    }

    tmp = arr.slice();
  }, [set]);

  return (
    <>
      <Table params={arr} />
      {str && <p>Array to string: '{str}'</p>}
      {Object.values(ArrBtns).map(({ text, name, ...other }, ind) => (
        <>
          <Button
            text={text}
            onClick={handleClicks(name)}
            {...other}
            style={{ marginTop: "10px" }}
          />
          <br />
        </>
      ))}
    </>
  );
};

export default Arr;
