import "./grid.css";
import Card from "react-bootstrap/Card";
import React from "react";
import Dott from "./Dott";

export default function grid() {
  return (
    <div className="box">
      <div className="rightcard">
        <Card style={{ width: "18rem" }} className="Card font card-right">
          <Card.Body>
            <Card.Title className="right-tag">BLOG</Card.Title>
            <Card.Text className="Details-right ">
              <h3> March 30 2019</h3>
              <p>
                Wrote my first blog post ever on medium <br />
                <a href="#"> Read more></a>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="leftcard">
        <Card style={{ width: "18rem" }} className="Card font card-right">
          <Card.Body>
            <Card.Title className="left-tag">BLOG</Card.Title>

            <Card.Text className="Details-left float ">
              <h3> March 30 2019</h3>
              <p>
                Wrote my first blog post ever on medium <br />
                <a href="#"> Read more></a>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
