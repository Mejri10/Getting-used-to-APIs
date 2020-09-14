import React, { useState, useEffect} from "react";
import axios from "axios";



function Userlist() {

    const [listOfUSer, setListOfUSer] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setListOfUSer(result.data);
    
  };
  fetchData();

},[]);

    return (

        <ul>
          {listOfUSer.map(item => (
            <li key={item.id}>
           {item.name}
            </li>
          ))}
        </ul>
      );
}

export default Userlist
