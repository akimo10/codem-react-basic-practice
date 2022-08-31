import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
    .get('http://localhost:3003/user')
    .then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  
  return (
    <div>
      {users.map(user => {
        return (
          <div>
            <h3>{user.username}</h3>
            <p>age:{user.age}</p>
            <p>hobby:{user.hobbies.join(',')}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Example;
