import React from "react";
import "./css/Trees.css";  // ✅ Make sure your styles are correct
import { Link } from "react-router-dom"; 

const TestTreeContent = () => {
  return (
    <div className="pageportal">
      <table>
        <tr><th>Affinities</th></tr>
        <tr>
          <td>
            <div className="column example">

              <p>This is the Test Tree Page</p>


            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TestTreeContent;
