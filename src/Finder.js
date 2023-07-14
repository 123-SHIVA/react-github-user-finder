import React, { useEffect, useState } from "react";
import "./Finder.css";

function Finder() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");

  const buttonClick = (e) => {
    e.preventDefault();
    const gitusers = fetch(`https://api.github.com/users/${userName}`)
      .then((result) => result.json())
      .then((res) => {
        setData(res);

        // mmhm   pr me bs abhi check kr rahi fetch ho raha hai ya n kuchh bolu dat ame kucch hai hi nhi
      });
    console.log(data);
  };

  return (
    <div>
      <h1>github user find</h1>

      <div className="main">
        <div className="gitfinder">
          <form action="" id="myForm" autoComplete="off">
            <input
              id="search"
              type="text"
              placeholder="Enter user name"
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            :
            <button className="btn" onClick={buttonClick}>
              Get Data
            </button>
          </form>
        </div>
     

      <div className="gitfinder">
        <form action="" id="myForm" autocomplete="off">
          <input
            id="search"
            type="text"
            placeholder="Enter user name"
            required
          />
          :<button className="btn">Get Data</button>
        </form>

        <div id="img" className="img">
          <img src={data.avatar_url} />
        </div>

        <div className="gitData">
          <div>
            <div id="name" className="edit">
              Name:{data.login}
            </div>
            <div id="location" className="edit">
              Location:{data.location}
            </div>
            <div id="follower" className="edit">
              Followers:{data.followers}
            </div>
          </div>

          <div>
            <div id="portfolio" className="edit">
              portfolio:{data.portfolio}
            </div>
            <div id="public repos" className="edit">
              Public repos:{data.public_repos}
            </div>
            <div id="bio" className="edit">
              bio:{data.bio}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Finder;
