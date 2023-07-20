import React, { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";

const Profile = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API endpoint when the component mounts
    axios
      .get("http://localhost:8000/user/getalldata")
      .then((response) => {
        const { Result } = response.data;
        setUserProfiles(Result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Check if userProfiles is an array before using map
  if (!Array.isArray(userProfiles)) {
    return <div>Error: Failed to fetch user profiles.</div>;
  }

  return (
    <div>
      <h1>ALL User Profile</h1>

      <table className="customers">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Total Chitti</th>
          <th>Phone</th>
        </tr>
        {userProfiles.map((profile, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{profile.name}</td>
            <td>{profile.emailid}</td>
            <td>{profile.totalChitti}</td>
            <td>{profile.phone}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Profile;
