import  React, { useState, useEffect } from 'react';

export default function App() {

  const [usersData, setUsersData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://random-data-api.com/api/v2/users?size=10");
      const data = await response.json();
      setUsersData(data);
    }
    fetchData();
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  
    return (
        <main>
    <button onClick={handleClick}>Switch</button>
    <article>
        { usersData.map((user, index) => {
          return        <section key={index}>
          <img src={count === 0 ? "images/harumestfacere.png" : user.avatar} className="pic" alt=""/>
          <aside> 
                  <h1>Username:</h1>
                  <h4>{count === 0 ? "jeffry.hansen" : user.username}</h4>
                  <h2>Social_insurance_no:</h2>
                  <h5>{count === 0  ? "National Specialist" : user.social_insurance_number}</h5>
                  <h3>Password:</h3>
                  <small>{count === 0  ? "Communication" : user.password}</small>
              </aside>
          </section>
        })
      }
    </article>  
    <footer><a href="https://github.com/traez/api-frontend-react" target="_blank">https://github.com/traez</a></footer>
    </main>
)}

/*
        <section>
        <img src={count === 0 ? "images/harumestfacere.png" : usersData[0].avatar} className="pic" alt=""/>
        <aside> 
                <h1>Username:</h1>
                <h4>{count === 0 ? "jeffry.hansen" : usersData[0].username}</h4>
                <h2>Social_insurance_no:</h2>
                <h5>{count === 0  ? "National Specialist" : usersData[0].social_insurance_number}</h5>
                <h3>Password:</h3>
                <small>{count === 0  ? "Communication" : usersData[0].password}</small>
            </aside>
        </section>
*/