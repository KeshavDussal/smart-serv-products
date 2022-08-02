//import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let newarray = [];
        for (let x in data.products) {
          let temp = {
            title: data.products[x].title,
            price: data.products[x].price,
            popularity: parseInt(data.products[x].popularity, 10),
          };

          newarray.push(temp);
        }
        console.log(newarray);
        // console.log(bubbleSort(newarray));
        console.log(
          "sorting",
          newarray.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
        );
        setData(newarray);
      });
  };

  // function bubbleSort(arr) {
  //   //Outer pass
  //   for (let i = 0; i < arr.length; i++) {
  //     //Inner pass
  //     for (let j = 0; j < arr.length - i - 1; j++) {
  //       //Value comparison using ascending order

  //       if (arr[j + 1].popularity > arr[j].popularity) {
  //         //Swapping
  //         [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
  //       }
  //     }
  //   }
  //   return arr;
  // }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <table>
        <tr>
          <th>Title</th>
          <th>Price</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            {/* <td>{item.popularity}</td> */}
          </tr>
        ))}
      </table>
    </div>
  );
}
