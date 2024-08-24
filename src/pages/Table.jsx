import axios from "axios";
import { useState, useEffect } from "react";

const Table = () => {
    const [myData, setMyData] = useState([]);

    const getData = async () => {
        await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((responce) => (
            setMyData(responce.data)
        ));
    };

    useEffect(() => {
        getData();
    }, []);
   

  return (
    <div className="p-20">
      
      <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Website
                </th>               
            </tr>
        </thead>
        <tbody>
            {myData.map((userData, index) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {userData.name}
                </th>
                <td class="px-6 py-4">
                    {userData.username}
                </td>
                <td class="px-6 py-4">
                    {userData.email}
                </td>
                <td class="px-6 py-4">
                    {userData.address.street}, {userData.address.city}
                </td>
                <td class="px-6 py-4">
                    {userData.phone}
                </td>
                <td class="px-6 py-4">
                    {userData.website}
                </td>
            </tr>   
            ))}
        </tbody>
    </table>
</div>


    </div>
  )
}

export default Table
