import React, { Fragment } from "react";
import { StyledCard } from "./styles/Card.styled";

export default function Card({ item: { id, title, body, image } }) {
  return (
    <Fragment>
      <StyledCard>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div>
          <img src={`./images/${image}`} alt="" />
        </div>
      </StyledCard>
    </Fragment>
  );
}
